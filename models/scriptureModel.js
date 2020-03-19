const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

// console.log("DB url: " + db_url);
function searchByBook(book, callback) {

    console.log("Searching the DB for book: " + book);

    var sql = "SELECT  id, book, chapter, verse, content FROM scripture WHERE book=$1::text";
    var params = [book];

    pool.query(sql, params, function(err, db_results) {

        if(err) {
            throw err;
        } else {
            // We got some successful results form the DB
            // console.log("Back from the DB with: ");
            // console.log(db_results);
            
            var results = {
                    success:true,
                    list:db_results.rows
                };

            callback(null, results);

        }
    });
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
