function Pipeline(id,name) {
	this.id = id;
	this.name = name;
	this.componentsById = {};
	this.idsByComponent = {};
};

function IdAlreadyUsedException(id) {
	this.id = id;
}

function ComponentAlreadyContainedException(component) {
	this.component = component;
}

function ComponentNotContainedException(component) {
	this.component = component;
}

Pipeline.prototype = {
		constructor: Component,
		getComponentById: function(componentId) { return this.componentsById[componentId]; },
		getComponentIds: function() { return this.componentsById.keys(); },
		addComponent: function(component) {
			var componentId = component.getId();
			if (this.componentsById.propertyIsEnumerable(componentId))
				throw new IdAlreadyUsedException(componentId);
			if (this.idsByComponent.propertyIsEnumerable(component))
				throw new ComponentAlreadyContainedException(component);
			this.componentsById[componentId] = component;
			this.idsByComponent[component] = component;
			
		},
		updateComponent: function(component) {
			if (!this.idsByComponent.propertyIsEnumerable(component))
				throw new ComponentNotContainedException(component);
			var componentId = component.getId();
			var oldComponentId = this.idsByComponent[component];
			if (componentId != oldComponentId) {
				if (this.components.propertyIsEnumerable(componentId))
					throw new IdAlreadyUsedException(componentId);
				this.componentsById[oldComponentId] = undefined;
				this.componentsById[componentId] = component;
				this.idsByComponent[component] = componentId;
			}
		},
		removeComponent: function(component) {
			if (!this.idsByComponent.propertyIsEnumerable(component))
				throw new ComponentNotContainedException(component);
			var componentId = component.getId();
			this.componentsById[componentId] = undefined;
			this.idsByComponent[component] = undefined;
		}
};

/*Scrive il nome del componente nel div*/
Component.scriviNome = function(div,code,cnt){
	var name = Component.getName(code);
	
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

/*Salva dati contenuti in componentVett*/
Component.refreshEditor = function(editor){
	/*var figli = editor.childNodes;
	for(var i=figli.length-1;i != 0; i--){
		if(figli[i].id != "edit"){editor.removeChild(figli[i]);}
	}*/
	jsPlumb.reset();
	var edit = document.getElementById("edit");
	editor.innerHTML = edit.outerHTML;
	
	for(var i=0;i<componentVett.length;i++){
		Code.cancellaCodice(componentVett[i].Code);
	}
};

/*Ricaricare Vettore dei componenti nella pagina web*/
Component.scorriVettore = function(editor,componentVett){
	for(var i=0;i<componentVett.length;i++){
		//alert("Code -  " + componentVett[i].Code + " Component -  " + componentVett[i].Component + " ID -  " +  componentVett[i].ID + " URI -  " + componentVett[i].URI + " Name -  " + componentVett[i].Name + " Query -  " + componentVett[i].Query + " InputList -  " + componentVett[i].InputList.length + " X -  " + componentVett[i].X + " Y -  " + componentVett[i].Y);
		Component.loadPipeline(editor,componentVett[i].Code,componentVett[i].Component,componentVett[i].ID,componentVett[i].URI,componentVett[i].Name,componentVett[i].Query,componentVett[i].InputList,componentVett[i].X,componentVett[i].Y);
	}
	Component.createConnection(editor);
};

/*Ricarica la pipeline creata*/
Component.loadPipeline = function(editor,code,component,id,uri,name,query,inputlist,x,y){
	//alert(code + component + id + uri + name + query + inputlist + x + y);
	
	var div = document.createElement("div");
	div.setAttribute("class","activegraph");
	div.setAttribute("id","comp-" + code);
	div.title = code;
	
	var img = document.createElement("img");
	img.setAttribute("id","activeimg");
	
	if(component == "inputdefault" || component == "input"){img.src = "IMG/Input.gif";}
	if(component == "outputdefault" || component == "output"){img.src = "IMG/Output.gif";}
	if(component == "union"){img.src = "IMG/Union.gif";}
	if(component == "construct"){img.src = "IMG/Construct.gif";}
	if(component == "updatable"){img.src = "IMG/Updatable.gif";}
	if(component == "dataset"){img.src = "IMG/Dataset.gif";}
	
	div.appendChild(img);
		
	var label = document.createElement("label"); 
	label.setAttribute("class","activeimg");
	var br = document.createElement("br");
	
	var text = document.createTextNode(name);
	label.appendChild(text);
	label.appendChild(br);
	label.appendChild(br);
	
	div.appendChild(label);
	
	if(component == "input" || component == "output" || component == "union" || component == "construct" || component == "updatable" || component == "dataset"){
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
			Component.elimina(componentVett,code);
			Code.cancellaCodice(code);	
		});
	}
	
	var x = div.style.left = x;
	var y = div.style.top = y;
	
	editor.appendChild(div);	
	
	Endpoint.createEndpoint(div,code,null);	
	
	if((component == "construct" || component == "updatable") && inputlist.length != 0){Endpoint.createEndpoint(div,code,2);}
	
	Code.modificaCodice(code);
};

Component.createConnection = function(editor){
	var divlist = Core.getElementsByClass("activegraph");
	
	for(var i=0;i<divlist.length;i++){
		if(Component.getVett(divlist[i].title) != null){
			var inputVett = Component.getVett(divlist[i].title);
			Endpoint.connectEndpoint(divlist[i],inputVett);
		}
	}
};

Component.jsonLoad = function(){
	var editor = Core.getElementsByClass("areaeditor")[0];
	Component.refreshEditor(editor);	
	JsonToServer.loadPipelineAndLayout(URIGraphStore,pipelineURI,layoutURI,
		function(err,result){
			if(err != null){alert("Error!" + err);}
			else{
				componentVett = result;					
				Component.scorriVettore(editor,componentVett);
			}
		});
	for(var i=0;i<componentVett.length;i++){
		if(componentVett[i].Code + 1 > cnt){
			cnt = componentVett[i].Code + 1;
		}
	}
};
