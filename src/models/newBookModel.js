const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor1",
    }, 
    price: Number,
   publisher_id: {
        type: ObjectId,
        ref: "publisher1"
   },
   isHardCover:
   {default:false,
     type : Boolean}

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
