const newAuthorModel= require("../models/newAuthorModel")


const createNewAuthor= async function (req, res) {
    let newAuthor = req.body
    let newAuthorCreated = await newAuthorModel.create(newAuthor)
    res.send({data: newAuthorCreated})
}     

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}    

module.exports.createNewAuthor= createNewAuthor
