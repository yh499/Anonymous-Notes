var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res) {
        Note.find({}, function(err,notes){
         //res.render('index', {note: result});
         res.json(notes);
         console.log(notes);
        });
    },

    create: function (req, res) {
        console.log('create function on (controllers):', req.params.noote);
        var noote = new Note({note: req.params.note});
        noote.save(function(err){
            if (err) {
                console.log("something went wrong");
            } else {
                console.log("note.js:(controller): Added a note");
                res.redirect('/');
            }
        })
    }


}