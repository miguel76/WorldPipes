function cbMap(mapFunctSeq,functSeq,callbackSeq) {
	while(funct in functSeq) {
		funct(function(x) { callbackSeq(mapFunctSeq(x)); } );
	}
};

function cbCollector(reduceFunctSeq,init,functSeq,callback) {
	this.reduceFunctSeq = reduceFunctSeq;
	this.currValue = init;
	this.queueLength = functSeq.length;
	this.callback = callback;
};
cbCollector.prototype = {
		constructor: cbCollector,
		currValue: init,
		update: function(newValue) {
			this.currValue = reduceFunctSeq(this.currValue, newValue);
			if (--this.queueLength == 0)
				this.callback(this.currValue);
		}
};

function cbReduceAnyOrder(reduceFunctSeq,init,functSeq,callback) {
	
	var collector = new cbCollector(reduceFunctSeq,init,functSeq,callback);
	while(funct in functSeq) {
		funct(function(x) { collector.update(x); } );
	}
	
};

function wpReduce(reduceFunctSeq,init,functSeq,callbackSeq) {
	
};

wpMap.prototype =
	wpContainer.prototype || wpItem.prototype || {
		constructor: wpComponent,
		getX: function() { return this.x; },
		setX: function(x) { this.x = x; },
		getY: function() { return this.y; },
		setY: function(y) { this.y = y; },
		createNewGate: function() {
			var newGate = new wpComponentGate(this);
//			newComponent.setX(x);
//			newComponent.setY(y);
			this._addItem(newGate);
			return newGate;
		},
//		getInputGates: function() { return []; },
//		getOutputGates: function() { return []; },
		_loadDefault: function() {
			this.id = this.pipeline.getNewId();
			this.name = this.pipeline.getNewName();
		},
		_readFromRDF: function() {
			
		},
		_writeToRDF: function() {
			
		}
};


