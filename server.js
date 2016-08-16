var express = require('express');
var http = require('http');
var path = require('path');

function start(){
	var web = express();
	web.use(express.static(path.join(__dirname,'build')));

	http.createServer(web).listen('3000',function(){
		console.log('server at port 3000');
	});
}

module.exports = start;

