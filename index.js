const express=require('express');

const app=express();

const port=8000;



app.use(express.urlencoded());

// setting up view engine
app.set('view engine','ejs');

app.set('views','./views');

// loading the static file
app.use(express.static("assets"));


app.use('/',require('./routes/index'));
app.post('/add-task',require('./routes/index'));
app.get('/delete-task/',require('./routes/index'));


app.listen(port,function(err){
    if (err){
        console.log("Error in starting the server :",err);
    }

    console.log("server is running at port :",port);
});