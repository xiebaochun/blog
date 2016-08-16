require(`shelljs/global`);
exec('git add .');
if(exec('git commit -m "update"').code !==0){
	echo(`Error: Git commit source failed`);
    exit(1);
}
if (exec(`git push origin source-zh`).code !== 0) {
	echo(`Error: Git push source failed`);
	exit(1);
}
echo(`------------ source-zh updated`);