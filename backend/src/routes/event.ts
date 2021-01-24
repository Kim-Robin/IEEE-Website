import express from "express";

const router = express.Router();

/* event section endpoint*/

router.get('/event/past', (req, res, next) => {
    res.send("past event");
});

router.get('/event/future', (req, res, next) => {
    res.send("future event");
})
export = router;
