const express=require("express");
const app=express();
const config=require("./config")
const PORT = config.port || 3000;
const createError=require("http-errors");
const bodyParser=require("body-parser");
const cors=require("cors");
const fileUpload = require('express-fileupload');
const path=require("path");
const AppRoute=require("./src/routes/v1")
app.use(fileUpload())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({origin:"http://localhost:3000"}));
app.use(bodyParser.json({
  type: ["application/x-www-form-urlencoded", "application/json"], // Support json encoded bodies
}));

app.use(express.static(path.join(__dirname,'public')));
app.use("/v1/api",AppRoute)

app.use(function (req, res, next) {
    next(createError(404));
  });




  // error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    //apiError.handleError(err, res);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send(err);
    // res.render('error');
  });
app.listen(PORT,(e)=>{
    console.log(`Server is running on port ${PORT}`);
})