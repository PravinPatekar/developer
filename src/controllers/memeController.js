let axios = require("axios")



let memeHandler = async function (req,res){
    try{
        const query = req.query;
         let options ={
         method :"post",
         url :`https://api.imgflip.com/caption_image`,
         params : query
         }
      let result = await axios (options)
      res.status(200).send(result.data)
   
    }  catch (err) {
       console.log(err)
       res.status(500).send({ msg: err.message })
   
   }
   }



   module.exports.memeHandler=memeHandler