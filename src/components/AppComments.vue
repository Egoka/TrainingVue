<template>
  <p style="text-align: center;" v-if="!loudComment">
    <button class="btn primary"
            @click="$emit('getComments')"
    >Загрузить комментарии</button>
  </p>
  <div class="loader" v-if="loudComment"></div>
  <div class="card"  v-if="comments.length>0">
    <h1>Комментарии</h1>
  </div>
  <ul class="list" v-if="comments.length>0">
    <li
        v-for="user in comments" :key="user.id"
        class="list-item">
      <div class="card" style="width: 100%;">
        <h4>{{ user.email }}</h4>
        <div v-for="(comment,key) in user.listComments" :key="key">
          <small>{{ comment.body }}</small>
          <hr/>
        </div>
      </div>
    </li>
  </ul>
  <div v-else>Коментариев еще нет</div>
</template>

<script>
export default {
  name: "AppComments",
  emits:['getComments'],
  props:{
    comments:Array,
    loudComment: {
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>

</style>