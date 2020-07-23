<template>
  <div>
    <div style="margin:100px;">
      <input type="text" v-model="task" @keyup.enter="addTask" placeholder="Please enter the task?" required/>
      <br />
      <button @click="addTask" class="btn btn-primary">Submit</button>
    </div>
    <div class=".col-md-4 col-lg-4 container mt-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="(temp,index) in list" v-bind:key="index">
          {{temp}}
          <button id="removeBtn" @click="remove(index)" class="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      task: "",
      list: ["Go to shower at 8:00am"],
    };
  },
  methods: {
    addTask: function () {
      if(this.task){
      this.list.push(this.task);
      //   console.log('You Just Added A New Task!');
      this.task = "";
      }
    },
    remove: function (id) {
      this.list.splice(id, 1);
    },
    notifyMe: function () {
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
    },
  },
};
</script>

<style scoped>
#removeBtn {
  float: right;
}
</style>