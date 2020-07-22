<template>
  <div >
      <input type="text" v-model="task" placeholder="Please enter the task?">
      <button @click="addTask">Submit</button>
      <ul>
          <li v-for="(temp,index) in list" v-bind:key="index" >{{temp}}<button @click="remove(index)">Delete</button></li>
      </ul>

  </div>
</template>

<script>
export default {
  name: "todo",
  data(){
      return{
          task:'',
          list:[
              'Go to shower at 8:00am'
          ],
      }
  },
  methods:{
    addTask:function(){
        this.list.push(this.task);
    //   console.log('You Just Added A New Task!');
      this.task='';
    //   this.list.
    },
    remove:function(id){
        this.list.splice(id,1);
    },
    notifyMe:function(){
         if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            new Notification("Hi there!");
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
            if (permission === "granted") {
                new Notification("Hi there!");
            }
         });
        }
    }
  }
};
</script>

<style scoped>

</style>