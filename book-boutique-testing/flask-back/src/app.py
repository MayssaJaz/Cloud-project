from flask import Flask, jsonify, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://db-project:fBVKCq02WwOUbShW6jLlxLmiO1C2Wl3dYkDhuFnGHMS2U7RKJ26RwrAQePJPDi0mzyaOdQi8QyXSACDbddGCrA==@db-project.mongo.cosmos.azure.com:10255/books?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@db-project@'
mongo = PyMongo(app)
CORS(app)

db = mongo.db.books


@app.route('/books', methods=['POST'])
def createBook():

    id = db.insert_one({
        'name': request.json['name'],
        'author': request.json['author'],
        'pages': request.json['pages'],
        'genre': request.json['genre'],
        'createdAt': request.json['genre']
    })

    # return jsonify(str(ObjectId(id)))
    return jsonify(str(id.inserted_id))


@app.route('/books', methods=['GET'])
def getBooks():
    books = []
    for doc in db.find():
        books.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'genre': doc['genre'],
            'pages': doc['pages'],
            'author': doc['author'],
            'createdAt': doc['genre']
        })
    return jsonify(books)


@app.route('/books/<id>', methods=['DELETE'])
def deleteBook(id):

    db.delete_one({'_id': ObjectId(id)})

    return jsonify({'msg': 'Book deleted'})

