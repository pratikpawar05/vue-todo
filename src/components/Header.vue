<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#"></a>
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
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active ml-3">
        <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item ml-3">
             <router-link to="/about">About</router-link>
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
</style>