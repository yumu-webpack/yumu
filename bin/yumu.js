#!/usr/bin/env node

var fs = require('fs');
var process = require('process');
var child_process = require('child_process');
var inquirer = require('inquirer');
var chalk = require('chalk');
var program = require('commander');
var pkg = require('../package.json');
var child_process = require('child_process');

if(!process.argv[3]) {
	program.version(pkg.version);
}
program.on('--help', function(){
	console.log('');
  console.log('******************   ' + chalk.yellow('API:') + '   ******************');
  console.log('');
  console.log(chalk.yellow('                  yumu init'));
  console.log(chalk.yellow('                  yumu install'));
  console.log(chalk.yellow('                  yumu server'));
  console.log(chalk.yellow('                  yumu build'));
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
	case 'install':
		handleByYumuInstall();
		break;
	default:
		console.log(chalk.red('  Can\'t find \'yumu '+ process.argv[2] +'\',Please ensure the right commends'));

}

function handleByYumuInit() {
	var yumuInit = require('yumu-init');
	var url = yumuInit.url;
	if(process.argv[3]) {
		var options = yumuInit.options;
		var action = yumuInit.action;
		var version = yumuInit.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuInit.init(url);
	}
}

function handleByYumuInstall() {
	var yumuInstall = require('yumu-install');
	if(process.argv[3]) {
		var options = yumuInstall.options;
		var action = yumuInstall.action;
		var version = yumuInstall.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuInstall.init();
	}
}
