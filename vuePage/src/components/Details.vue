<template lang="html">
  <div class="detail" id="Details">
	<el-button type="success" class="goback" icon="el-icon-arrow-left" @click="goback">返回上一页</el-button>
	<el-carousel :interval="2000" type="card" height="300px" indicator-position="outside">
        <el-carousel-item v-for="(item, index) in imgArr" :key="index">
            <img :src="item" alt="" class="imgClass">
        </el-carousel-item>
    </el-carousel>
    <p class="heroName">{{name}}●{{flag}}</p>

    <div>{{explain}}</div>
  </div>
</template>

<script>
export default {
  name:'Details',
  data(){
    return {
    	title:"欢迎来到得来联盟",
        imgArr:[],
        name:"",
        flag:"",
        explain:""
    }
  },
  methods:{
  	getMessage:function(id){
  	this.$http.get(`/apizxd/hero/${id}`).then(function(response){
  		this.imgArr = response.body.imgArr;
  		this.name = response.body.name;
  		this.flag = response.body.favourite;
  		this.explain = response.body.explain;
  	},function(){});
  	},
  	goback:function(){
  		this.$router.go(-1);
  	}
  },
  mounted:function(){
  	// 获取传过来的id
  	var ids = this.$route.params.id;
  	this.getMessage(ids);
  }
}
</script>

<style lang="css">
</style>
