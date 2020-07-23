<template>
  <div >
    <div class=".col-md-6 col-lg-6 container">
      <input class="form-control" type="text" v-model="task" @keyup.enter="addTask" placeholder="Please enter the task?" required/>
      <button @click="addTask" class="btn btn-primary ">Add-Task</button>

    </div>
    <br>
    <div class=".col-md-4 col-lg-4 container mt-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="(temp,index) in list" v-bind:key="index">
          {{temp}}
          <button  class="btn btn-danger myBtn" @click="remove(index)">Delete</button>
          <button  class="btn btn-secondary myBtn"  @click="edit(index)" >Edit</button>
          <button class="btn btn-success myBtn" @click="done(index)">Done</button>
        </li>
      </ul>
    </div>

      <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    </div>
      <!-- Modal Ends -->
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
    done: function (id) {
      alert('Congrats..On Completing the task');
      this.x=this.list.splice(id, 1);
      this.$emit("inputData", this.x[0]);
    },
    notifyMe: function () {
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }
      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        new Notification("Hi there here it is!");
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
.myBtn {
  float: right;
  margin-right: 5px;
}

.list-group-item{
  background-color: #384f79;
}
</style>