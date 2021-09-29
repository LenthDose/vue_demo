<template lang="">
    <div>
      <div class="delete-box">
        <el-row style="height: 840px;">
            <el-tooltip effect="dark" placement="right"
                        v-for="item in product"
                        :key="item.id">
              <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
              <p slot="content" style="font-size: 13px;margin-bottom: 6px">
                <span>{{item.readCount}}</span> /
              </p>
              <p slot="content" style="width: 300px" class="abstract">{{item.description}}</p>
              <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-left: 500px; margin-top: 100px;" class="book"
                       bodyStyle="padding:10px" shadow="hover">
                <div class="cover">
                  <img :src="item.pic" alt="封面">
                </div>
                <div class="info">
                  <div class="title">
                    <a href="">{{item.title}}</a>
                    <el-button type="text" class="button">删除</el-button>
                  </div>
                </div>
              </el-card>
            </el-tooltip>
          </el-row>
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
        }
    },

    mounted() {
        var _this = this
        this.$axios.get("/product/getByUser",{
            params: {
                cid: this.$store.state.user.id
            }
        }).then((result) => {
            if(result.data.code === 200){
                _this.product = result.data.data
            }
        }).catch((err) => {
            this.$message({
                message: '获取失败',
                type: 'warning'
            })
        });
    },
}
</script>
<style lang="">
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


.categories {
      position: fixed;
      margin-left: 50%;
      left: -600px;
      top: 100px;
      width: 150px;
    }
.button {
  padding: 0;
  float: right;
}
</style>