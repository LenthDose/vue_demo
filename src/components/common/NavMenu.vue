<template lang="">
    <div>
      <el-menu
      :default-active="this.$route.path"
      :router="true"
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <el-submenu index="1-1">
        <template slot="title">个人中心</template>
        <el-menu-item index="1-2" :index="'/profile'">个人信息</el-menu-item>
        <el-menu-item index="1-3" :index="'/manager'">修改信息</el-menu-item>
        <el-submenu index="2-1">
          <template slot="title">商品管理</template>
          <el-menu-item index="2-2" :index="'/add'">商品添加</el-menu-item>
          <el-menu-item index="2-3" :index="'/delete'">商品删除</el-menu-item>
        </el-submenu>
      </el-submenu>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">二手商品交易</span>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'NaveMenu',
    data() {
        return {
            navList: [
                { name: '/index', navItem: '首页'},
                { name: '/product', navItem: '商品'},
            ]
        };
    },
   
}
</script>
<style lang="">

  span {
    pointer-events: none;
  }
    
</style>