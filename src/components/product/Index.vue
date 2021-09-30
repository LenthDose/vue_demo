<template>
    <el-container>
      <el-aside style="width: 200px;margin-top: 20px">
        <switch></switch>
      </el-aside>
      <el-main>
        <Product class="area"></Product>
      </el-main>
    </el-container>
  </template>
  
  <script>
    import Product from './Product.vue'
    export default {
      name: 'ProductIndex',
      components: {Product}
    }
  </script>
  
  <style scoped>
    .area {
      width: 990px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
  
  