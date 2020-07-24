<template>
  <div class="home">
    <todo @inputData='completedTodo'></todo>
  </div>
</template>

<script>
// @ is an alias to /src
export default{
name: "HOME",
data(){
  return{
    completedTask:[]
  }
},
methods:{
    completedTodo(data){
    this.completedTask.unshift(data);
  },
}
}
</script>
