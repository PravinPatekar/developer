const newAuthorModel = require("../models/newAuthorModel")
const newPublisherModel= require("../models/newPublisherModel")

const createNewPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}





module.exports.createNewPublisher= createNewPublisher