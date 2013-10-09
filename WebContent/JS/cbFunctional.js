function cbMap(mapFunct,functSeq) {
//	while(funct in functSeq) {
//		funct(function(x) { callbackSeq(mapFunctSeq(x)); } );
//	}
	return function(callbackSeq) {
		map(
				function(funct) {
					funct(function(x) { callbackSeq(mapFunct(x)); } );
				},
				functSeq );
	};
};

function _cbCollector(reduceFunct,init,functSeq,callback) {
	this.reduceFunct = reduceFunct;
	this.currValue = init;
	this.queueLength = functSeq.length;
	this.callback = callback;
};
_cbCollector.prototype = {
		constructor: _cbCollector,
		update: function(newValue) {
			this.currValue = this.reduceFunct(this.currValue, newValue);
			if (--this.queueLength == 0)
				this.callback(this.currValue);
		}
};

function cbReduceAnyOrder(reduceFunct,init,functSeq) {
	return function(callback) {
		var collector = new _cbCollector(reduceFunct,init,functSeq,callback);
		map(
				function(funct) {
					funct(function(x) { collector.update(x); } );
				},
				functSeq );
	};
};

function _cbOrderedCollector(reduceFunct,init,functSeq,callback) {
	this.reduceFunct = reduceFunct;
//	this.currValue = init;
	this.queueLength = functSeq.length;
	this.results = [];
	this.funcToPositions = {};
	var currPos = 0;
	while(funct in functSeq) {
		if (this.funcToPositions[funct])
			this.funcToPositions[funct].push(currPos);
		else
			this.funcToPositions[funct] = [ currPos ];
		currPos++;
	}
	this.callback = callback;
};
_cbOrderedCollector.prototype = {
		constructor: _cbOrderedCollector,
		update: function(funct,newValue) {
			map(
					function(pos) {
						this.results[pos] = newValue;
						this.queueLength--;
					},
					this.funcToPositions[funct] );
			if (this.queueLength == 0)
				this.callback(
						reduce(	this.reduceFunct, this.results )
				);
		}
};

function cbReduce(reduceFunct,init,functSeq) {
	return function(callback) {
		var collector = new _cbOrderedCollector(reduceFunct,init,functSeq,callback);
		while(funct in functSeq) {
			funct(function(x) { collector.update(x); } );
		};
	};
};

