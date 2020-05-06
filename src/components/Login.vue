<template>
  <div id="login">
    <div class="con">
        <h1>
            <img src="../assets/images/logo.png" alt="">
        </h1>
       <div class="user">
           <header>
               <p>用户登录</p>
               <p @click="Register">立即注册 >></p>
           </header>
           <div class="name">
               <el-input
                clearable
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="username">
                </el-input>
           </div>
           <div class="name">
               <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                show-password
                v-model="password">
                </el-input>
           </div>
           <div class="code">
               <button @click="codeBtn">点击获取</button>
               <el-input v-model="codedata" placeholder="验证码" class="code-con"></el-input>
           </div>
           <div class="foot">
                <el-checkbox v-model="checked" class="red">记住用户名</el-checkbox>
                <h5>忘记密码？</h5>
           </div>
           <div class="button">
               <el-button type="primary" class="btn" @click="loginBtn">登 陆</el-button>
           </div>
       </div>
    </div>
  </div>
</template>

<script>
import { Code, Login } from '../components/network/api';
import { mapGetters } from 'vuex';
import bus from '../bus'
  export default {
    props:[''],
    data () {
      return {
          codedata:'',
          username:'',
          password:'',
          checked:false,
      };
    },

    mounted() {},
    computed:{
        ...mapGetters(["User"])
    },
    methods: {
        Register(){
            this.$router.push('/register')
        },
        codeBtn(){
            Code().then(res=>{
                this.codedata=res.data
            })
        },
        loginBtn(){
            Login(this.username,this.password,this.codedata).then(res=>{
                if(res.data.data.rname=='管理员'){   //在这里管理你的后台管理系统，根据登陆返回的rname判断的；
                    this.$router.push('/about')
                }
                let user={}
                if(res.data.state){
                    user.name=this.username
                    user.uid=res.data.data.uid
                    this.$store.dispatch('User',user)
                    bus.$emit("navuser",this.User[0].name)
                    this.$router.push('/')
                }
            })
        }
    },


  }

</script>
<style lang='stylus' scoped>
#login
    .con
        background url('../assets/images/bg.png') no-repeat center
        background-size 100% 100%
        height 100vh
        width 100%
        h1
            width 300px
            height 100px
            padding-top 50px
            padding-left 50px
            img 
                width 100%
                height 100%
        .user
            width 450px
            height 400px
            background rgba(255,255,255,.6)
            position absolute 
            border-radius 20px
            top 0
            bottom 0
            right 0
            left 0
            margin auto
            header 
                width 300px
                height 50px
                margin 10px auto
                border-bottom 2px solid #67C23A
                p
                    float left
                    width 100px
                    height 100%
                    line-height 50px
                    font-weight bold
                    color #909399
                    margin-left 20px
                    &:nth-of-type(2)
                        color #5fb42a
                        margin-left 40px
                        font-weight 100
                        font-size 14px
                        cursor pointer
                        &:hover
                            color #F56C6C
            .name
                width 300px
                margin 20px auto 0
            .code
                width 300px
                margin 20px 0 0 80px
                height 40px
                button 
                    float left
                    width 90px
                    height 40px
                    border none 
                    border-radius 10px
                    background #67C23A
                    outline none
                    cursor pointer
                    font-weight 600
                    color #fff
                .code-con
                    width 100px
                    float left
                    margin-left 100px
            .foot
                width 300px
                margin 20px 0 0 80px
                .rad
                    float left
                h5
                    float right
                    font-size 12px
                    color #aaa
                    cursor pointer
                    &:hover
                        color orangered 
            .button
                width 300px
                margin 65px auto
                .btn
                    width 200px
                    margin-left 50px
</style>