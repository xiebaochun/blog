# gh-page blog system

### Description
This is a simple gh-pages blog system, you can take a glance at [Demo](http://xiebaochun.github.io/blog).

### Structure
	
+ /build ---- gh-pages static website
+ /source ---- source files
	- css ----style files
	- js ---- script files
	- layout ---- layout files
	- posts ---- source of blog post (markdown format)
+ test --- test folder
- build.js -----build command lines
- gulpfile.js ------ gulp config file
- index.html ----- unused file
- new.js ------ new post command lines
- package.json ----- npm package
- publish.js ----- deploy static files to the gh-page branch
- push.js ---- push current branch to the source branch
- README.md ---- this is fuck me!
- server.js ---- this the local dev service powered by express web engine

## Usage

##### Ready

`git clone  https://github.com/xiebaochun/blog.git  
cd blog  
npm install //If you use TAOBAO npm mirror type:cnpm install,will faster!  
`
##### Generate static files

`node build`

##### New post

`node new [postname]`

##### Article Format
===
{  
    "title":"[post title]", title of the post  
    "author":"xiebaochun", //the author of the post   
    "categories":["web","react","angular"],  //categories of the post  
    "tags":["node.js","architecture"] // tags of the post  
}   
===
post main content  
bala bala ... 


##### Backup source file
`node push`

## Include
If there are any question please contact with me by QQ or other awesome tools(such as the github issue area).

