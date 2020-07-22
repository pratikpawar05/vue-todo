<template>
<div>
    <div class="alert" :class="mode">
        <slot></slot>
    </div>
</div> 
</template>
<!-- TO EXPORT THE COMPONENT     -->
<script>
export default {
  name: "Alert",
  props: [
    'mode',
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary {
    color: #fff;
    background-color: #380be6;
    border-color: #380be6;
}
.success {
    color: #fff;
    background-color: #29b72e;
    border-color: #29b72e;
}
.danger {
    color: #fff;
    background-color: #dc271e;
    border-color: #dc271e;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}

</style>