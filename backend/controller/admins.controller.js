const adminModel = require('../model/admin.model');
const bcrypt = require('bcrypt');

const adminLogin = async(req, res) =>{
	// const 
}

const adminRegistration =async(req, res)=>{

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
        const check = await adminModel.find({email:email});
        if(check){
            return res.status(403).json({msg: "User Already exist here ",userExist:true});
        } 
        const hash

        })
    }catch(err){
        console.error(err);
        return res.status(400).json({msg:"This is the Error ",err});
    }
}
module.exports ={
    adminRegistration,
    adminLogin,
}