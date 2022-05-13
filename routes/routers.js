const express = require("express");
const data = require("../data.js");
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).json(
        data
    )
});

router.get('/:id',(req, res) => {
    const {id} = req.params;
    const kullanici = data.find(kullanici => kullanici.id === parseInt(id));
    if(kullanici) {
        res.status(200).json(kullanici)
    } else {
        res.status(404).json("Aradığınız kullanıcı bulunamadı.")
    }
});

module.exports = router;