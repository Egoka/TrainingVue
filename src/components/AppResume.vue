<template>
  <div class="card centerFlex card-w70" style="margin: 10px auto;">
    <div v-for="(block,key) in resume" :key="key"
         class="list-item">
      <div class="moveData">
        <button class="arrowData material-icons-outlined"
                @click="$emit('moveData',key,true)"
        >expand_less</button>
        <button class="arrowData material-icons-outlined"
                @click="$emit('moveData',key,false)"
        >expand_more</button>
      </div>
        <component
            :is="addBlock(block.type)"
            :id="key"
            :type="block.type"
            :text="block.text"
            @editData="editData">
            {{ block.text }}
        </component>
      <button
          @click="$emit('deleteBlock',key)"
          class="close material-icons-outlined"
      >do_disturb_on</button>
    </div>
<!--    <button class="btn save" style="margin:0 auto"-->
<!--            v-if="resume.length>0"-->
<!--            @click="$emit('saveResume')"-->
<!--    >Сохранить</button>-->
    <!--<h2 style="margin-top: 3rem; text-align:center;" v-else>Еще ничего нет</h2>-->
  </div>
</template>

<script>
import appText from "@/components/AppText";
import appAvatar from "@/components/AppAvatar";
export default {
  name: "AppResume",
  inject:['typeList'],
  emits:['moveData','deleteBlock','saveResume','editData'],
  props:{
    resume: Array
  },
  methods:{
    addBlock(value){
      if(this.typeList
          .filter(block=>block.type==='text')
          .some(block=>block.value===value))
        return 'app-text'
      if(this.typeList
          .filter(block=>block.type==='block')
          .some(block=>block.value===value))
        return 'app-avatar'
    },
    editData(id,text){
      this.$emit('editData', id,text)
    },
  },
  components:{appText,appAvatar}
}
</script>

<style scoped>
.list-item{
  align-items: stretch;
  margin: 5px 0;
  padding: 5px;
  border-radius: 1rem;
  transition: all 0.22s;}
.list-item:hover{
  background: #eaeaea;
  transition: all 0.22s;}
.close, .arrowData{

  border: none;
  background: transparent;
  border-radius: 50%;
  width: 1.5rem;
  padding: 0;
  opacity: 0;}
.list-item:hover .close,
.list-item:hover .arrowData{opacity:1;}
.moveData{
  display: flex;
  flex-direction: column;
  justify-content: space-between;}
.close{
  color: #e53935;}
.arrowData{
  color: #42b983;}
.save{
  margin:0 auto}
.save:hover{
  color:#fff;
  background:#42b983;
}
</style>