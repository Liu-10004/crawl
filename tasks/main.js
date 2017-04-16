/*
* 主入口模块
* */
let read=require('./read')
let write=require('./write');
let async=require('async');
let url='http://top.baidu.com/buzz?b=26';
let Movie=require('../model').Movie;
let debug=require('debug')('crawl:write');
async.waterfall([
    function (callback){
        Movie.remove({},callback);
    },
    function (data,callback) {
        read(url,callback);//err,data
    },
    function (data,callback) {//这里用到了上一个任务的结果
        write(data,callback);
    },
],function (err,result){
    console.log('任务全部执行完毕')
})