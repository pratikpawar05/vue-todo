<template>
  <div class="hello">
<h1>{{ msg }}</h1>
</div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return{
      name:'Ali',
    }
  },
  methods:{
    clickme:function(){
      console.log('You Just Clicked Me!')
    },
    keyUp:function(){
      console.log('You Just Pressed The Key!')
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
