const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];
//var Feature bar
var feature = [
    {
        img : "img/Logo/pexels-olia-danilevich-4974914 1.png",
        top : "Programing ToT",
        bottom : "about Programing"
    },
    {
        img : "img/Logo/pexels-alex-knight-2599244 1(1).png",
        top : "AIoT & Robotic",
        bottom : "about AIoT & Robotic"
    }
];

//var content
var contentfont1 = "Community HUB"
var contentfont2 = "by Chaiwat Fakjeen (GORUFU)"

//Set & Call EJS
app.set('view engine','ejs')

//conect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status, 
        obj_list : user_list})
})
//conect index2.ejs
app.get("/index2",(req,res)=>{
    res.render('index2',{contentfont1 : contentfont1,
        contentfont2 : contentfont2, 
        obj_feature : feature})
})


//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})