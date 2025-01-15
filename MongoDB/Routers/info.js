const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
router.get('/',(req,res)=>{
    res.send('info page');
});

module.exports = router;
