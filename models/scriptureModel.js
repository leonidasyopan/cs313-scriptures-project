function searchByBook(book, callback) {

    console.log("Searching the DB for book: " + book);

    var results = {list:[{id:1, book:book , chapter:1, verse:3, content:"test"}, 
    {id:2, book:book, chapter:2, verse:3, content:"test"}, 
    {id:3, book:book, chapter:3, verse:3, content:"test"}]}

    callback(null, results);
}

function searchByTopic(topicId, callback) {

    var results = {list: [{id:1, book:"Gen", chapter:1, verse:3, content:"test"}, 
    {id:2, book:"Gen", chapter:2, verse:3, content:"test"}, 
    {id:3, book:"Gen", chapter:3, verse:3, content:"test"}]}

    callback(null, results);
}

function getAllScriptures(callback) {

    var results = {list: [{id:1, book:"Gen", chapter:1, verse:3, content:"test"}, 
    {id:2, book:"Gen", chapter:2, verse:3, content:"test"}, 
    {id:3, book:"Gen", chapter:3, verse:3, content:"test"}]}

    callback(null, results);
}

function getScriptureById(id, callback) {
    
    var results = {id:1, book:"Gen", chapter:1, verse:3, content:"test"};

    callback(null, results);
}

function insertNewScripture(book, chapter, verse, content, callback) {
    
    var results = {success:true, 
                            scripture:{id:1, book:book, chapter:chapter, verse: verse}};

    callback(null, results);
}

function assignTopicToScripture(topicId, scriptureId, callback) {

    var results = {success:true};

    callback(null, results);
}

module.exports = {
    searchByBook: searchByBook,
    searchByTopic: searchByTopic,
    getAllScriptures: getAllScriptures,
    getScriptureById: getScriptureById,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
};
