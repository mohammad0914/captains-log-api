const express = require("express")
const logControllers = require("./controllers/LogsController.js")
const logControllersv2 = require("./v2/LogsController.js")
const app = express()

app.get("/", (req, res) => {
  console.log("welcome to the captain's log")
  res.send("welcome to the captain's log")
})
app.use("/logs", logControllers)

app.use("/v2/logs", logControllersv2)


app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});


module.exports = app
