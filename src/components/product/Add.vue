<template lang="">
  <div>
    <div class="register-box">
      <el-form :model="productForm" status-icon :rules="rules" ref="productForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品名称" prop="name">
              <el-input v-model="productForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="count">
            <el-input v-model="productForm.count" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" prop="category">
            <el-select v-model="productForm.category" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品描述" prop="descriptions">
            <el-input  v-model="productForm.descriptions" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-input v-model="productForm.pic" autocomplete="off" placeholder="图片 URL"></el-input>
            <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('productForm')">提交</el-button>
            <el-button @click="resetForm('productForm')">重置</el-button>
          </el-form-item>
        </el-form>
  </div>
  </div>
</template>
<script>
import ImgUpload from '../common/ImgUpload'
export default {
  name: 'productAdd',
  components: {ImgUpload},
  data() {
    return {
      options: [
        { value: 1, label: '学习用书' },
        { value: 2, label: '生活用品' },
        { value: 3, label: '电子设备' },
        { value: 4, label: '化妆品' },
        { value: 5, label: '其他' }
      ],

      productForm: {
        name: '',
        count: '',
        descriptions: '',
        pic: '',
        category: ''
      },

      rules:{
        name:[{required: true, message:'请输入商品名称!', trigger: 'blur'}],
        count:[{required: true, message:'请输入商品价格!', trigger: 'blur'}],
        category:[{required: true, message:'请选择商品分类!', trigger: 'change' }],
        descriptions:[{required: true, message:'请输入商品描述!', trigger: 'blur'}]
      }
    }
  },

  methods: {
    submitForm(formName){
    this.$refs[formName].validate((valid) => {
      if(valid){
        this.$axios.post('/product/add',{
          title: this.productForm.name,
          readCount: this.productForm.count,
          description: this.productForm.descriptions,
          pic: this.productForm.pic,
          category_id: this.productForm.category,
          cid: this.$store.state.user.id
        }).then(res => {
          if(res.data.code === 200){
             alert('添加成功!');
          }else{
            alert('添加失败')
            }
          })
        }
      })
    },
    uploadImg () {
        this.productForm.pic = this.$refs.imgUpload.url
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