const projectModel = require('../model/projects.model');

const getProjects = async(req, res)=>{
    //write code here
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
    //write code from here 
}

module.exports = {
    insertProjectDetails,
    deleteProject,
}