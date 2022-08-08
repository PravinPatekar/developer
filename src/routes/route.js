const express = require('express');
const lodash = require('lodash');
const router = express.Router();
// const logger =require('../logger/logger.js')
// const helper =require('../util/helper.js')
// const formatter =require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
// logger.message()
// helper.printDate()
// helper.printMonth()
// helper.printBatchInfo()
// formatter.trim()
// formatter.LowerCase()
// formatter.UpperCase()
 
const month = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']
const quarter = lodash.chunk(month,3)
console.log(quarter)

const pravin = [1,3,5,7,9,11,13,15,17,19]
const pra = lodash.tail(pravin)
console.log(pra)

const arr1 =[1,2,3]
const arr2= [2,3,4] 
const arr3= [3,4,5] 
const arr4=[5,6,7]
const arr5=[7,8,9]
let bbb = lodash.union(arr1,arr2,arr3,arr4,arr5)
console.log(bbb)

const cc = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const zzz = lodash.fromPairs(cc)
console.log(zzz)



    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason