<template lang="html">
  <div class="list" id="list">
    <el-table :data="tableData">
      <el-table-column label="英雄" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          {{jungleSex(scope.row.sex)}}
        </template>
      </el-table-column>
      <el-table-column label="籍贯" prop="address"></el-table-column>
      <el-table-column label="位置" prop="dowhat"></el-table-column>
      <el-table-column label="台词" prop="favourite"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="toDetail(scope.row._id)">图片详情</el-button>
          <el-button size="small" type="primary" @click="Detail(scope.row)">详情</el-button>
          <el-button size="small" type="success" @click="modify(scope.row)">修改</el-button>
          <el-button size="small" type="danger" @click="deleteD(scope.row._id)">删除</el-button>
          <el-button size="small" type="warning" @click="addpic(scope.row['_id'])">添加图片</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加 -->
    <el-button type="primary" icon="el-icon-plus" class="addBtn" @click="add">添加</el-button>


    <!-- 添加数据对话框 -->
    <el-dialog title="添加数据" :visible.sync="addFormVisible" class="addArea" modal custom-class="addFormArea" @close="closeAdd">
      <el-form :model="addForm" class="addForm">
        <el-form-item label="英雄" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="addForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="addForm.sex" placeholder="请选择性别" class="sexArea">
            <el-option label="汉子" value="man"></el-option>
            <el-option label="妹子" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯" :label-width="formLabelWidth">
          <el-input v-model="addForm.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="位置" :label-width="formLabelWidth">
          <el-input v-model="addForm.dowhat" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="台词" :label-width="formLabelWidth">
          <el-input v-model="addForm.favourite" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="背景" :label-width="formLabelWidth">
          <el-input v-model="addForm.explain" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSure">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改数据对话框 -->
    <el-dialog title="修改数据" :visible.sync="modifyFormVisible" class="addArea" modal custom-class="addFormArea" @close="closeAdd">
      <el-form :model="modifyForm" class="addForm">
        <el-form-item label="英雄" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="modifyForm.sex" placeholder="请选择性别" class="sexArea">
            <el-option label="汉子" value="man"></el-option>
            <el-option label="妹子" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="位置" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.dowhat" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="台词" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.favourite" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="背景" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.explain" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="modifyFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifySure">确 定</el-button>
      </div>
    </el-dialog>


    <!-- 详情数据对话框 -->
    <el-dialog title="详情数据" :visible.sync="detailsFormVisible" class="addArea" modal custom-class="addFormArea">
      <el-form :model="detailsForm" class="addForm">
        <el-form-item label="英雄" :label-width="formLabelWidth" readonly>
          <el-input v-model="detailsForm.name" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" readonly>
          <el-input v-model="detailsForm.age" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" readonly disabled>
          <el-select v-model="detailsForm.sex" placeholder="请选择性别" class="sexArea" readonly disabled>
            <el-option label="汉子" value="man"></el-option>
            <el-option label="妹子" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯" :label-width="formLabelWidth" readonly>
          <el-input v-model="detailsForm.address" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="位置" :label-width="formLabelWidth" readonly>
          <el-input v-model="detailsForm.dowhat" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="台词" :label-width="formLabelWidth" readonly>
          <el-input v-model="detailsForm.favourite" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="背景" :label-width="formLabelWidth" >
          <el-input v-model="detailsForm.explain" auto-complete="off" readonly></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="detailsFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>


    <!-- 添加图片 -->
    <el-dialog title="添加图片" :visible.sync="addpicVisible" class="addPicArea" @close="closePicAdd">
      <el-form :model="addpicform">
        <el-form-item label="图片地址" :label-width="formLabelWidth">
          <el-input v-model="addpicform.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addpicVisible = false">取 消</el-button>
        <el-button type="primary" @click="addpicSure">确 定</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<script>
