let express = require('express');
let app = express();

//跨域请求设置   前端8080  访问 后端300端口
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8082");
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers","Content-Type,Accept");
    res.header("Access-Control-Allow-Credentials","true");
    if(req.method == "options"){
        res.end()
    }else{
        next();
    }
})

let sliders = require("./mock/sliders");

app.get("/api/sliders",(req,res)=>{
    res.json(sliders);
})

app.listen(3000);