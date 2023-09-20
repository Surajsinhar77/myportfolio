const adminController = require('../controller/admins.controller');

module.exports = (app)=>{
    app.post('/admin/login', adminController.adminLogin);
    app.post('/admin/signup', adminController.adminRegistration);
}