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


/*Scrive il nome del wpComponente nel div*/
wpComponent.scriviNome = function(div,code,cnt){
	var name = wpComponent.getName(code);
	
	var label = document.createElement("label"); 
	label.setAttribute("class","activeimg");
	var br = document.createElement("br");
	
	if(code == 0 || code == 1){
		name = div.title;
		var text = document.createTextNode(name);
		label.appendChild(text);
		label.appendChild(br);
		label.appendChild(br);
		return label;
	}
	
	if(name == null){
		name = div.title + " " + cnt;
		var text = document.createTextNode(name);
		label.appendChild(text);
		label.appendChild(br);
		return label;
	}
	else{
		var text = document.createTextNode(name);
		label.appendChild(text);
		label.appendChild(br);
		return label;
	}	
};

/*Ricarica la pipeline creata*/
wpComponent.loadPipeline = function(editor,code,wpComponent,id,uri,name,query,inputlist,x,y){
	//alert(code + wpComponent + id + uri + name + query + inputlist + x + y);
	
	var div = document.createElement("div");
	div.setAttribute("class","activegraph");
	div.setAttribute("id","comp-" + code);
	div.title = code;
	
	var img = document.createElement("img");
	img.setAttribute("id","activeimg");
	
	if(wpComponent == "inputdefault" || wpComponent == "input"){img.src = "IMG/Input.gif";}
	if(wpComponent == "outputdefault" || wpComponent == "output"){img.src = "IMG/Output.gif";}
	if(wpComponent == "union"){img.src = "IMG/Union.gif";}
	if(wpComponent == "construct"){img.src = "IMG/Construct.gif";}
	if(wpComponent == "updatable"){img.src = "IMG/Updatable.gif";}
	if(wpComponent == "dataset"){img.src = "IMG/Dataset.gif";}
	
	div.appendChild(img);
		
	var label = document.createElement("label"); 
	label.setAttribute("class","activeimg");
	var br = document.createElement("br");
	
	var text = document.createTextNode(name);
	label.appendChild(text);
	label.appendChild(br);
	label.appendChild(br);
	
	div.appendChild(label);
	
	if(wpComponent == "input" || wpComponent == "output" || wpComponent == "union" || wpComponent == "construct" || wpComponent == "updatable" || wpComponent == "dataset"){
		var proprieta = document.createElement("img");
		proprieta.setAttribute("class","bottongraph");
		proprieta.src = "IMG/pulsanteproprieta.gif";
		proprieta.title = "property";
		div.appendChild(proprieta);
		
		Core.addEventListener(proprieta,"click",function(){
			var body = document.createElement("div");
			body.setAttribute("class","body");
			formIN = Form.createForm(div,code);
			document.getElementsByTagName("body")[0].appendChild(formIN);
			document.getElementsByTagName("body")[0].appendChild(body);
		});
					
		var elimina = document.createElement("img");
		elimina.setAttribute("class","bottongraph");
		elimina.src = "IMG/iconaX.gif";
		elimina.title = "delete";
		div.appendChild(elimina);
		
		Core.addEventListener(elimina,"click",function(){
			temp = elimina.parentNode.parentNode;
			jsPlumb.removeAllEndpoints(elimina.parentNode);
			jsPlumb.detachAllConnections(elimina.parentNode);
			temp.removeChild(elimina.parentNode);
			wpComponent.elimina(wpComponentVett,code);
			Code.cancellaCodice(code);	
		});
	}
	
	var x = div.style.left = x;
	var y = div.style.top = y;
	
	editor.appendChild(div);	
	
	Endpoint.createEndpoint(div,code,null);	
	
	if((wpComponent == "construct" || wpComponent == "updatable") && inputlist.length != 0){Endpoint.createEndpoint(div,code,2);}
	
	Code.modificaCodice(code);
};

