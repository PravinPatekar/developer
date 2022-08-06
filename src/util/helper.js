// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

function printDate(){
    const p = new Date()
    console.log(p)
}

function printMonth(){
    const m = new Date()
    console.log(m.toLocaleString("en-US", { month: "long" }));

}
//print information about batch\

function getBatchInfo(){
    console.log('Plutonium, W3D1, the topic for today is Nodejs module system')
}
module.exports.printDate= printDate
module.exports.printMonth = printMonth
module.exports.printBatchInfo = getBatchInfo