const ManagerController = require('../controllers/manager.controller');
    module.exports = app => {
        app.get('/api/managers', ManagerController.findAllManagers);
        app.get('/api/managers/:id', ManagerController.findOneSingleManager);
        app.put('/api/managers/:id', ManagerController.updateExistingManager);
        app.post('/api/managers/new', ManagerController.createNewManager);
        app.delete('/api/managers/:id', ManagerController.deleteAnExistingManager);
    }