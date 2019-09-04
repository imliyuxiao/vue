# vue
 For testing out GitHub Desktop
<template>
  <div>
   <Input v-model="formVideo.phone" type="textarea" class="textInput" 
  placeholder="多个手机号码用逗号（英文）隔开" @keyup.native="inputChange($event)"></Input>
    <div class="send_tips">
      共计<span style="padding:0 3px;">{{ formVideo.userCount }}</span>个有效号码，已过滤重复号

码
    </div>
    <span>{{formVideo.textTips}}</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
         formVideo:{
            phone:'',
            userCount:0,
            textTips:''
        },
      }
    },
    methods: {
      //输入手机号码
        inputChange(){
          let _this=this
          var phoneStr = _this.formVideo.phone.replace(/[^\d\,]/g,'') //输入框只能输入数字和逗号
          var phoneArr = phoneStr.split(",")
          var newArr = [];
          var rightPhone=[]
          var i = ''

          if(phoneStr){
            _this.btnRead=true
          }else{
            _this.btnRead=false
          }

          //判断重复号码
          //for (var i = 0; i<phoneArr.length ; i++) {
            //如果temp中没有arr[i],则把它加入到temp中
           //   if(phoneArr[i] ===''||phoneArr[i] ==undefined) {
           //      phoneArr.splice(i,1);
                 //i = i - 1;         
            //    console.log('phoneArr::',phoneArr)
            //  }
             // if(newArr.indexOf(phoneArr[i])===-1){
            //    newArr.push(phoneArr[i]);
           //     console.log('newArr::',newArr)
           //     
            //  _this.formVideo.phone=''
            //  _this.formVideo.phone = newArr.join(',')
            //  }
         // }
          newArr= [...new Set(phoneArr)];
          console.log('newArr:',newArr)
          _this.formVideo.phone=newArr.join(',')
          newArr.map(function(item,index){
            //遍历判断号码有效性
            //var reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/
            var reg= /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            
            if (!reg.test(item)) {
                _this.errorTipsClass='errorTipShow'
                _this.formVideo.textTips="请输入正确的手机号码"

              //  if(newArr.length>1){
              //    _this.formVideo.userCount =index+1  //号码有效数
              //  }else{
              //    _this.formVideo.userCount = 0
               // }
            }else{
              console.log('item::',item)
              console.log('index::',index)
              _this.formVideo.userCount = index+1
              _this.errorTipsClass='errorTipsHide'
              _this.formVideo.textTips=""
            }
          })   
        }
    },
    mounted () {
      
    }
  }
</script>
<style>

</style>
1
