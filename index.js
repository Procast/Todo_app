const express=require('express');

const app=express();

const port=8000;

app.use('/',require('./routes/index'));

app.set('view engine','ejs');

app.set('views','./view');


app.listen(port,function(err){
    if (err){
        console.log("Error in starting the server :",err);
    }

    console.log("server is running at port :",port);
});