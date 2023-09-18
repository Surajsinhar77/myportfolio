const projectController = require('../controller/projects.controller');

module.exports = (app) =>{
    app.get('/insertprojects', projectController.insertProjectDetails);
}