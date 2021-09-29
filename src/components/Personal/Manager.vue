<template lang="">
    <div class="register-box">
        <el-form :model="profile" status-icon :rules="rules" ref="profile" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model.number="profile.username"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="profile.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="profile.gender">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone">
                <el-input v-model.number="profile.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('profile')">提交</el-button>
              <el-button @click="resetForm('profile')">重置</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile:{
                username: '',
                age: '',
                gender: '',
                phone: ''
            },

            rules: {
                username: [
                { required: true, message: '请输入用户名！', trigger: 'blur' }
                ],
                age: [
                { required: true, message: '请输入年龄', trigger: 'blur' },
                ],
                gender: [
                { required: true, message: '请选择性别', trigger: 'change' },
                ],
                phone: [
                { required: true, message: '请输入联系方式', trigger: 'blur' },
                ]
            }

        }
    },

    mounted() {
        this.$axios.get("/profile",{
            params:{
                username: this.$store.state.username
            }
        })
            .then((result) => {
                this.profile = result.data.data;
                console.log(result.data.data);      
            }).catch((err) => {
                alert("获取数据失败");
            });
    },

    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$axios.post('/resetUser',{
                        username: this.profile.username,
                        password: this.profile.password,
                        age: this.profile.age,
                        gender: this.profile.gender,
                        phone: this.profile.phone
                    }).then(res =>{
                        if(res.data.code === 200){
                            this.$store.commit('login',res.data.data)
                            alert('修改成功！');
                        }else{
                            alert('修改失败');
                        }
                    })
                }else{
                    alert('填写有错误！');
                }
            });
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    },
}
</script>
<style lang="">
    .register-box {
    position: relative;
    left: 26%;
    width: 400px;
    padding: 130px;
}
</style>