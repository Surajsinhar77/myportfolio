const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/test', (req, res)=>{
    return res.json({message: "This is test Api.."})
})

app.listen(7000 ,()=>{
    console.log("Server run on :http://localhost:",7000);
})

// require(path.join(__dirname, "./routes/user.router"))(app);