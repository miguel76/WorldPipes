function wpContainer(store,graph) {
	this.store = store;
	this.graph = graph;
	this.itemsById = {};
	this.idsByItem = {};
	this._loadItems();
};

function wpIdAlreadyUsedException(id) {
	this.id = id;
}

function wpItemAlreadyContainedException(item) {
	this.item = item;
}

function wpItemNotContainedException(item) {
	this.item = item;
}

wpContainer.prototype = {
		
		constructor: wpContainer,
		
		getStore: function() {
			return this.store;
		},
		getGraph: function() {
			return this.graph;
		},
		
		_anonIdPrefix: "item_",
		_anonIdCount: 0,
		getNewId: function() {
			var newId;
			do {
				newId = anonIdPrefix + anonIdCount++;
			} while (newId in this.itemsById.keys());
		},
		
		_anonNamePrefix: "Unnamed ",
		_anonNameCount: 0,
		getNewName: function() {
			var newName;
			do {
				newName = anonNamePrefix + anonNameCount++;
			} while (newName in map( 'x.getName()', this.idsByItem.keys()) );
		},
		
		getItemById: function(itemId) { return this.itemsById[itemId]; },
		getItemIds: function() { return this.itemsById.keys(); },
		getItems: function() { return this.idsByItem.keys(); },
		
		_addItem: function(item) {
			var itemId = item.getId();
			this.itemsById[itemId] = item;
			this.idsByItem[item] = item;
		},
//		addComponent: function(component) {
//			var componentId = component.getId();
//			if (this.componentsById.propertyIsEnumerable(componentId))
//				throw new IdAlreadyUsedException(componentId);
//			if (this.idsByComponent.propertyIsEnumerable(component))
//				throw new ComponentAlreadyContainedException(component);
//			this._addComponent(component);
//		},
		updateItemId: function(item, newId) {
			if (!this.idsByItem.propertyIsEnumerable(item))
				throw new wpItemNotContainedException(item);
			var oldId = item.getId();
			if (newId != oldId) {
				if (this.itemsById.propertyIsEnumerable(newId))
					return false;
				delete this.itemsById[oldId];
				this.itemsById[newId] = item;
				this.idsByItem[item] = newId;
				item.setId(newId);
				return true;
			}
		},
		removeItem: function(item) {
			if (!this.idsByItem.propertyIsEnumerable(item))
				throw new wpItemNotContainedException(item);
			var itemId = item.getId();
			delete this.itemsById[itemId];
			delete this.idsByItem[item];
			item.remove();
		},
		removeAll: function() {
			map( 'x.remove()', this.idsByItem.keys() );
			this.itemsById = {};
			this.idsByItem = {};
		},
		
		_itemType: "wp:Item",
		_itemClass: wpItem,
		
		_loadItems: function() {
			map(
					function(id) { this._loadItem(id); },
					graph.filter(store.rdf.filters.type(store.rdf.resolve(_itemType))));
		},
		_loadItem: function(id) {
			new _itemClass(this,id);
		},
		
		sendDataToServer: function() {
			this._sendDataToServer();
			map( 'x.sendDataToServer()', this.getItems() );
		},
		_sendDataToServer: function() { }

};
