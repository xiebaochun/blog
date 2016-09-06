===
{
    "title":"module-exports-vs-exports-in-node-js",
    "author":"xiebaochun",
    "categories":[""],
    "tags":[""],
    "createtime":"2016-09-06"
}
===
# module-exports-vs-exports-in-node-js

You can imagine that at very begining of your file there is something like (just for explanation):

	var module = new Module(...);
	var exports = module.exports;

![](http://i.stack.imgur.com/JzZkz.png)

So whatever you do just keep in mind that module.exports and NOT exports will be returned from your module when you requiring that module from somewhere else.

So when you do something like:

	exports.a = function() {
	    console.log("a");
	}
	exports.b = function() {
	    console.log("b");
	}
You are adding 2 function 'a' and 'b' to the object on which module.exports points too, so typeof returning result will be an object : `{ a: [Function], b: [Function] }`

Of course this is the same result you will get if you are using module.exports in this example instead of exports.

This is the case where you want your module.exports to behave like container of exported values. In the case where you only want to export a constructor function, what you will do? (Remember again that module.exports will be returned when you required something, not export).

	module.exports = function Something() {
	    console.log('bla bla');
	}
Now typeof returning result is 'function' and you can required it and immediately invoke like: 
var x = require('./file1.js')(); because you overwrite the returning result to be an function.

Why in this case you can't use something like:

	exports = function Something() {
	    console.log('bla bla');
	}
Because with this exports reference doesn't 'point' anymore to the object where module.exports points, so there is not a relationship between exports and module.exports anymore. In this case module.exports still points to the empty object {} which will be returned.

Accepted answer from another topic should also help: ['Does JavaScript pass by reference?'](http://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference)