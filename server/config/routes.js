var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var path = require('path');

//connect to controllers 
var notes = require('./../controllers/note.js');

//var noteDash = require('../controllers/note.js');

module.exports = function(app){
    
    app.get('/api/notes', function (req, res){
        console.log("(route.js)-- notes.show");
        notes.show(req,res);
    });

    app.post('/api/notes/:note', function (req, res){
        notes.create(req,res);
    });

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

};