<template>
  <div id="footer">
    <footer>
        <div class="tet">
            <p>地址：甘肃省天水市秦州区莲亭路60号</p>
            <p>电话：15809489478</p>
            <p>微信：gyy15809489478</p>
            <p>QQ：3425148669</p>
            <p>联系人：高老板</p>
            <p>联系人：杨老板</p>
        </div>
        <div class="share">
          <share :config="config"></share>
        </div>
        <div class="code">
            <img src="../assets/images/code2.png" alt="">
        </div>
    </footer>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        config:{
            url:'http://localhost:8080/',  //对应服务器网站地址
            sites: ['qzone','qq', 'weibo','wechat'],
            wechatQrcodeTitle   : '微信扫一扫：分享', 
            wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本网站分享至朋友圈。</p>'
          },
      };
    },
  }

</script>
<style lang='stylus' scoped>
img 
  width 100px
  height 100px
  margin-top 20px
footer 
    height 140px
    width 100%
    margin-top 50px
    border-top 3px solid #37ab40
    display flex
    justify-content space-around
    .tet
      width 900px
      height 20px
      display flex 
      margin-top 50px
      p
        font-size 12px
        color #666
        margin-left 15px
    .share
      height 50px
      margin-top 40px
</style>