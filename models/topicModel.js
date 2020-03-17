function getAllTopics(callback) {
    // get all the topics from the DB

    var results = {
        topics: [
            {id: 1, name: "faith"},
            {id: 2, name: "hope"},
            {id: 3, name: "charity"}
        ]
    }

    callback(null, results);
}

function getTopicById(id, callback) {

    var results = {id:id, name: "faith"};

    callback(null, results);
}

function insertNewTopic(name, callback) {
    // create the new topic in the DB with the provided name 

    var results = {success:true};

    callback(null, results);

}

module.exports = {
    getAllTopics: getAllTopics,
    getTopicById: getTopicById,
    insertNewTopic: insertNewTopic
};