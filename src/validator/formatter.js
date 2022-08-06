// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler





function trim(){
    let name = '   Pravin Patekar   '
    console.log('trimmed name is:- ',name.trim())

}
// 2
function changetoLowerCase(){
    let name = 'PraVIn pAteKaR'
    console.log('change name to lower case:-',name.toLocaleLowerCase())
}
// 3
function changeToUpperCase(){
    let name = 'Pravin Patekar'
    console.log('change to upper case:- ',name.toLocaleUpperCase())
}

module.exports.trim = trim
module.exports.LowerCase = changetoLowerCase
module.exports.UpperCase = changeToUpperCase
