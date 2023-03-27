<template>
  <div class="box">
    <div class="if_wrap">
      <iframe src="/mobile.html#/" height="640px"></iframe>
    </div>
  </div>
</template>
<script>
import mobile from "./components/mobile.vue";
export default {
  name: "app",
  components: {
    mobile,
  },
};
</script>
<style lang="scss">
@import "./reset.scss";
div {
  color: antiquewhite;
}
.box{
  width: 100vw;
  height: 100vh;
  background-color: #eff2f5;
  position: relative;
}
.if_wrap{
  position: absolute;
  top: 50px;
  right: 50px;
  min-width: 360px;
  iframe{
    display: block;
    width: 100%;
    overflow: hidden;
    border: 0;
  }
}
</style>
