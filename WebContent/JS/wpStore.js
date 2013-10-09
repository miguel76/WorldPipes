function wpStore(remoteStoreURL,callback) {
	this.remoteStoreURL = remoteStoreURL;
	this.defaultGraphURL = remoteStoreURL + "data?defaultGraph";
	this.namedGraphURLPrefix = remoteStoreURL + "data?graph=";
	Store.create(
			function(store) {
				this._setPrefixes();
				this.store = store;
				this.loadDefaultGraphFromServer(
						function() {
							store.graph(
									function(defaultGraph) {
										wpContainer.call(this,store,defaultGraph);
										callback(this);
									}
							);
						}
				);
			}
	);
	
};

wpStore.create = function(remoteStoreURL,callback) {
	new wpStore(remoteStoreURL,callback);
};

wpStore.prototype =
	wpContainer.prototype || {
		
		constructor: wpStore,
		
		createNewPipeline: function(id) {
			var newPipeline = new wpPipeline(this,id);
			this._addItem(newPipeline);
			return newPipeline;
		},
		
		_anonIdPrefix: "pl_",
		
		_commonExtensions: {
				'wp':'http://www.swows.org/2013/10/worldpipes#',
				'rdf':'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
				'xsd':'http://www.w3.org/2001/XMLSchema#'
		},
		_setPrefixes: function() {
			map(
					function(key) {
						this.store.setPrefix(key,this._commonExtensions[key]);
					},
					this._commonExtensions.keys() );
		},
		
		loadDefaultGraphFromServer: function(callback) {
			this.store.load(
					'remote',
					this.defaultGraphURL,
					callback
			);
		},
		loadGraphFromServer: function(graphURI, callback) {
			this.store.load(
					'remote',
					this.namedGraphURLPrefix + encodeURIComponent(graphURI),
					graphURI,
					callback
			);
		},
		
		_put: function(URL,graph) {
			try {
				var request = new XMLHttpRequest();
			} catch(error) {
				var request = null;
			}
		  
			if (request == null) {
		        alert("ERROR! Invalid Request");
		    } else {
		    	request.open("PUT",URL, false);
		    	request.setRequestHeader("Content-Type","application/n-quads");
		    	request.send(graph.toNT());
		    	if(request.status == 200 || request.status == 201 || request.status == 204) {
//		 	        alert("Data sent to " + graphName);
		    	}
		    	if(request.status == 400 ){alert("Parse error");}
		    	if(request.status == 500 ){alert("Server error");} 
		    	if(request.status == 503 ){alert("Service not available");}
		    }
		},
		
		sendDefaultGraphToServer: function(graph) {
			this._put(this.defaultGraphURL, graph);
		},
		sendGraphToServer: function(graphURI, graph) {
			this._put(this.namedGraphURLPrefix + encodeURIComponent(graphURI), graph);
		},
		
		_sendDataToServer: function() {
			this.sendDefaultGraphToServer(this.graph);
		}
		
};
