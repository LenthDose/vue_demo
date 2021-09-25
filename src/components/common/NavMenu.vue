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
      <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
      <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
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
                { name: '/personal', navItem: '个人中心'}
            ]
        };
    },
   
}
</script>
<style lang="">
     a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
    
</style>