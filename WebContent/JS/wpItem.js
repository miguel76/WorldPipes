function wpItem(container,id) {
	this.container = container;
	if (id) {
		this.id = id;
		this._readFromRDF();
	} else {
		this._loadDefault();
	}
};

wpItem.prototype = {
		constructor: wpComponent,
		getId: function() { return this.id; },
		setId: function(id) {this.id = id; },
		getName: function() { return this.name; },
		setName: function(name) {this.name = name; },
//		getInputGates: function() { return []; },
//		getOutputGates: function() { return []; },
		_loadDefault: function() {
			this.id = this.container.getNewId();
			this.name = this.container.getNewName();
		},
		_readFromRDF: function() {
			
		},
		_writeToRDF: function() {
			
		},
		remove: function() {
			this.container.graph.removeMatches(id,null,null);
			this.container.graph.removeMatches(null,id,null);
			this.container.graph.removeMatches(null,null,id);
//			map('x.remove()',inputGates);
//			map('x.remove()',outputGates);
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

