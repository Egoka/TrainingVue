<template>
  <form class="card card-w70" style="margin: 0 auto;">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="select">
        <option
            v-for="option in selectList" key="option"
            :value="option.value"
        >{{ option.text }}</option>
      </select>
    </div>
    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="input"></textarea>
    </div>
    <button
        class="btn primary"
        :disabled="input.length<3"
        @click.prevent="$emit('addBlock',select,input)"
    >Добавить</button>
  </form>
</template>

<script>
export default {
  name: "AppInputForm",
  emits:['addBlock'],
  props:{
    selectList:{
      type:Array,
      default:[
          {value:'title', text:'Заголовок'},
          {value:'subtitle', text:'Подзаголовок'},
          {value:'avatar', text:'Аватар'},
          {value:'text', text:'Текст'}],
      validator(value) {
        return value
            .map(option=> {
              return option.value !== undefined &&
                  option.text !== undefined})
            .reduce((sum,option)=>sum+option,0)
            ===value.length}},
  },
  data(){return{
    select:this.selectList[0].value,
    input:''
  }},
}
</script>

<style scoped>

</style>