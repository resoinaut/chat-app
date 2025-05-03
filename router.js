"use strict";

const router			= require("express").Router();
const messages			= require("./messages");
const generateusername	= require("./generateusername");

router.get("/messages", (req, res) => res.json(messages.all()));
router.get("/generateaccount", (req, res) => res.json(generateusername()));

module.exports = router;
