const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")

const createNewBook= async function (req, res) {
    let newBook = req.body
    const{author_id,publisher_id}=newBook
    if(!author_id){
        return res.send("author_id does not exist")
    }
    if(!publisher_id){
        return res.send("publisher_id does not exist")
    }

let author_idvalid = await newAuthorModel.findById(author_id)
if(!author_idvalid){
    return res.send("not a valid author_id")
}

let publisher_idvalid = await newPublisherModel.findById(publisher_id)
if(!publisher_idvalid){
    return res.send("not a valid publisher_id")
}

 let newBookCreated = await newBookModel.create(newBook)
    res.send({data: newBookCreated})
}



const getAllBookData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}


const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author_id publisher_id')
    // let specificBook = await newBookModel.find().populate('publisher_id')
    res.send({data: specificBook})

}
const updateBook = async function (req,res){
    const publisher = await newPublisherModel.find({name : {$in :["Penguin","HarperCollins"]}}).select({_id : 1})

   publisher.map(async function(pid){
       const saveBook = await newBookModel.updateMany({publisher_id : pid} , {isHardCover : true})
   })
   const updatedBook = await newBookModel.find().populate("author_id publisher_id")
   res.send(updatedBook)
}

const updatePrice = async function(req,res){
   const author = await newAuthorModel.find({rating : {$gte : 3.8}}).select({_id:1})

   author.map(async function(aid){
       const updateprice = await newBookModel.updateMany({author_id : aid} , {$inc : {price : 10}})
   })
   const updatedBook = await newBookModel.find().populate("author_id publisher_id")
   res.send(updatedBook)
}

module.exports.createNewBook= createNewBook
module.exports.getAllBookData= getAllBookData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateBook = updateBook
module.exports.updatePrice = updatePrice