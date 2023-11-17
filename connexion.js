const MongoClient = require('mongodb-legacy').MongoClient
const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("TP");

const messagesCollection = db.collection("message")

function chercherMessage() {

    return new Promise((resolve, reject) => {
        messagesCollection.findOne({})
            .then(result => {
                resolve(JSON.stringify(result));
            })
            .catch(error => {
                reject(error);
            })
    });
}
function enregistrerMessage(nom, email, message_insert) {
    return new Promise((resolve, reject) => {
        var message = {
            "nom": nom,
            "email": email,
            "message": message_insert
        };
        messagesCollection.insertOne(message)
            .then(result => {
                resolve(JSON.stringify(result));
            })
            .catch(error => {
                console.log(error)
                reject(error);
            })
    });
}
module.exports = { chercherMessage, enregistrerMessage };