const mongoose = require('mongoose');

const adminsSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
		unique:true,
	},
	password:{
		type:String,
		required:true,
		lowercase:true,
	},
	role:{
		type:String,
		required:true,
		lowercase:true,
	},
	phoneno:{
		type:String,
		required:true,
	},
	profilePic:{
		typr:String,
		required:true,
	},
})

exports default adminModelFunction(){
	const adminModel = mongoose.model('admins',adminsSchema);
	return adminModel;
}