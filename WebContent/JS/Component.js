/*Ogni componente trascianto nella'erea editor è contenuto nel vettore dei Componenti.
Tale vettore è un array di classi.
In questo script si gestiscono tutti i metodi get e set per poter lavorare sul vettore dei Componenti*/
var Component = {};

componentVett = []; 

/*Costrutture della classe ComponentClass*/
//var ComponentClass =
function Component(code,type,id,uri,name,query,input,x,y) {
	this.code = code;
	this.type = type;
	this.componentId = id;
	this.uri = uri;
	this.name = name;
	this.query = query;
	this.input = input;
	this.x = x;
	this.y = y;
};

/*Restituisce il codice del componente*/
Component.prototype.getCode = function() {
	return this.code;
};

/*Restituisce la categoria a cui il componente appartiene*/
Component.prototype.getType = function() {
	return this.type;
};

/*Restitusce l'ID del componente*/
Component.prototype.getID = function() {
	return this.componentId;
};

/*Restituisce l'URI del componente*/
Component.prototype.getURI = function() {
	return this.uri;
};

/*Restituisce il Nome del componente*/
Component.prototype.getName = function( ) {
	return this.name;
};

/*Restitusce la query*/
Component.prototype.getQuery = function() {
	return this.query;
};

/*Restitusce la posizione nell'asse X del compomente*/
Component.prototype.getX = function() {
	return this.x;
};

/*Restitusce la posizione nell'asse Y del compomente*/
Component.prototype.getY = function() {
	return this.y;
};

/*Restitusce il vettore degli input connessi al componente*/
Component.getVett = function(code){
	for(var i=0;i<componentVett.length;i++){
		if(componentVett[i].Code == code){return componentVett[i].InputList;}
	}
};

/*Cerca un elemento nel vettore dei Componenti*/
Component.cercaElem = function(){
		for(var i=0;i<componentVett.length;i++){
			if(componentVett[i].ID){alert("componentVett[" + i + "]:" + componentVett[i].Code);}
			else{alert("componentVett[" + i + "]:" + componentVett[i].Code);}
			
		}
};

/*Aggiorna i dati di un componente*/
Component.modifica = function(code,ID,URI,NAME,QUERY,inputVett,X,Y){
	for(var i=0;i<componentVett.length;i++){
		if(componentVett[i].Code == code){
			if(componentVett[i].ID != null && componentVett[i].ID != ID){
				componentVett[i].ID = ID;
			}
			if(componentVett[i].URI != null && componentVett[i].URI != URI){
				componentVett[i].URI = URI;
			}
			if(componentVett[i].Name != null && componentVett[i].Name != NAME){
				componentVett[i].Name = NAME;
			}
			if(componentVett[i].Query != null && componentVett[i].Query != QUERY){
				componentVett[i].Query = QUERY;
			}
			if(componentVett[i].InputList != null){
				if(componentVett[i].InputList.length != 0){
					/*Scorre in vettore degli input di componentVett*/
					for(var j=0;j<componentVett[i].InputList.length;j++){
						componentVett[i].InputList[j].Code = inputVett[j].ConnectedComponentCode;
						componentVett[i].InputList[j].Id = inputVett[j].Id;
						componentVett[i].InputList[j].Name = inputVett[j].Name;
						componentVett[i].InputList[j].Shape = inputVett[j].Shape;
						componentVett[i].InputList[j].Color = inputVett[j].Color;						
					}
				}
			}
			if(componentVett[i].X != null && componentVett[i].X != X){
				componentVett[i].X = X;
			}
			if(componentVett[i].Y != null && componentVett[i].Y != Y){
				componentVett[i].Y = Y;
			}
		}
	}
};

Component.impostaValori = function(code,inputVett){	
	for(var i=0;i<componentVett.length;i++){
		if(componentVett[i].Code == code){
			for(var j=0;j<inputVett.length;j++){
				if(inputVett[j].ConnectedComponentCode == code){
						componentVett[i].ID = inputVett[j].Id;
						componentVett[i].Name = inputVett[j].Name;
				}
			}
		}
	}
};

/*Elimina un componente dal vettore dei Componenti*/
Component.elimina = function(componentVett,code){
	for(var i=0;i<componentVett.length;i++){
		if(componentVett[i].Code == code){
			/*Cancella codice*/
			Code.cancellaCodice(code,false);
			/*Cancella elemento*/
			componentVett.splice(i,1);
			//alert("Component removed");
		}
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
