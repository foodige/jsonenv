# jsonenv
Load a set of environment variables in json format into a javascript object.
This allows to have objects as environment variables instead of string only environment variables.
By default, the environment variables are stored in a file named .jsonenv.

## Install

	$ npm install jsonenv --save

## Usage

Let's assume that your .jsonenv file is like that

```json
{
	"mysql" : {"server" : "mymysqlserver.com", "password" : "mypassword"}
}

 ```
then you can load this file from your javascript like that:

```javascript
var jsonenv = require("jsonenv");

var env = jsonenv.load();
if (env) {
	// Do whatever you want with this vars
	console.log(env.mysql.server);
	console.log(env.mysql.password);
}
else {
	// Things went bad, you might consider doing something about it
	console.log("Could not load the file .jsonenv");
}
```
## Options
It is possible to pass options. 
``` javascript
	var options = {};
	options.silent = false; // Throws an exception if something bad happened (For instance, if your json file is malformed)
	options.file = '.myJsonFile'; // Allows to change the location of the environment variables
	var env = jsonenv.load(options);
	
```
