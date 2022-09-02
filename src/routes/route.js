const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController = require("../controllers/memeController")
const whetherController = require("../controllers/whetherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get ("/cowin/getByDistrictId",CowinController.getByDistrictId)

router.post("/memeHandler", memeController.memeHandler)

router.get("/getWeather", whetherController.getWeather)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;