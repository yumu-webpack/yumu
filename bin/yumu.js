#!/usr/bin/env node

var fs = require('fs');
var process = require('process');
var child_process = require('child_process');
var inquirer = require('inquirer');
var chalk = require('chalk');
var program = require('commander');
var pkg = require('../package.json');
var child_process = require('child_process');

program.version(pkg.version);
program.on('--help', function(){
	console.log('');
  console.log('*******************************   ' + chalk.cyan('API:') + '   *******************************');
  console.log('');
  console.log(chalk.cyan('    yumu init'));
  console.log(chalk.cyan('    yumu server'));
  console.log(chalk.cyan('    yumu install'));
  console.log(chalk.cyan('    yumu build'));
  console.log('');
});

program.parse(process.argv);

if(!process.argv[2]) {
	var getResult
	try {
		getResult = child_process.execSync('yumu --help', { encoding: 'utf8' });
	} catch(err) {
		console.log(err.stderr);
	}
	process.stdout.write(getResult);
	return;
}

switch (process.argv[2]) {
	case 'init':
		handleByYumuInit();
		break;
	default:
		console.log(chalk.red('can\'t find \'yumu '+ process.argv[2] +'\',Please ensure the right commends'));

}

function handleByYumuInit() {
	var yumuInit = require('yumu-init');
	var url = yumuInit.url;
	if(process.argv[3]) {
		yumuInit.init(url, process.argv[3]);
	} else {
		yumuInit.init(url);
	}
}
