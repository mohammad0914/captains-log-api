const log = require("../models/logs.js")
const express = require("express")
const logs = require("../models/logs.js")
const validatePosts = require("../models/validatePost.js")

const logControllers = express.Router()

logControllers.get("/", (req, res) => {
    console.log(typeof (req.query.mistake))
    console.log(typeof (true))

    const mistake = req.query.mistake
    res.json(logs.filter((log) => {
        return log.mistakesWereMadeToday.toString() == mistake

    }))
})

logControllers.get("/", (req, res) => {
    res.json(logs)
})

logControllers.get("/:id", (req, res) => {
    const { id } = req.params;
    if (log[id]) {
        res.json(log[id])
    } else {
        res.status(404).json({ error: "Page not found" });
    }
})

logControllers.post("/", validatePosts, (req, res) => {
    logs.push(req.body)
    res.json(logs[logs.length - 1])
})

module.exports = logControllers
