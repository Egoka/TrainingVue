<template>
  <div style="width: 100%;"  @change="editData">
    <div v-if="type==='avatar'"
         @click="inputStatus=true"
         class="avatar">
      <img :src="text" alt="">
      <input v-if="inputStatus"

             v-model.trim="text"

             class="inputLink"
             type="url" :placeholder="text">
<!--      @change="$emit('editData',id, input)"-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAvatar",
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
    async editData(event){
      try {
        const valueInput = event.target.value
        const result = await fetch(valueInput)
        if (this.inputStatus) {
          console.log(this.inputStatus)
          this.inputStatus = false
          this.$emit('editData', this.id, valueInput)
        }
      }catch (e){
        event.target.style.borderBottomColor='#e53935'
      }
    },

  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: space-around;
  align-items: center;}
.avatar img {
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;}
.inputLink{
  background: transparent;
  height: 2rem;
  width: 100%;
  max-width: 50%;
  border: none;
  border-bottom: 2px solid #e3e3e3;
}
input:focus-visible{
  outline: none;
}
</style>