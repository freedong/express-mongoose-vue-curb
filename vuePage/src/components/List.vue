<template lang="html">
  <div class="list" id="list">
    <el-table :data="tableData">
      <el-table-column label="英雄" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="性别" prop="sex">

      </el-table-column>
      <el-table-column label="籍贯" prop="address"></el-table-column>
      <el-table-column label="位置" prop="dowhat"></el-table-column>
      <el-table-column label="台词" prop="favourite"></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:"List",
  data(){
    return {
      tableData:[],     //表格数据
      loading:false,    //
    }
  },
  // 页面初始化数据
  mounted:function(){
    this.getAll();
  },
  methods:{
    // 获取全部数据
    getAll:function(){
      // 请求数据
      this.$http.get("/apizxd/hero").then(function(response){
        this.tableData = response.body;
        console.log(response.body);
      },function(err){
        console.log("error");
      });
    }
  },

}
</script>

<style lang="css">
</style>
