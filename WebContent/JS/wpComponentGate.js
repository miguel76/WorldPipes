function wpComponentGate(code,type,id,uri,name,query,inputList,x,y) {
	this.code = code;
	this.type = type;
	this.componentId = id;
	this.uri = uri;
	this.name = name;
	this.query = query;
	this.inputList = inputList;
	this.x = x;
	this.y = y;
};

wpComponentGate.prototype = {
		constructor: Component,
		getCode: function() { return this.code; },
		getType: function() { return this.type; },
		getId: function() { return this.componentId; },
		getURI: function() { return this.uri; },
		getName: function() { return this.name; },
		getQuery: function() { return this.query; },
		getInputList: function() { return this.inputList; },
		getPositionX: function() { return this.x; },
		getPositionY: function() { return this.y; }
};

