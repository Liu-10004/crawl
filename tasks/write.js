/*
* 在这个模块里我们会把电影数组保存到mongodb里面
*
*
* */
let Movie =require ('../model').Movie;
let async=require('async');
let debug=require('debug')('crawl:write');
module.exports=function (movies,callback){
    //循环数组中的每个元素，把整个对象一次保存在数据控中，全部
    async.forEach(movies,function (movie,cb){
        debug(`写入电影：${movie.name}`);
        Movie.create(movie,cb);
    },callback)
  //Movie.create(movies,callback);

}