const mongoose = require('mongoose');

const connection = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/myPortfolio').then(()=>{
        console.log("SucessFull Database is connected");
    }).catch((err)=>{
        console.log("There is the error while connecting to Database :",err);
    })
}

export default connection;