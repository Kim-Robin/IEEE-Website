import express from "express";

const router = express.Router();

router.get('/member/eboard', (req, res, next) => {
    res.send("eboard member");
});


router.get('/memeber/jboard', (req, res, next) => {
    res.send("jboard member");
});

router.get('member/dboard', (req, res, next) =>{
    res.send("dboard member");
})
