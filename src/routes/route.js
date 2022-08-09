const express = require('express');
const router = express.Router();

router.get('/movies' , function(req ,res){
    const array = ['vikram' , 'war' , 'golmal' ,' luck']
    res.send(array);
    console.log(array);
});
router.get('/movies/:indexNumber' , function(req ,res){
    const array = ['vikram' , 'war' , 'golmal' ,' luck']
    const reqPara= req.params;
    const index = reqPara.indexNumber ;
    if( index < array.length ){
        return res.send(array[index]);
    }
    else{
        return res.send("Plz Enter Valid Index");
    }
});

router.get("/films" , function (req , res){
    const obj = [{
        "id" : 1,
        "name" : "Harry Potter and the Philosopher's Stone"
    },
    {
        "id" : 2 ,
        "name" : "Final Destination 5"
    },
    {
        "id" : 3 ,
        "name" : "It Chapter Two"
    },
    {
        "id" : 4 ,
        "name" : "Insidious: Chapter 4"
    },
    {
        "id" : 5 ,
        "name" : "The Conjuring: The Devil Made Me Do It"
    }];

    res.send(obj);
});

router.get("/films/:filmId" , function (req , res){
    const array = [{
        "id" : 1,
        "name" : "Harry Potter and the Philosopher's Stone"
    },
    {
        "id" : 2 ,
        "name" : "Final Destination 5"
    },
    {
        "id" : 3 ,
        "name" : "It Chapter Two"
    },
    {
        "id" : 4 ,
        "name" : "Insidious: Chapter 4"
    },
    {
        "id" : 5 ,
        "name" : "The Conjuring: The Devil Made Me Do It"
    }];

    const reqParas = req.params;
    const filmId = reqParas.filmId ;
    const result = function (){
        for (let i=0 ; i< array.length ;i++){
            const obj = array[i];
            if(obj['id'] == filmId){
                return res.send(obj)
            }
        }
        return res.send("No Such Film Exist With This Id")
    }
    result();
    //res.send(array);
});
module.exports = router;