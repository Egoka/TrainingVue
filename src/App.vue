<template>
  <div class="container">
<!-- =====================-->
    <app-resume
        @moveData="moveData"
        @editData="editData"
        @deleteBlock="deleteBlock"
        @saveResume="saveResume"
        :resume="resume"
    ></app-resume>
<!-- =====================-->
    <app-input-form
        :select-list="selectList"
        @addBlock="addBlock"
    ></app-input-form>
<!-- =====================-->
  </div>
  <div class="container">
    <app-comments
        :comments="comments"
        :loud-comment="loud"
        @getComments="loudComments"
    ></app-comments>
  </div>
</template>

<script>
import appInputForm from "@/components/AppInputForm";
import appResume from "@/components/AppResume";
import appComments from "@/components/AppComments";
const urlListComments='https://jsonplaceholder.typicode.com/comments?_limit=42'
const urlDB='https://vue-with-http-progect-default-rtdb.europe-west1.firebasedatabase.app/resume'
export default {
  mounted() {
    this.loudResume()
  },
  data(){return{
    selectList:[
        {value:'title', text:'Заголовок', type:'text'},
        {value:'subtitle',  text:'Подзаголовок',type:'text'},
        {value:'subtitle1',  text:'Подзаголовок H3',type:'text'},
        {value:'subtitle2',  text:'Подзаголовок H4',type:'text'},
        {value:'avatar', text:'Аватар',type:'block'},
        {value:'text', text:'Текст',type:'text'}],
    resume:[
      // {type:'title', text: 'Рик'},
      // {type:'avatar', text:'https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png'},
      // {type:'subtitle', text:'Ученый'},
      // {type:'text', text:'главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].'},
      // {type:'subtitle1', text:'По итогу хороший чувак'},
    ],
    comments:[],
    loud:false
  }},
  provide(){return{
    typeList:this.selectList
  }},
  methods:{
    async loudResume(){
      try {
        const result = await fetch(urlDB + '.json')
        const resume = await result.json()
        console.log(resume)
        this.resume = resume[Object.keys(resume)[Object.keys(resume).length-1]]
      }catch (e) {console.log(e)}
    },
    loudComments(){
      this.loud = true
      setTimeout(async()=> {
        try {
          const result = await fetch(urlListComments)
          const comments = await result.json()
          comments.map(recording => {
            const index = this.comments
                .findIndex((writer) => writer.id === recording.postId)
            if (index >= 0) {
              this.comments[index].listComments.push({
                id: recording.id,
                key: recording.name,
                body: recording.body,
              })
            } else {
              this.comments.push({
                id: recording.postId,
                email: recording.email,
                listComments: [{
                  id: recording.id,
                  key: recording.name,
                  body: recording.body,
                }]
              })
            }
          })
          this.loud = false
        } catch (e) {
          console.log(e)
        }
      },1000)
    },
    addBlock(select,input){
      this.resume.push({type:select,text:input})
      this.saveResume()
    },
    editData(id,text){
      this.resume[id].text = text
      this.saveResume()
    },
    moveData(id,direction){
      if(direction){//up
        if(id>0){
          const index = this.resume[id]
          this.resume[id] = this.resume[id-1]
          this.resume[id-1] = index
          this.saveResume()}
      }else{//down
        if(this.resume.length>id){
          const index = this.resume[id]
          this.resume[id] = this.resume[id+1]
          this.resume[id+1] = index
          this.saveResume()}
      }
    },
    deleteBlock(id){
      this.resume = this.resume.filter((person,key)=>key !== id)
      this.saveResume()
    },
    async saveResume(){
      let listId = await fetch(urlDB+'.json')
      listId= await listId.json()
      Object.keys(listId).map(async id=>await fetch(
          urlDB + '/' + id + '.json',{method: 'DELETE'}))
      const result = await fetch(
          urlDB + '.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(this.resume)
          })
      console.log(result)
    }
  },
  components:{appInputForm,appResume,appComments}
}
</script>

<style>
</style>