export default {
  name:"List",
  data(){
    return {
      tableData:[],     //表格数据
      loading:false,    //
      addFormVisible:false,     //添加按钮是否显示
      addForm:{                 //添加按钮数据
        name:"",
        age:"",
        sex:"",
        address:"",
        dowhat:"",
        favourite:"",
        explain:"",
      },
      formLabelWidth:"120px",          //表单宽度
      modifyFormVisible:false,      //修改按钮是否显示
      modifyForm:{                 //修改按钮数据
        name:"",
        age:"",
        sex:"",
        address:"",
        dowhat:"",
        favourite:"",
        explain:"",
      },
      modifyId:"",            //修改id
      addpicVisible:false,    //添加图片对话框
      addpicform: {           //添加图片
        url: ""
      },
      addpicId:"",            //id
      detailsFormVisible:false,
      detailsForm:{                 //修改按钮数据
        name:"",
        age:"",
        sex:"",
        address:"",
        dowhat:"",
        favourite:"",
        explain:"",
      },
    };
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
    },
    // 性别
    jungleSex:function(sex){
      console.log(sex);
      if(sex == "man"){
        return "汉子";
      }else if(sex == "woman"){
        return "妹子";
      }else{
        return "";
      }
    },
    // 添加
    add:function(){
      this.addFormVisible = true;
    },
    // 确定按钮  提交数据
    addSure:function(){
      var _this = this;
      // 关闭对话框
      this.addFormVisible = false;

      // 获取传递的数据
      var addObj = this.addForm;
      // 用vue-resource  的post 方法往数据库中新增数据
      this.$http.post("/apizxd/hero",addObj).then(
        function(response) {
          console.log(response);
          if(response.ok){
            this.$message({
              message:"添加成功",
              type:"success",
              onClose:function(){
                // 调取所有信息函数显示在页面中  刷新页面
                _this.getAll();
              }
            });
          }
        },
        function() {
          console.log("添加失败")
        }
      );
    },
    // 关闭对话框的时候清空数据
    closeAdd:function(){
      this.addForm.name = "";
      this.addForm.age = "";
      this.addForm.sex = "";
      this.addForm.address = "";
      this.addForm.dowhat = "";
      this.addForm.favourite = "";
      this.addForm.explain = "";
    },
    //  删除操作
    deleteD:function(id){
      var _this = this;
      var deleteId = id;

      this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).then(() => {
        this.$http.delete(`/apizxd/hero/${deleteId}`).then(function(response){
          if(response.ok){
            this.$message({
              type:"success",
              message:"删除成功!"
            });
            // 删除成功后刷新列表页
            _this.getAll();
          }else{
            this.$message({
              type:"error",
              message:"删除失败!"
            });
          }
        },function(){
          console.log("删除失败");
        });
      }).catch(() => {
        this.$message({
          type:"info",
          message:"已取消删除"
        });
      });
    },
    // 修改按钮  显示修改对话框并显示这行id下的数据
    modify:function(row){
      console.log(row);
      // 显示对话框
      this.modifyFormVisible = true;
      // 取出数据并赋值
      this.modifyForm = Object.assign({},row);
      // 取出id并赋值
      this.modifyId = row["_id"];
    },
    // 修改数据后按确定提交数据
    modifySure:function(){
      var _this = this;
      // 修改数据用put方法
      this.$http.put(`/apizxd/hero/${this.modifyId}`,this.modifyForm,{
        emulateJSON:true
      }).then(function(response){
        if(response.ok){
          this.modifyFormVisible = false;
          this.$message({
            message:"修改成功",
            type:"success",
            onClose:function(){
              _this.getAll();
            }
          });
        }
      },function(){

      });
    },

    // 添加图片显示对话框
    addpic:function(id){
      this.addpicId = id;
      this.addpicVisible = true;
    },
    // 添加图片提交数据
    addpicSure:function(){
      //如果没有填入图片地址的话，提示报错
      if(!this.addpicform.url.trim()){
        this.$notify.error({
          title: "错误",
          message: "请输入正确的图片地址"
        });
        return;
      };

      // var objpic = {
      //   url:this.addpicform.url
      // };

      this.$http.put(`/apizxd/addpic/${this.addpicId}`,this.addpicform).then(function(response){
        if(response.ok){
          this.addpicVisible = false;
          this.$notify({
            title: "成功",
            message: "添加图片成功",
            type: "success"
          });
        }else{
          this.$notify.error({
            title: "错误",
            message: "添加图片失败"
          });
        }
      },function(){
        console.log("添加图片失败");
      });
    },
    // 关闭图片对话框 清空数据
    closePicAdd:function(){
      this.addpicform.url = "";
    },

    // 信息详情
    Detail:function(row){
      this.detailsFormVisible = true;
      this.detailsForm = Object.assign({},row);
    },
    // 图片详情
    toDetail:function(id){
      //通过这种方式也可以实现跳转
      this.$router.push(`/details/${id}`);
    },
  },

}
</script>

<style lang="css">
.tableHeader {
  color: #000;
}
div.list {
  width: 90%;
  margin: 0 auto;
}
.addBtn {
  margin: 50px auto 0;
  display: block;
}
.addArea .el-input {
  width: 200px;
}
.addPicArea .el-input {
  width: 500px;
}
.addForm {
  overflow: hidden;
}
.addForm .el-form-item {
  float: left;
}
.sexArea {
  width: 200px;
}
.addFormArea .el-dialog__header .el-dialog__title {
  text-align: left;
}
</style>
