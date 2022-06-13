<template>
  <div class="logo">
    <img src="../../assets/images/element-plus-logo.svg" alt="logo"/>
    <span class="title">LOGO</span>
  </div>
</template>
<style lang="scss" scoped>
.logo{
  position: absolute;
  left: 0;
  top: 0;
  width: 185px;
  background-color: #2b2f3a;
  height: 50px;
  border:none;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #fff;
  img{
    width: 100px;
    // height: 230px;
    margin-right: 12px;
  }
  span{
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica, sans-serif;
    vertical-align: middle;
  }
}
</style>