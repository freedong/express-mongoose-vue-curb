// 数据模型
const mongoose = require("mongoose")


const zxdSchema = mongoose.Schema({
  name:String,
  age:String,
  sex:String,
  address:String,
  dowhat:String,
  imgArr:[],
  favourite:String,
  explain:String
},{collection:"myhero"})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据

// model和schema关联起来
const Hero = module.exports = mongoose.model('hero',zxdSchema);
