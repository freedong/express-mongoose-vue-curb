// 路由文件


// 引入express模块
const express = require("express");
// 定义路由级中间件
const router = express.Router();
// 引入数据模型模块
const Hero = require("../models/zxdSchema");


//查询所有信息  查询所有信息
router.get("/hero",(req,res) => {
  Hero.find({}).sort({update_at:-1}).then(heros => {
    res.json(heros);
  }).catch(err => {
    console.log("查询所有信息报错");
    res.json(err);
  });
});


// 通过id查询单个信息   查询
router.get("/hero/:id",(req,res) => {
  var heroid = req.params.id;
  Hero.findById(heroid).then(hero => {
    res.json(hero);
  }).catch(err => {
    res.json(err);
  });
});


// 增加一个信息   增加
router.post("/hero",(req,res) => {
  // 使用Hero model上的create方法存储数据
  Hero.create(req.body,(err,hero) => {
    if(err){
      res.json(err);
    }else{
      res.json(hero);
    }
  });
});


// 通过id更新一条信息  更新
router.put("/hero/:id",(req,res) => {
  Hero.findOneAndUpdate({
    _id:req.params.id
  },{
    $set:{
      name:req.body.name,
      age:req.body.age,
      sex: req.body.sex,
      address: req.body.address,
      dowhat: req.body.dowhat,
      favourite: req.body.favourite,
      explain: req.body.explain
    }
  },{
    new:true
  }).then(hero => {
    res.json(hero);
  }).catch(err => {
    res.json(err);
  });
});


// 通过id删除一条信息  删除
router.delete("/hero/:id",(req,res) => {
  Hero.findOneAndRemove({
    _id:req.params.id
  }).then(hero => {
    res.send(`${hero.title}删除成功`)
  }).catch(err => {
    res.json(err)
  });
});



// 通过id添加图片
router.put("/addpic/:id",(req,res) => {
  Hero.findOneAndUpdate({
    _id:req.params.id
  },{
    $push:{
      imgArr:req.body.url
    }
  },{
    new:true
  }).then(hero => {
    res.json(hero)
  }).catch(err => {
    res.json(err)
  });
});


module.exports = router;
