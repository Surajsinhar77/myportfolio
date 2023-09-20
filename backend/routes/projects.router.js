const projectController = require('../controller/projects.controller');

module.exports = (app) =>{
    app.post('/insertprojects', projectController.insertProjectDetails);
    app.get('/getproject', projectController.getProject);
    app.get('/getProjects', projectController.getProjects);
    app.delete('/deleteProject', projectController.deleteProject);
}