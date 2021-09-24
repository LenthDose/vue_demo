<template lang="">
    <div class="register-box">
        <el-form :model="RegisterForm" status-icon :rules="rules" ref="RegisterForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model.number="RegisterForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="RegisterForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="RegisterForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="RegisterForm.age"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="RegisterForm.gender">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone">
                <el-input v-model.number="RegisterForm.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('RegisterForm')">提交</el-button>
              <el-button @click="resetForm('RegisterForm')">重置</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>
<script>
export default {
    data() {
        
        var validatePass = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error("请输入密码"));
            }else{
                if(this.RegisterForm.checkPass !== ''){
                    this.$refs.RegisterForm.validateField('checkPass');
                }
                callback();
            }
        };

        var validatePass2 = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error('请再次输入密码'));
            }else if(value !== this.RegisterForm.pass){
                callback(new Error('两次输入的密码不一致'));
            }else{
                callback();
            }
        };

        return {
            RegisterForm:{
                name: '',
                pass: '',
                age: '',
                gender: '',
                phone: ''
            },

            rules: {
                name: [
                    { required: true, message: '请输入用户名！', trigger: 'blur' },
                ],
                pass: [
                    {validator:validatePass, trigger: 'blur'}
                ],
                checkPass: [
                    {validator:validatePass2, trigger: 'blur'}
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
        };
    },

    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$axios.post('/register',{
                        username: this.RegisterForm.name,
                        password: this.RegisterForm.pass,
                        age: this.RegisterForm.age,
                        gender: this.RegisterForm.gender,
                        phone: this.RegisterForm.phone
                    }).then(res =>{
                        if(res.data.code === 200){
                            alert('创建成功！');
                        }else{
                            alert('用户名已存在请登录');
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
    }
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