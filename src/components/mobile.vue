<template>
  <div class="mobile_wrap">
    <div class="head_wrap"></div>
    <div class="content">
      <!-- <router-view></router-view> -->
    </div>
    <div class="footer"></div>
  </div>
</template>

<script></script>

<style lang="scss">
.mobile_wrap {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 360px;
  height: 700px;
  background-color: #eff2f5;
  border: 1px solid black;
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
