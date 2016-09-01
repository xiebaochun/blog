var build = require('./build');
build(false);

require(`shelljs/global`);
cd('build');
exec('git add .');
if(exec('git commit -m "update"').code !==0){
	echo(`Error: Git commit gh-pages failed`);
    out();
}
if (exec(`git push origin gh-pages`).code !== 0) {
	echo(`Error: Git push gh-pages failed`);
	out();
}
echo(`------------ gh-pages updated`);
out();

function out(argument) {
	// body...
	cd('..');
	exec('gulp build');
	exec('node push');
	exit(1);
}
