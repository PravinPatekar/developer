const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController= require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor", newAuthorController.createNewAuthor  )

router.post("/createNewPublisher", newPublisherController.createNewPublisher)

router.post("/createNewBook", newBookController.createNewBook)

router.get("/getAllBookData", newBookController.getAllBookData )

router.get("/getBooksWithAuthorAndPublisherDetails", newBookController.getBooksWithAuthorAndPublisherDetails)

router.put("/updateBook",newBookController.updateBook)

router.put("/updatePrice",newBookController.updatePrice)
module.exports = router;