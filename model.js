let mongoose=require('mongoose');
mongoose.promise=Promise;//用ES6的promise来代替mongoose里已经废弃的promise
mongoose.connect('mongodb://127.0.0.1:27017/201615crawl');
let MovieSchema=new mongoose.Schema({
    name:String,
    url:String
})
exports.Movie=mongoose.model('Movie',MovieSchema);
