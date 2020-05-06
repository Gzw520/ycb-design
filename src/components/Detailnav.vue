<template>
  <div>
    <div>
      <p
        v-for="(item,index) in navList"
        :key="index"
        :class="{active:currentIndex==index}"
        @click="changeIndex(index)"
      >{{item}}</p>
    </div>
    <div class="main" v-if="show">{{detile[0]}}</div>
    <div class="main" v-else>
      <div class="art">
        <h1 v-for="(article,index) in List" :key="index">
            <i class="el-icon-s-promotion"></i>
            {{article}}</h1>
        <h6 v-if="commentShow">还没有评论，赶快抢沙发吧……</h6>
      </div>
      <div class="submit">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          :hide-required-asterisk="false"
        >
          <el-form-item label="评论" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')" size="mini" round icon="el-icon-edit">发表</el-button>
            <el-button @click="resetForm('ruleForm')" size="mini" round icon="el-icon-delete">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { commentData,addComments } from '../components/network/api'
export default {
  props: {
    navList: {
      type: Array,
      default() {
        return [];
      }
    },
    detile:{
        type:Array,
        default(){
            return [];
        }
    }
  },
  data() {
    return {
      commentShow:false,
      List:'',
      currentIndex: 0,
      show: true,
       ruleForm: {
          desc: ''
        },
        rules: {
          desc: [
            { required: true, message: '评论内容不能为空', trigger: 'blur' }
          ]
        }
    };
  },

  components: {},
  computed: {},

  mounted() {
      this.id=this.$route.query.id
      commentData(this.$route.query.id).then(res=>{
          this.List=res.data
          if(res.data.length==0){
            this.commentShow=true
          }
      })
  },

  methods: {
    changeIndex(index) {
      if (index == 1) {
        this.show = false;
      } else {
        this.show = true;
      }
      this.currentIndex = index;
    },
    submitForm(formName,imgid,comments) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.$router.go(0)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        addComments(this.$route.query.id,this.ruleForm.desc).then(res=>{
            console.log(res);
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>
<style lang='stylus' scoped>
p
    height 40px
    width 100px
    // background green
    float left
    text-align center
    line-height 40px
    cursor pointer
    border 1px solid #67C23A
    border-bottom none 
.main
    width 1030px
    height 240px
    position absolute 
    top 40px
    padding 10px
    border 1px solid #909399
    border-top none 
    color #909399
    font-size 12px
    .art
        width 500px
        height 220px
        float left
        margin-top 30px
        h1
            margin-top 15px
            width 400px
            padding-left 5px
            height 20px
            line-height 20px
            font-size 14px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap 
            border-bottom 1px solid #E4E7ED
        .el-icon-s-promotion
            color #F56C6C
    .submit
        float left
        width 450px
        height 220px
        margin-left 30px
        margin-top 50px
.active
    background #67C23A
</style>