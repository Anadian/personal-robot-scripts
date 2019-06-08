#!/usr/local/bin/node
'use strict';
/**
* @file prepare-deluge-columns.js
* @brief Prepare Deluge columns.
* @author Anadian
* @copyright 	Copyright 2019 Canosw
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:
	The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//Dependencies
	//Internal
	//Standard
	const Utility = require('util');
	//External
	const RobotJS = require('robotjs');

//Constants
const FILENAME = 'prepare-deluge-columns.js';
const MODULE_NAME = 'PrepareDelugeColumns';
var PROCESS_NAME = '';
if(require.main === module){
	PROCESS_NAME = 'prepare-deluge-columns';
} else{
	PROCESS_NAME = process.argv0;
}

//Global Variables
var Logger = { 
	log: () => {
		return null;
	}
};
//Functions
function Logger_Set( logger ){
	var _return = [1,null];
	const FUNCTION_NAME = 'Logger_Set';
	//Variables
	var function_return = [1,null];

	//Parametre checks
	if( typeof(logger) === 'object' ){
		if( logger === null ){
			logger = { 
				log: () => {
					return null;
				}
			};
		}
	} else{
		_return = [-2,'Error: param "logger" is not an object.'];
	}

	//Function
	if( _return[0] === 1 ){
		Logger = logger;
		_return = [0,null];
	}

	//Return
	return _return;
}
/**
* @fn PrepareDelugeColumns
* @brief Prepares Deluge columns via RobotJS.
* @return <ARRAY>
*	@entry 0 
*		@retval 1 premature return.
*		@retval 0 on success.
*		@retval <0 on failure.
*	@entry 1
*		@retval <object> on success
*		@retval <error_message> on failure.
*/
function PrepareDelugeColumns(){
	var _return = [1,null];
	const FUNCTION_NAME = 'PrepareDelugeColumns';
	//Variables
	const coordinates = {
		view: {
			x: 230,
			y: 10
		},
		columns: {
			x: 384,
			y: 170
		},
		eta: {
			x: 404,
			y: 418
		},
		label: {
			x: 404,
			y: 532
		},
		savepath: {
			x: 404,
			y: 513
		},
		added: {
			x: 404,
			y: 476
		}
	};

	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: Utility.format('received: ', arguments)});
	//Parametre checks
	
	//Function
	RobotJS.setMouseDelay( 500 );
	
	RobotJS.moveMouse( coordinates.view.x, coordinates.view.y );
	RobotJS.mouseClick( 'left', false );
	RobotJS.moveMouse( coordinates.columns.x, coordinates.columns.y );

	RobotJS.moveMouse( coordinates.eta.x, coordinates.eta.y );
	RobotJS.mouseClick( 'left', false );

	RobotJS.moveMouse( coordinates.view.x, coordinates.view.y );
	RobotJS.mouseClick( 'left', false );
	RobotJS.moveMouse( coordinates.columns.x, coordinates.columns.y );

	RobotJS.moveMouse( coordinates.label.x, coordinates.label.y );
	RobotJS.mouseClick( 'left', false );

	RobotJS.moveMouse( coordinates.view.x, coordinates.view.y );
	RobotJS.mouseClick( 'left', false );
	RobotJS.moveMouse( coordinates.columns.x, coordinates.columns.y );

	RobotJS.moveMouse( coordinates.savepath.x, coordinates.savepath.y );
	RobotJS.mouseClick( 'left', false );

	RobotJS.moveMouse( coordinates.view.x, coordinates.view.y );
	RobotJS.mouseClick( 'left', false );
	RobotJS.moveMouse( coordinates.columns.x, coordinates.columns.y );

	RobotJS.moveMouse( coordinates.added.x, coordinates.added.y );
	RobotJS.mouseClick( 'left', false );

	//Return
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: Utility.format('returned: ', _return)});
	return _return;
}


//Exports and Execution
if(require.main === module){
	var _return = [1,null];
	const FUNCTION_NAME = 'MainExecutionFunction';
	//Dependencies
		//Internal
		//Standard
		//External
		const SafeRecursiveMKDIR = require('safe-recursive-mkdir');
		const ApplicationLogWinstonInterface = require('application-log-winston-interface');
		const EnvPaths = require('env-paths');
	//Constants
	const EnvironmentPaths = EnvPaths( PROCESS_NAME );
	//Variables
	var function_return = [1,null];
	//Logger
	SafeRecursiveMKDIR.mkdirSyncRecursiveSafe( EnvironmentPaths.log );
	function_return = ApplicationLogWinstonInterface.InitLogger('debug.log', EnvironmentPaths.log);
	if( function_return[0] === 0 ){
		Logger_Set( function_return[1] );
	}
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'Start of execution block.'});
	//Options
	//Config
	//Main
	PrepareDelugeColumns();
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'End of execution block.'});
} else{
	exports.SetLogger = Logger_Set;
}

