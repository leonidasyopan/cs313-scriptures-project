const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;
var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // support JSON encoded bodies
app.use(express.urlencoded({extended: true})); // support URL encoded bodies

app.get("/topics", function(req, res) {
    // get list of all topics from the Database
    console.log("Getting all topics from DB");

    var results = {
        topics: [
            {id: 1, name: "faith"},
            {id: 2, name: "hope"},
            {id: 3, name: "charity"}
        ]
    }

    res.json(results);

});

app.get("/topic", function(req, res) {
    // get a single topic by id

    // /topic?id=1
    var id = req.query.id;

    // /topic/xxxxx
    // var id = req.params.id;

    console.log("Getting topic with id: " + id);

    var results = {id:id, name: "faith"};

    res.json(results);
    
});

app.post("/topic", function(req, res) {
    console.log("Creating a new topic");
});


app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
})