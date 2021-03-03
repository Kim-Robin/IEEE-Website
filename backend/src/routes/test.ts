import express from "express";
import multer from "multer";

const router = express.Router();


router.get('/test', (req, res)=>{
	console.log(__dirname.slice(0, -11));
	res.sendFile(__dirname.slice(0,-11) + 'images/Robin_Kim.jpg');
});

export = router;

