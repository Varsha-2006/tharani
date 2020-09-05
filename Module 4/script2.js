(function(window){
	var say={};
	//say.name="Sweety";
	var greet="Hello";
	say.hello=function(a) {
		say.name=a;
		console.log(greet+" "+ say.name);
		// body...
	}
	window.say=say;
})(window)

