const express = require("express");
const path = require("path");

const topicController = require("./controllers/topicController.js")
const scriptureController = require("./controllers/scriptureController.js")

const PORT = process.env.PORT || 5000;
var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // support JSON encoded bodies
app.use(express.urlencoded({extended: true})); // support URL encoded bodies

app.get("/topics", topicController.getTopicList);
app.get("/topic", topicController.getTopic);
app.post("/topic", topicController.postTopic);

app.get("/search", scriptureController.search);
app.get("/scriptures", scriptureController.getScriptureList);
app.get("/scripture", scriptureController.getScripture);
app.post("/scripture", scriptureController.insertNewScripture);
app.get("/assignTopicToScripture", scriptureController.assignTopicToScripture);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
})