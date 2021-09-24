<template lang="">
    <div class="personal">
        <el-descriptions title="用户信息" size="medium">
            <el-descriptions-item label="用户名">{{user.username}}</el-descriptions-item>
            <el-descriptions-item label="年龄">{{user.age}}</el-descriptions-item>
            <el-descriptions-item label="性别">{{user.gender}}</el-descriptions-item>
            <el-descriptions-item label="手机号">{{user.phone}}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>


<script>
export default {
    data() {
        return {
            user: {
                username: '',
                age: '',
                gender: '',
                phone: ''
            }
        }
    },

    mounted() {
        var _this = this;
        this.$axios.get('/personal',{
            params: {
                username: this.$route.query.username
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