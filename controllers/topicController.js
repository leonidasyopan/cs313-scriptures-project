const topicModel = require("../models/topicModel.js")

function getTopicList(req, res) {
    // get list of all topics from the Database
    console.log("Getting all topics from DB");

    topicModel.getAllTopics(function(error, results) {
        res.json(results);
    });
}

function getTopic(req, res) {
    // get a single topic by id

    // /topic?id=1
    var id = req.query.id;

    // /topic/xxxxx
    // var id = req.params.id;

    console.log("Getting topic with id: " + id);

    topicModel.getTopicById(id, function(error, results) {
        res.json(results);
    });   
    
}

function postTopic(req, res) {
    var name = req.body.name;
    
    console.log("Creating a new topic");


    topicModel.insertNewTopic(name, function(error, results) {
        res.json(results);
    });    
}

module.exports = {
    getTopicList: getTopicList,
    getTopic: getTopic,
    postTopic: postTopic
};