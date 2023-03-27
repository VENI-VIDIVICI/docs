<template>
  <div class="mobile_wrap">
    <div class="head_wrap"></div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "./reset.scss";
.mobile_wrap {
  width: 360px;
  height: 700px;
  background-color: #f7f8fa;
}
.head_wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: white;
}
</style>
