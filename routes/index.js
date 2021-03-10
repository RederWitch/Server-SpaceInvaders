var express = require('express');
const path = require('path');
const fs = require('fs');
var date = require('./date');

var router = express.Router();

var score =0;
var player = "Player";
var lv = 1;

/* GET home page. Reset score, player, lv*/
router.get('/', function(req, res, next) {
  score = 0;
  lv = 1;
  player = "Player";
  res.render('index', { title: 'SpaceInvaders' });
});

/* GET save page.  save your score into file*/
router.get('/save', function(req, res, next) {
  res.render('save', { title: 'Save Your Score' });
  var txt = "\nPlayer: "+ player + "\tLv: " +  lv + "\tScore: " + score + "\t"+ date.myDateTime();
  fs.appendFile('ScoreBoard.txt', txt, function (err) {
    if (err) throw err;
    console.log('Saved!'+txt);
  });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.sendFile(path.join( __dirname, '/pages/SpaceInviders.html'))
});

/*POSTS*/

/* POST to_save, recive scores to server when game over ->  lv not ended */
router.post('/to_save', function (req, res, next) {
  score += parseInt(req.body.points);
});

/* POST to_save, recieve scores to server when level ended (game still on) */
router.post('/to_nextLevel', function (req, res, next) {
  score += parseInt(req.body.points);
  lv += 1;
});

/*
router.post('/to_newGame', function (req, res, next) {
  score = 0;
  lv = 1;
  player = "Player";
});
*/
router.post('/name', function (req, res, next) {
  player = req.body.player_name;
  res.redirect("/game");

});

module.exports = router;
