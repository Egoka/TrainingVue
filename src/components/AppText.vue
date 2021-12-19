<template>
  <div style="width: 100%;">
    <h1 :contenteditable="inputStatus"
        @click="inputStatus=true"
        @mouseout="editData"
        v-if="type==='title'"><slot/></h1>
    <h2 :contenteditable="inputStatus"
        @click="inputStatus=true"
        @mouseout="editData"
        v-else-if="type==='subtitle'"><slot/></h2>
    <h3 :contenteditable="inputStatus"
        @click="inputStatus=true"
        @mouseout="editData"
        v-else-if="type==='subtitle1'"><slot/></h3>
    <h4 :contenteditable="inputStatus"
        @click="inputStatus=true"
        @mouseout="editData"
        v-else-if="type==='subtitle2'"><slot/></h4>
    <p :contenteditable="inputStatus"
       @click="inputStatus=true"
       @mouseout="editData"
       v-else-if="type==='text'"><slot/></p>
  </div>
</template>

<script>
export default {
  name: "AppText",
  inject:['typeList'],
  emits:['editData'],
  props: {
    id:Number,
    type:String,
    text:String
  },
  data(){return{
    inputStatus:false
  }},
  methods:{
    editData(event){
      if(this.inputStatus) {
        this.inputStatus = false
        this.$emit('editData', this.id, event.target.innerText)
      }
    },

  }
}
</script>

<style scoped>
h1[contentEditable],
h2[contentEditable],
h3[contentEditable],
h4[contentEditable],
p[contentEditable]{
  outline: none;
}
</style>