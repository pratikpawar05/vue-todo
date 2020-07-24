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
          <span :style="isClicked ? { 'text-decoration': 'line-through' } : null" :id="index">{{temp}}</span>
          <button class="btn btn-danger myBtn" @click="remove(index)">Delete</button>
          <button class="btn btn-secondary myBtn" @click="edit(index)" data-toggle="modal" data-target="#exampleModal" data-whatever="">Edit</button>
          <button class="btn btn-success myBtn" @click="done($event,index)" >Done</button>
        </li>
      </ul>
    </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
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
  created(){
  },
  data() {
    return {
      isClicked:false,
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
    edit:function(id){
      this.list.splice(id, 1);
      // this.list.toString();
    },
    remove: function (id) {
      this.list.splice(id, 1);
    },
    done: function ($event,id) {
      $event.target.parentElement.querySelector('span').setAttribute("style", "text-decoration: line-through;");
      $event.target.setAttribute("style", "display: none;");

      console.log(id);
      // this.isClicked=true;
      // alert('Congrats..On Completing the task');
      // this.x=this.list.splice(id, 1);
      // this.$emit("inputData", this.x[0]);
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