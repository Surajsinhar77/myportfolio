const express = require('express');
const connection = require('./db/db');
const app = express();
app.use(express.json());

//Database Connectivity Function 
connection();

// Test Api for the Express , node for admin backend
app.get('/test', (req, res)=>{
    return res.json({message: "This is test Api.."})
})

app.listen(7000 ,()=>{
    console.log("Server run on :http://localhost:",7000);
})

require(path.join(__dirname, "./routes/projects.router"))(app);