<template>
  <div class="spin">

  </div>
</template>

<script>
export default {

}
</script>

<style>
.spin {
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 1px solid rgb(238, 255, 0);
    border-radius: 50%;
    border-top-color: aqua;
    animation: spin 1s ease infinite;
}
@keyframes spin {
    to{transform: rotateZ(360deg);}
}
</style>