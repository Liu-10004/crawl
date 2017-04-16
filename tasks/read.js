/*
* 在这个模块里会读取URL里的数据
* 并且是在回调函数返回电影数组
*
* */
let request=require('request');
//转utf8
let iconv=require('iconv-lite');
//目的是拿标题
let cheerio =require('cheerio');
/*let url='http://top.baidu.com/buzz?b=26';*/
let debug=require('debug')('crawl:read');
module.exports=function (url,callback){
    //请求url地址得到响应体
    request({url,encoding:null},function (err,response,body){
        console.log(url)
       //把GBK格式的buffer转成utf8格式的字符串
        body=iconv.decode(body,'gbk');
        let $=cheerio.load(body);
        let movies=[];
        $('.keyword a.list-title').each(function (index,item){
            let $this=$(this);
            let movie={
                name:$this.text(),
                url:$this.attr('href'),
            }
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        })
        callback(err,movies)
    })
}
//测试驱动开发  TDD
//先写测试用例，再根据测试用填写内容
//1.读取url的响应体