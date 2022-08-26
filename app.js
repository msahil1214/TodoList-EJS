//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');


app.get("/", function (req, res) {


    var today = new Date();
    var currentday = today.getDay();
    var day="";
if(currentday===6){
    day="Saturday";
    res.render('list', {kindOfDay: day});
}else if(currentday===0){
    day="Sunday";
    res.render('list', {kindOfDay: day});
}else if(currentday===1){
    day="Monday";
    res.render('list', {kindOfDay: day});
}else if(currentday===2){   
    day="Tuesday";
    res.render('list', {kindOfDay: day});
}else if(currentday===3){
    day="Wednesday";
    res.render('list', {kindOfDay: day});
}else if(currentday===4){
    day="Thursday";
    res.render('list', {kindOfDay: day});
}else if(currentday===5){
    day="Friday";
    res.render('list', {kindOfDay: day});
}
});




app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
