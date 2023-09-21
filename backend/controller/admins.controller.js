const adminModel = require('../model/admin.model');
const bcrypt = require('bcrypt');

const adminRegistration =async(req, res)=>{
    // This way we can use hash fucntion of the bcrypt
    async function hashPassword(myPlaintextPassword, saltRounds) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });
    }
    const {name, email, password, role, phoneno, profilePic} = req.body;
    try{
        const check = await adminModel.findOne({email:email});
        if(check){
            return res.status(401).json({msg: "User Already exist here ",userExist:true});
        } 
        const hashPass = await hashPassword(password, 10);

        const adminInfo = new adminModel({
            name,
            email,
            password : hashPass,
            role,
            phoneno,
            profilePic
        })

        const result = await adminInfo.save();
        return res.status(200).json({msg:"User is sucessfull register", data : result, userExist:true});
    }catch(err){
        console.error(err);
        return res.status(400).json({msg:"This is the Error ",err});
    }
}

const adminLogin = async(req, res) =>{
	// const 
    const {email, password} = req.body;
    console.log(email, password) // Have to remove this 
    try{
        const check = await adminModel.findOne({email:email});
        if(!check){
            return res.status(409).json({msg:"User not Found ", userExist:false});
        }
        
        const passwordCompare = await bcrypt.compare(password, check.password);
        if(passwordCompare){
            return res.json({msg: "User Successfull login ", check});
        }else{
            return res.status(401).json({msg:"Incorrect Password"});
        }
    }catch(err){
        return res.status(500).json({msf: "The Error is ",err});
    }
}


module.exports ={
    adminRegistration,
    adminLogin,
}