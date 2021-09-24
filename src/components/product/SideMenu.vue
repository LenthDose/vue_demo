<template>
    <el-menu
      class="categories"
      default-active="0"
      @select="handleSelect"
      active-text-color="red">
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">全部</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">学习用书</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">生活用品</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">电子设备</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">化妆品</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">其他</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">科技</span>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script>
    export default {
      name: 'SideMenu',
      methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
        console.log(key,keyPath)
      }
    }
  }
  </script>
  
  <style scoped>
    .categories {
      position: fixed;
      margin-left: 50%;
      left: -600px;
      top: 100px;
      width: 150px;
    }
  </style>
  
  