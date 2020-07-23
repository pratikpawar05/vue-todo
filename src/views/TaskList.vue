<template>
  <div class="completed-tasks">
      <Todo @inputData="addToList"></Todo>
        <div class=".col-md-4 col-lg-4 container mt-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="(temp,index) in completed" v-bind:key="index">
          {{temp}}
          <button  class="btn btn-secondary myBtn"  @click="edit(index)">Re-add</button>
        </li>
      </ul>
    </div>
  </div>
 
</template>

<script>
export default {
    name: "TaskList",
    data(){
        return{
            completed:[]
        }
    },
    methods:{
        addToList(x){
            console.log(x)
            this.completed.push(x)
        }
    }
}
</script>
<style scoped>

</style>