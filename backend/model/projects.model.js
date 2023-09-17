const mongoose = require('mongoose');


// Very importance to use new keyword while make new schema other wise it will make some error while useing
const projectSchema =new mongoose.Schema({
    Name:{
        type:String,
        required : true,
    },

    startDate:{
        type:Date,
        require:true,
    },

    endDate:{
        type:Date,
        require:true,
    },

    mainPic:{
        type:String,
        required:true,
    },

    highLight:{
        type : String, 
        required : true,
    },

    tags : {
        type : String,
        required: true,
    }
})