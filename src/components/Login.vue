<template lang="">
  <div class="mainbackground">
    <div class="login-box">
      <h2>Login</h2>
      <el-form ref="loginForm" :model="user" status-icon :rules="rules" label-width="80px" label-position="left">
          <el-form-item label="用户名" class="user-box" prop="username">
              <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="user-box" prop="password">
              <el-input v-model="user.password" show-password></el-input>  
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="Submit()">Submit</el-button>
              <el-button @click="Register()">注册账号</el-button>
          </el-form-item>
      </el-form>
  </div>
  </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            user: {
                username: "",
                password: ""
            },

            rules: {
              username: [
                { required: true, message: '请输入用户名！', trigger: 'blur' },
              ],
              password: [
                { required: true, message: '请输入密码！', trigger: 'blur' },
              ]
            }
        };
    },
    created() {
        
    },

    methods: {
        Submit(){
          this.$axios
            .post('/login',{
                username: this.user.username,
                password: this.user.password
            })
            .then(res => {
              console.log(res);
                if(res.data.code === 200){
                  this.$store.commit('login',res.data.data);
                  this.$router.push({path: '/index'})
                }else{
                  alert("您输入的用户名和密码错误！");
                }
            })
        },
        Register(){
          this.$router.push({path: "/register"});
        }
  },
}
</script>
<style lang="">

.mainbackground {
  background: linear-gradient(#141e30, #243b55);
  height: 100%;
  width: 100%;
  position: fixed;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>