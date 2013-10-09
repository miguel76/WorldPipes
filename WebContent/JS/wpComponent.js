function wpComponent(pipeline,id) {
	wpItem.call(this, pipeline, id);
};

wpComponent.prototype =
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


