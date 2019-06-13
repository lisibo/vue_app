<template>
  <div>
    <mt-header title="添加证照">
      <router-link to="/database" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-field label="资料名称：" placeholder='请输入资料名称' v-model="databaseName"></mt-field>
    <mt-field label="资料描述：" placeholder='请输入资料描述' v-model="databaseDesc"></mt-field>
    
    <div class="upload-box">
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        @on-progress="handleProgress"
        :before-upload="handleBeforeUpload"
        multiple
        type="select"
        action=""
      >
          <span class="example-upload_btn">照片上传</span>
      </Upload>
      <div class="example-upload_list">
        <div class="example-upload_item" v-for="(item,index) in uploadList" :key="index">
          <template v-if="item.status === 'finished'">
            <img v-if="item.url" :src="item.url">
            <span class="example-upload_item-cover">
              <em class="example-upload_item-delete" @click="handleRemove(item)">X</em>
            </span>
          </template>
          <template v-else>
            <Progresses class="example-upload_progress" v-if="item.showProgress" :percent="item.percentage" hide-info></Progresses>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AddDatabase',
  data(){
    return {
      databaseName:'',
      databaseDesc:'',
      // defaultUrl:require('@/assets/images/Mine/qq@3x.png'),
      defaultList: [   
        {
          'name': 'pic1.jpeg',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        },
        {
          'name': 'pic2.jpeg',
          'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
        }
      ],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    handleRemove (file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
      // 因为上传过程为实例，这里模拟添加 url
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError (file) {
      alert( '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。')
    },
    handleMaxSize (file) {
      alert('文件 ' + file.name + ' 太大，不能超过 2M。')
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5;
      if (!check) {
        alert( '最多只能上传 5 张图片。')
      }
      return check;
    },
    handleProgress (s) {
      console.log(s)
    }
  }
}
</script>
<style lang="less" scoped>
.example-upload_btn{
  display: block;
  height:48px;
  line-height: 48px;
  font-size: 16px;
  margin-left: 10px;
}
.example-upload_list{
  padding:10px;
}
.example-upload_item{
  margin:5px;
  float: left;
  width: 80px;
  height: 80px;
  text-align: center;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 4px;
  background: #fff;
  position: relative;
}
.example-upload_item img{
  width: 100%;
  height: 100%;
}
.example-upload_item-cover{
  position: absolute;
  top: -5px;
  right: -4px;
  width:20px;
  height:20px;
  border-radius: 50%;
  background:#fff;
  background-clip: border-box;
}
.example-upload_item-delete{
  position: relative;
  vertical-align: top;
  width:20px;
  height:20px;
  cursor: pointer;
  display: inline-block;
  background-size: 100%;
}
.example-upload_progress{margin-top:35px;}
</style>
