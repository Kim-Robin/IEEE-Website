import express from "express";

const router = express.Router();

/* Get Home page. */

router.get('/', (req, res, next) => {
    res.send("index");
});

export = router;
