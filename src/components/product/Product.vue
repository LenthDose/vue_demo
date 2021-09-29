<template lang="">
  <div>
    <div>
      <el-menu
      class="categories"
      default-active="0"
      @select="handleSelect"
      active-text-color="red">
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">全部</span>
      </el-menu-item>
      <el-menu-item @click="study()">
        <i class="el-icon-menu"></i>
        <span slot="title">学习用书</span>
      </el-menu-item>
      <el-menu-item @click="life()">
        <i class="el-icon-menu"></i>
        <span slot="title">生活用品</span>
      </el-menu-item>
      <el-menu-item @click="tech()">
        <i class="el-icon-menu"></i>
        <span slot="title">电子设备</span>
      </el-menu-item>
      <el-menu-item @click="cosm()">
        <i class="el-icon-menu"></i>
        <span slot="title">化妆品</span>
      </el-menu-item>
      <el-menu-item @click="other()">
        <i class="el-icon-menu"></i>
        <span slot="title">其他</span>
      </el-menu-item>
    </el-menu>
    </div>
    <el-row style="height: 840px;">
      <el-tooltip effect="dark" placement="right"
                  v-for="item in product"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.readCount}}</span> /
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.description}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.pic" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
    <div class="pagination">
      
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
           product: {
              title: '',
              description: '',
              readCount: ''
           }
        };
      },

      mounted() {
        var _this = this;
        this.$axios.get("/product/listAll")
        .then(res =>{
          if(res.data.code === 200){
            _this.product = res.data.data;
          }else{
            console.log("显示失败");
          }
        })
      },

      methods: {
      handleSelect(key,keyPath){
      },
      study(){
        var _this = this;
        this.$axios.get('/product/list/category?categoryid=1',
        )
        .then(res => {
          _this.product = res.data.data;
          console.log(res.data);
        })
      },
      life(){
        var _this = this;
        this.$axios.get('/product/list/category?categoryid=2')
        .then(res => {
          _this.product = res.data.data;
        })
      },
      tech(){
        var _this = this;
        this.$axios.get('/product/list/category?categoryid=3')
        .then(res => {
          _this.product = res.data.data;
        })
      },
      cosm(){
        var _this = this;
        this.$axios.get('/product/list/category?categoryid=4')
        .then(res => {
          _this.product = res.data.data;
        })
      },
      other(){
        var _this = this;
        this.$axios.get('/product/list/category?categoryid=4')
        .then(res => {
          _this.product = res.data.data;
        })
      }
    }
  }
</script>

<style>
.cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  .pagination {
  height: 50px;
  text-align: center;
}

.categories {
      position: fixed;
      margin-left: 50%;
      left: -600px;
      top: 100px;
      width: 150px;
    }
</style>
  