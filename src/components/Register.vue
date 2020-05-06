<template>
  <div id="login">
    <div class="con">
        <h1>
            <img src="../assets/images/logo.png" alt="">
        </h1>
       <div class="user">
           <header>
               <p>用户注册</p>
           </header>
           <div class="reg">
               <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form :model="dynamicValidateForm" ref="user" label-width="100px" class="demo-dynamic"  :hide-required-asterisk="false">
                   <el-form-item
                    class="pass"
                    prop="value"
                    label="用户名"
                    :rules="[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    ]"
                >
                    <el-input v-model="dynamicValidateForm.value" ></el-input>
                </el-form-item>
                </el-form>
                <el-form-item label="密码" prop="pass" class="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" class="pass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" :hide-required-asterisk="false">
                <el-form-item
                    class="pass"
                    prop="email"
                    label="邮箱"
                    :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]"
                >
                    <el-input v-model="dynamicValidateForm.email" ></el-input>
                </el-form-item>
                </el-form>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','user')">提 交</el-button>
                    <el-button @click="resetForm('ruleForm','dynamicValidateForm','user')" class="reset">重 置</el-button>
                </el-form-item>
                </el-form>
           </div>
       </div>
    </div>
  </div>
</template>

<script>
import {Register} from '../components/network/api'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        dynamicValidateForm: {
          value: '',
          email: ''
        }
      };
    },

    mounted() {},

    methods: {
        submitForm(formName,dynamicValidateForm,user) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        this.$refs.dynamicValidateForm.validate((valid) => {
          if (valid) {
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        this.$refs.user.validate((valid) => {
          if (valid) {
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        Register(this.dynamicValidateForm.value,this.ruleForm.pass,this.dynamicValidateForm.email).then(res=>{
          if(res.data.state==0){
            this.$router.push('/login')
          }
        })
      },
      resetForm(formName,dynamicValidateForm,user) {
        this.$refs[formName].resetFields();
        this.$refs.dynamicValidateForm.resetFields();
        this.$refs.user.resetFields();
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
            .reg
                .pass
                    width 380px
.reset
    margin-left 130px
</style>