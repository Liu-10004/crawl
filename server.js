let express = require('express');
let Movie=require('./model').Movie;
let path=require('path');
let router=express.Router();
let app = express();
app.set('view engine','html')
app.engine('html',require('ejs').__express);
app.listen(8080);
app.use(express.static(path.resolve('public')));
app.get('/',function (req,res){
    Movie.find({},function (err,movies){
        res.render('index',{movies});
    })
})
