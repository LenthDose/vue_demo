<template lang="">
    <div class="personal">
        <el-descriptions class="margin-top" title="用户信息" :column="1" :size="size" border>
            <template slot="extra">
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              {{user.username}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              {{user.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
              </template>
              {{user.address}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                年龄
              </template>
              {{user.age}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                性别
              </template>
              {{user.gender}}
            </el-descriptions-item>
          </el-descriptions>
    </div>
</template>


<script>
export default {
    data() {
        return {
            size: 'medium ',
            user: {
                username: '',
                age: '',
                gender: '',
                phone: '',
                address: ''
            }
        }
    },

    mounted() {
        var _this = this;
        this.$axios.get('/profile',{
            params: {
                username: this.$store.state.user.username
            }
        }).then(res =>{
            if(res.data.code === 200){
                _this.user = res.data.data;
                console.log(res.data.data);
                console.log(_this.user);
            }else{
                alert("查询失败");
            }
            
        })
    }
}
</script>
<style lang="">
    .personal {
        position: relative;
        left: 26%;
        width: 400px;
        padding: 130px;
    }
</style>