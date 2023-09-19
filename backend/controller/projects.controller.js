const projectModel = require('../model/projects.model');

const getProjects = async(req, res)=>{
    //write code here
    try{
        const allProjectData = await projectModel.find({});
        return res.json({data :allProjectData});
    }catch(err){
        console.error(err);
        return res.json({errorMsg : err});
    }
}

const getProject = async(req, res)=>{
    try{
        const id = req.params;
        const project = await projectModel.find(id);
        return res.status(200).json({data:project});
    }catch(err){
        console.error(err);
        return res.json({errorMsg: err});
    }
}

const insertProjectDetails = async(req, res)=>{
    // today you have to do this
    const {name,startDate, endDate, mainPic, highLight, tags, description, projectVideo} = req.body;
    try{
        const projectExist = await projectModel.findOne(name);
        if(!projectExist){
            return res.status(409).json({msg:'Project already exist ' ,projectExist:true});
        }

        const project = new projectModel({
            name,
            startDate,
            endDate,
            mainPic,
            highLight,
            tags,
            description,
            projectVideo,
        });

        const result =await project.save();
        return res.status(201).json({msg: "Your are Sucessfully Save project"})
    }catch(err){
        console.error(err);
        return res.status(500).json(  { msg:" For error ",err})
    }
}

const deleteProject = async(req, res)=>{
    const id = req.params._id; 
    try{
        const check = await projectModel.deleteOne({_id : id}); 
        return res.status(200).json({msg: check});
    }catch(err){
        console.error(err);
        return res.json({msg: err});
    }
}

module.exports = {
    insertProjectDetails,
    deleteProject,
    getProjects,
    getProject,
}