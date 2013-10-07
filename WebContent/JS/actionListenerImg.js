/*In questo script si gestiscono gli eventi scaturiti dall'azione del mouse.
Il click del mouse sui pulsanti New, Save e Play.
Il drag dei componenti.
Il drop dei componeti nell'area editor ossia la creazione del componente stesso.*/
var actionListenerImg =
{
	init:function(){
		cnt = 1;
		dragDrop = false;
		cntIn = 1; cntOut = 1; cntUnion = 1; cntConstr = 1; cntUpdat = 1; cntDataset = 1; cntPipes = 1;
		cntInDef = 0; cntOutDef = 1;
		
		var img = document.getElementsByTagName("img");
		var dropeditor = Core.getElementsByClass("areaeditor");
		
		actionListenerImg.creaInDefault(dropeditor[0]);
		actionListenerImg.creaOutDefault(dropeditor[0]);
		
		for(i=0;i<img.length;i++){
			//Core.addEventListener(img[i],"mouseover",actionListenerImg.MouseOver);
			//Core.addEventListener(img[i],"mouseout",actionListenerImg.MouseOut);
			Core.addEventListener(img[i],"click",actionListenerImg.MouseClick);
			Core.addEventListener(img[i],"dragstart",actionListenerImg.DragStart);
			
			Core.addEventListener(dropeditor[0],"dragenter",actionListenerImg.DragEnter);
			Core.addEventListener(dropeditor[0],"dragleave",actionListenerImg.DragLeave);
			Core.addEventListener(dropeditor[0],"dragover",actionListenerImg.DragOver);
			Core.addEventListener(dropeditor[0],"drop",actionListenerImg.DropStart);
		}
	},
	
	/*Crea l'input di default*/
	creaInDefault: function(editor){
	
		/*** Input graph default ***/
		var indef = document.createElement("div");
		indef.setAttribute("class","activegraph");
		indef.title = "Default Input";
			
		var img = document.createElement("img");
		img.setAttribute("id","activeimg");
		img.src = "IMG/Input.gif";
		indef.appendChild(img);
			
		var label = Component.scriviNome(indef,cntInDef,cntInDef);
		indef.appendChild(label);
		
		var x = indef.style.left = 20;// + "px";
		var y = indef.style.top = 20;// + "px";
		
		editor.appendChild(indef);
		
		var name = indef.title;
		componentVett[componentVett.length] = new ComponentClass(cntInDef,"inputdefault","defaultInput",null,name,null,null,x,y);		
		Endpoint.createEndpoint(indef,cntInDef,null);
		Code.scriviCodice(cntInDef);
	},
	
	/*Crea l'output di default*/
	creaOutDefault: function(editor){
	
		/*** Output graph default ***/
		var outdef = document.createElement("div");
		outdef.setAttribute("class","activegraph");
		outdef.title = "Default Output";
			
		var img = document.createElement("img");
		img.setAttribute("id","activeimg");
		img.src = "IMG/Output.gif";
		outdef.appendChild(img);
			
		var label = Component.scriviNome(outdef,cntOutDef,cntOutDef);
		outdef.appendChild(label);
		
		var x = outdef.style.left = 350;// + "px";
		var y = outdef.style.top = 350;// + "px";
		
		editor.appendChild(outdef);
		
		var inputOutDef = [];
		var name = outdef.title;
		componentVett[componentVett.length] = new ComponentClass(cntOutDef,"outputdefault","","",name,null,inputOutDef,x,y);
		Endpoint.createEndpoint(outdef,cntOutDef,null);
		Code.scriviCodice(cntOutDef);
	},
	
	/*Gestisce l'evento click*/
	MouseListenerClick: function(pulsante){
		if(pulsante.title == "New"){
			if(componentVett.length != 0){
				if(confirm("Sure you want to leave this page?")){location.reload();}
			}
			else{location.reload();}
		}
		if(pulsante.title == "Save"){
			var sourcecode = Core.getElementsByClass("codeclass")[0];
			Code.estraiTesto(sourcecode,pulsante.title);
		}
		if(pulsante.title == "Properties"){
			//var json = JSON.stringify(componentVett);
		}
		if(pulsante.title == "Play & Save"){
			var sourcecode = Core.getElementsByClass("codeclass")[0];
			Code.estraiTesto(sourcecode,pulsante.title);
			window.open("http://localhost:8080/swows-web/play?df=" + URIGraphStore + encodeURI(dataflowURI),"_blank");
		}
		
		if(pulsante.title == "load"){
			Component.jsonLoad();
		}
		
		if(pulsante.title == "publish"){
			Code.sendCodeURIUpdate();
		}
		
	},
	
	
	/*MouseOver: function(event){
		actionListenerImg.MouseListenerOver(this);
		Core.preventDefault(event);
	},
	MouseOut: function(event){
		actionListenerImg.MouseListenerOut(this);
		Core.preventDefault(event);
	},*/
	
	MouseClick: function(event){
		actionListenerImg.MouseListenerClick(this);
		Core.preventDefault(event);
	},
	
	/* ***************************************** Drag & drop ***************************************** */
	
	DragStart: function(event){
		event.dataTransfer.setData("image/gif",this.title);
	},
	
	DragEnter: function(event){
		//Core.addClass(this,"attivo");
		event.stopPropagation();
	},
	
	DragLeave: function(event){
		//Core.removeClass(this,"attivo");
		event.stopPropagation();
	},
	
	DragOver: function(event){
		event.stopPropagation();
		Core.preventDefault(event);
	},
	/*Gestisce l'evento drop del mouse, quando un componente viene rilasciato nell'area editor questo vine creato e inseriro nel vettore dei Componneti*/
	DropStart: function(event){
		Core.preventDefault(event); 
		//Core.removeClass(this,"attivo");
		
		var title = event.dataTransfer.getData("image/gif");
			
		if(title == "input graph"){		
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Input";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Input.gif";
			div.appendChild(img);
			
			var label = Component.scriviNome(div,code,cntIn);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formIN = Form.createForm(div,code);
				document.getElementsByTagName("body")[0].appendChild(formIN);
				document.getElementsByTagName("body")[0].appendChild(body);
			});
			
			
			Core.addEventListener(elimina,"click",function(){
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);
					Code.cancellaCodice(code);	
				}
			});
			
			var name = div.title + " " + cntIn;
			componentVett[componentVett.length] = new ComponentClass(code,"input",name,"",name,null,null,x,y);
			Endpoint.createEndpoint(div,code,null);
			Code.scriviCodice(code);
			cntIn++;
			//Component.cercaElem();
		}
		
		if(title == "output graph"){			
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Output";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Output.gif";
			div.appendChild(img);
			
			var label = Component.scriviNome(div,code,cntOut);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formOUT = Form.createForm(div,code);
				document.getElementsByTagName("body")[0].appendChild(formOUT);
				document.getElementsByTagName("body")[0].appendChild(body);
			});	
			
			Core.addEventListener(elimina,"click",function(){				
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);				
					Code.cancellaCodice(code);	
				}
			});
			
			var inputOut = [];
			var name = div.title + " " + cntOut;
			componentVett[componentVett.length] = new ComponentClass(code,"output","","",name,null,inputOut,x,y);			
			Endpoint.createEndpoint(div,code,null);
			Code.scriviCodice(code);
			cntOut++;
			//Component.cercaElem();
		}
		
		if(title == "union graph"){
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Union";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Union.gif";
			div.appendChild(img);
			
			var label = Component.scriviNome(div,code,cntUnion);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formUnion = Form.createForm(div,code);
				document.getElementsByTagName("body")[0].appendChild(formUnion);
				document.getElementsByTagName("body")[0].appendChild(body);
			});
			
			Core.addEventListener(elimina,"click",function(){				
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);
					Code.cancellaCodice(code);	
				}
			});
			
			var inputUnion = [];
			var name = div.title + " " + cntUnion;
			componentVett[componentVett.length] = new ComponentClass(code,"union",name,null,name,null,inputUnion,x,y);
			Endpoint.createEndpoint(div,code,null);
			Code.scriviCodice(code);
			cntUnion++;
			//Component.cercaElem();
		}
		
		if(title == "construct graph"){
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Construct";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Construct.gif";
			div.appendChild(img);
			
			var label = Component.scriviNome(div,code,cntConstr);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
				
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formConstr = Form.createForm(div,code);	
				document.getElementsByTagName("body")[0].appendChild(formConstr);
				document.getElementsByTagName("body")[0].appendChild(body);
			});
			
			Core.addEventListener(elimina,"click",function(){
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);
					Code.cancellaCodice(code);	
				}
			});
			
			var inputConstr = [];
			var name = div.title + " " + cntConstr;
			var query = "CONSTRUCT{?s ?p ?o}\nWHERE{?s ?p ?o}";
			componentVett[componentVett.length] = new ComponentClass(code,"construct",name,null,name,query,inputConstr,x,y);
			Endpoint.createEndpoint(div,code,null);			
			Code.scriviCodice(code);
			cntConstr++;
			//Component.cercaElem();
		}
		
		if(title == "updatable graph"){
			cnt++;
			var code = cnt;
			alert(cnt);
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Updatable";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Updatable.gif";
			div.appendChild(img);
			
			var label = Component.scriviNome(div,code,cntUpdat);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
		
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");				
				formUpdat = Form.createForm(div,code,cnt);
				document.getElementsByTagName("body")[0].appendChild(formUpdat);
				document.getElementsByTagName("body")[0].appendChild(body);	
			});
			
			Core.addEventListener(elimina,"click",function(){				
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);
					Code.cancellaCodice(code);
				}
			});
			
			var inputUpdat = [];
			var name = div.title + " " + cntUpdat;
			componentVett[componentVett.length] = new ComponentClass(code,"updatable",name,null,name,"",inputUpdat,x,y);
			Endpoint.createEndpoint(div,code,null);
			Code.scriviCodice(code);
			cntUpdat++;
			//Component.cercaElem();
		}
		
		if(title == "new dataset"){
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Dataset";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/Dataset.gif";
			div.appendChild(img);

			var label = Component.scriviNome(div,code,cntDataset);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formDataset = Form.createForm(div,code);
				document.getElementsByTagName("body")[0].appendChild(formDataset);
				document.getElementsByTagName("body")[0].appendChild(body);
			});
			
			Core.addEventListener(elimina,"click",function(){
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode)
					Component.elimina(componentVett,code);				
					Code.cancellaCodice(code);
				}
			});
				
			var name = div.title + " " + cntDataset;
			componentVett[componentVett.length] = new ComponentClass(code,"dataset","","",name,null,null,x,y);
			Endpoint.createEndpoint(div,code,null);
			Code.scriviCodice(code);
			cntDataset++;
			//Component.cercaElem();
		}
		if(title == "pipes"){
			cnt++;
			var code = cnt;
			
			var div = document.createElement("div");
			div.setAttribute("class","activegraph");
			div.setAttribute("id","comp-" + code);
			div.title = "Pipeline";
			
			var img = document.createElement("img");
			img.setAttribute("id","activeimg");
			img.src = "IMG/pipes.gif";
			div.appendChild(img);

			var label = Component.scriviNome(div,code,cntPipes);
			div.appendChild(label);
			
			var proprieta = document.createElement("img");
			proprieta.setAttribute("class","bottongraph");
			proprieta.src = "IMG/pulsanteproprieta.gif";
			proprieta.title = "property";
			div.appendChild(proprieta);
					
			var elimina = document.createElement("img");
			elimina.setAttribute("class","bottongraph");
			elimina.src = "IMG/iconaX.gif";
			elimina.title = "delete";
			div.appendChild(elimina);
			
			var x = div.style.left = event.clientX - this.offsetLeft;// + "px";
			var y = div.style.top = event.clientY - this.offsetTop;// + "px";
			
			this.appendChild(div);
			
			Core.addEventListener(proprieta,"click",function(){
				var body = document.createElement("div");
				body.setAttribute("class","body");
				formPipes = Form.createForm(div,code);
				document.getElementsByTagName("body")[0].appendChild(formPipes);
				document.getElementsByTagName("body")[0].appendChild(body);
			});
			
			Core.addEventListener(elimina,"click",function(){
				if(confirm("Are you sure you want to delete this component?")){
					temp = elimina.parentNode.parentNode;
					jsPlumb.removeAllEndpoints(elimina.parentNode);
					jsPlumb.detachAllConnections(elimina.parentNode);
					temp.removeChild(elimina.parentNode);
					Component.elimina(componentVett,code);
					Code.cancellaCodice(code);
				}
			});
				
			var name = div.title + " " + cntPipes;
			var inputPipes = [];
			componentVett[componentVett.length] = new ComponentClass(code,name,null,name,null,inputPipes);
			Endpoint.createEndpoint(div,code,null);
			cntPipes++;
			//Component.cercaElem();
		}
	},
};

Core.start(actionListenerImg);
