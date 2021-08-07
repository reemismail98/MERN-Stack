const { Manager } = require('../models/manager.model');

module.exports.createNewManager = (req, res) => {
    const { name } = req.body
    Manager.create({
       name
    })
        .then(manager => res.json({manager}))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllManagers = (request, response) => {
    Manager.find({})
        .then(manager => response.json(manager))
        .catch(err => response.json(err))
}
 
module.exports.findOneSingleManager = (req, res) => {
    Manager.findOne({ _id: req.params.id })
        .then(oneSingleManager => res.json({ manager: oneSingleManager }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 

module.exports.updateExistingManager = (req, res) => {
    Manager.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedManager => res.json({ manager: updatedManager }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingManager = (req, res) => {
    Manager.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}