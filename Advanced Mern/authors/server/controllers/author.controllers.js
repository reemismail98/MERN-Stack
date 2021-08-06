const { Author } = require('../models/author.models');

module.exports.createNewAuthor = (req, res) => {
    const { name } = req.body
    Author.create({
       name
    })
        .then(author => req.json({author}))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
 
module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}