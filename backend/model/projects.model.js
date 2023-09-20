const mongoose = require('mongoose');

// Very importance to use new keyword while make new schema other wise it will make some error while useing
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        unique: true,
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
        unique: true,
    },

    highLight:{
        type : String, 
        required : true,
    },
    otherImage:{
        type: Array,
    },

    tags : {
        type : String,
        required: true,
    },

    description:{
        type:String,
        required: true,
    },

    projectVideo:{
        type:String,
        required:false,
    }
})

const Model = ()=>{
    return projectModel = mongoose.model('projects',projectSchema);
}

module.exports = Model();
