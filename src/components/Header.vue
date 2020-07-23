<template>
  <nav class="navbar navbar-expand-lg">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <i class="fa fa-tasks" aria-hidden="true"></i>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      Todo-List
      <ul class="navbar-nav ml-auto ">
        
        <li class="nav-item active ml-3">
        <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item ml-3">
             <router-link to="/completedlist">Completed Tasks</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.navbar {
  background: #1a1d24;
}
.navbar-nav router-link {
  color: #fff;
  padding: 0 15px;
  display: block;
}
ul li{
  margin-right: 20px;
}
</style>