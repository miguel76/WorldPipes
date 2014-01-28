/*In questo script viene realizzato il codice RDF della pipeline creata dall'utente.
Inoltre si gestisce anche l'invio del codice stesso al server.*/

var Code = {};

var codein = document.createElement("p");
codein.setAttribute("id","codein");
	
var codeout = document.createElement("p");
codeout.setAttribute("id","codeout");

var codeunion = document.createElement("p");
codeunion.setAttribute("id","codeunion");

var codeconstr = document.createElement("p");
codeconstr.setAttribute("id","codeconstr");

var codeupdat = document.createElement("p");
codeupdat.setAttribute("id","codeupdat");

var codedataset = document.createElement("p");
codedataset.setAttribute("id","codedataset");

var codepipe = document.createElement("p");
codepipe.setAttribute("id","codepipe");

var dsURI = "http://localhost:8080/WorldPipes/ds";
var URIGraphStore = dsURI + "/data?graph=";
var URIUpdate = dsURI + "/update";
var GraphURIPrefix = "http://www.swows.org/Default/";
var dataflowURI = GraphURIPrefix + "dataflow";
var pipelineURI = GraphURIPrefix + "pipeline";
var layoutURI = GraphURIPrefix + "pipeline/layout";
var pubDataflowURI = GraphURIPrefix + "dataflow/public";

/*Scrive il codice corrispondente ad ogni componente inserito nell'area edito non ancora connesso*/
Code.scriviCodice = function(code){
	var component = Component.getComponent(code);
	var p = Core.getElementsByClass("codeclass")[0];
	var connections = jsPlumb.getConnections();
	
	if(component == "inputdefault"){
		var indef = document.createElement("p");
		indef.setAttribute("id",code);
		
		indef.innerHTML += '<#defaultInput> a df:SelectGraph ;</br>';
		indef.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		indef.innerHTML += '<dd>df:input swi:InputDataset .</dd>';
		
		codein.appendChild(indef);
		p.appendChild(codein);	
	}
	
	if(component == "input"){			
		var pin = document.createElement("p");
		pin.setAttribute("id",code);
	
		pin.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:SelectGraph ;";
		pin.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pin.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pin.innerHTML += '<dd>df:id &lt;' + Component.getURI(code) + '&gt; ;</dd>';
		pin.innerHTML += '<dd>df:input swi:InputDataset .</dd>';
		
		codein.appendChild(pin);
		p.appendChild(codein);
	}
	
	if(component == "outputdefault"){
		
		var outdef = document.createElement("p");
		outdef.setAttribute("id",code);
		
		outdef.innerHTML += "swi:OutputDataset a df:InlineDataset ;";
		outdef.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] .</dd>';
		
		codeout.appendChild(outdef);
		p.appendChild(codeout);	
	}
	
	if(component == "output"){
		
		var pout = document.createElement("p");
		pout.setAttribute("id",code);
		
		pout.innerHTML += "swi:OutputDataset a df:InlineDataset ;";
		pout.innerHTML += "<dd>df:namedInput[ a df:NamedGraph ;</dd>";
		pout.innerHTML += "<dd>df:id &lt;" + Component.getURI(code) + "&gt; ;</dd>";
		pout.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pout.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ] .</dd>';			
		
		codeout.appendChild(pout);
		p.appendChild(codeout);	
		
	}	

	if(component == "dataset"){
		var pdataset = document.createElement("p");
		pdataset.setAttribute("id",code);
		
		pdataset.innerHTML += '&lt;#' + encodeURIComponent(Component.getURI(code)) + '&gt; a df:IncludedGraph ;</br>';
		pdataset.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pdataset.innerHTML += '<dd>df:url &lt;' + Component.getURI(code) + '&gt; ;</dd>';
		pdataset.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" .</dd>';	
		
		
		codedataset.appendChild(pdataset);
		p.appendChild(codedataset);
	}
	
	if(component == "union"){
		var punion = document.createElement("p");
		punion.setAttribute("id",code);
		
		punion.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:UnionGraph ; </br>";
		punion.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		punion.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] .</dd>';
		
		codeunion.appendChild(punion);
		p.appendChild(codeunion);
	}
	
	if(component == "construct"){
		var pconstr = document.createElement("p");
		pconstr.setAttribute("id",code);
		
		pconstr.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:ConstructGraph ;";
		pconstr.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pconstr.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pconstr.innerHTML += "<dd>df:configTxt '''" + Component.getQuery(code) + "''' .</dd>";
				
		codeconstr.appendChild(pconstr);
		p.appendChild(codeconstr);
	}
	
	if(component == "updatable"){
		var pupdat = document.createElement("p");
		pupdat.setAttribute("id",code);
		
		pupdat.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:UpdatableGraph ;";
		pupdat.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pupdat.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pupdat.innerHTML += "<dd>df:configTxt '''" + Component.getQuery(code) + "''' .</dd>";
		
		codeupdat.appendChild(pupdat);
		p.appendChild(codeupdat);
	}
};

/*Modifica il codice del componente passato come parametro in base all'operazione su di esso effettuata*/
Code.modificaCodice = function(code){
	var component = Component.getComponent(code);
	var p = Core.getElementsByClass("codeclass")[0];

	/*Modifica del codice per i componenti connessi*/
	if(component == "union"){
		Code.cancellaCodice(code);
		
		var punion = document.createElement("p");
		punion.setAttribute("id",code);
		
		punion.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:UnionGraph ; </br>";
		punion.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';		
	
		var inputUnion = Component.getVett(code);
	
		if(inputUnion.length != 0){for(var i=0; i< inputUnion.length;i++){	punion.innerHTML += '<dd>df:input &lt;#' + encodeURIComponent(inputUnion[i].Id) + '&gt; ;</dd>';}}
		
		punion.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] .</dd>';
		codeunion.appendChild(punion);
		p.appendChild(codeunion);
		
		Code.cercaTarget(code);
	}
	
	if(component == "outputdefault"){
		Code.cancellaCodice(1);
		
		var outdef = document.createElement("p");
		outdef.setAttribute("id",1);
		
		outdef.innerHTML += "swi:OutputDataset a df:InlineDataset ;";
		
		var inputDef = Component.getVett(1);
		if(inputDef.length != 0){
			for(i=0;i<inputDef.length;i++){	outdef.innerHTML += '<dd>df:input &lt;#' + encodeURIComponent(inputDef[i].Id) + '&gt; ;</dd>';}
		}
		outdef.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(1) + '\"^^xsd:integer; df:positionY \"' + Component.getY(1) + '\"^^xsd:integer ] .</dd>';
		
		codeout.appendChild(outdef);
		p.appendChild(codeout);
		
		Code.cercaTarget(code);
	}
	
	if(component == "output"){
		Code.cancellaCodice(code);
	
		var pout = document.createElement("p");
		pout.setAttribute("id",code);
		
		pout.innerHTML += "swi:OutputDataset a df:InlineDataset ;";
		pout.innerHTML += "<dd>df:namedInput[ a df:NamedGraph ;</dd>";
		
		var inputOut = Component.getVett(code);
		if(inputOut.length != 0){
			for(var i=0;i<inputOut.length;i++){pout.innerHTML += '<dd>df:input &lt;#' + encodeURIComponent(inputOut[i].Id) +'&gt; ;</dd>';}
		}
		pout.innerHTML += "<dd>df:id &lt;" + Component.getURI(code) + "&gt; ;</dd>";
		pout.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pout.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ] .</dd>';
				
		codeout.appendChild(pout);	
		p.appendChild(codeout);
		
		Code.cercaTarget(code);
	}
	
	if(component == "construct"){
		Code.cancellaCodice(code);
		
		var pconstr = document.createElement("p");
		pconstr.setAttribute("id",code);
		
		pconstr.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:ConstructGraph ;";
		pconstr.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pconstr.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		
		var inputConstr = Component.getVett(code);
		var id = "";
		if(inputConstr.length != 0){
			pconstr.innerHTML += '<dd>df:input [ a df:InlineDataset ;</dd>';
			for(var i=0;i<inputConstr.length;i++){
				if(Component.getID(inputConstr[i].ConnectedComponentCode) != null){id = Component.getID(inputConstr[i].ConnectedComponentCode);}
				else{id = Component.getURI(inputConstr[i].ConnectedComponentCode);}
				if(id == null){id = "";}
				pconstr.innerHTML += '<dd>df:namedInput [a df:NamedGraph ; df:name \"' + inputConstr[i].Name + '\" ; df:input &lt;#' + encodeURIComponent(id) + '&gt; ; df:id &lt;#' + encodeURIComponent(inputConstr[i].Id) + '&gt; ];</dd>';
			}
			pconstr.innerHTML += "<dd>];</dd>";
		}	
	
		pconstr.innerHTML += "<dd></dd>";
		pconstr.lastChild.textContent = "df:configTxt '''" + Component.getQuery(code) + "''' .";
		codeconstr.appendChild(pconstr);
		p.appendChild(codeconstr);
		
		Code.cercaTarget(code);
	}
	
	if(component == "updatable"){
		Code.cancellaCodice(code);
		
		var pupdat = document.createElement("p");
		pupdat.setAttribute("id",code);
		
		pupdat.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:UpdatableGraph ;";
		pupdat.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pupdat.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		
		var inputUpdat = Component.getVett(code);
		var id;
		if(inputUpdat.length != 0){
			pupdat.innerHTML += '<dd>df:input [ a df:InlineDataset ;</dd>';
			for(var i=0;i<inputUpdat.length;i++){
				if(Component.getID(inputUpdat[i].ConnectedComponentCode) != null){id = Component.getID(inputUpdat[i].ConnectedComponentCode);}
				else{id = Component.getURI(inputUpdat[i].ConnectedComponentCode);}
				if(id == null){id = "";}
				pupdat.innerHTML += '<dd>df:namedInput [a df:NamedGraph ; df:name \"' + inputUpdat[i].Name + '\" ; df:input &lt;#' + encodeURIComponent(id) + '&gt; ; df:id &lt;#' + encodeURIComponent(inputUpdat[i].Id) + '&gt; ];</dd>';
			}
			pupdat.innerHTML += "<dd>];</dd>";
		}
		pupdat.innerHTML += "<dd></dd>";
		pupdat.lastChild.textContent = "df:configTxt '''" + Component.getQuery(code) + "''' .";
		
		codeupdat.appendChild(pupdat);
		p.appendChild(codeupdat);
		
		Code.cercaTarget(code);
	}
	
	/*Modifica del codice dei componenti Source*/
	if(component == "dataset"){
		Code.cancellaCodice(code);
		
		var pdataset = document.createElement("p");
		pdataset.setAttribute("id",code);
		
		pdataset.innerHTML += '&lt;#' + encodeURIComponent(Component.getURI(code)) + '&gt; a df:IncludedGraph ;</br>';
		pdataset.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pdataset.innerHTML += '<dd>df:url &lt;' + Component.getURI(code) + '&gt; ;</dd>';
		pdataset.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" .</dd>';	
		
		
		codedataset.appendChild(pdataset);
		p.appendChild(codedataset);
		
		Code.cercaTarget(code);
	}
	if(component == "inputdefault"){
		Code.cancellaCodice(code);
		
		var indef = document.createElement("p");
		indef.setAttribute("id",code);
		
		indef.innerHTML += '<#defaultInput> a df:SelectGraph ;</br>';
		indef.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		indef.innerHTML += '<dd>df:input swi:InputDataset .</dd>';
		
		codein.appendChild(indef);
		p.appendChild(codein);
		
		Code.cercaTarget(code);	
	}
	if(component == "input"){
		Code.cancellaCodice(code);
		
		var pin = document.createElement("p");
		pin.setAttribute("id",code);
	
		pin.innerHTML += "&lt;#" + encodeURIComponent(Component.getID(code)) + "&gt; a df:SelectGraph ;";
		pin.innerHTML += '<dd>df:name \"' + Component.getName(code) + '\" ;</dd>';
		pin.innerHTML += '<dd>df:uiData[ df:positionX \"' + Component.getX(code) + '\"^^xsd:integer; df:positionY \"' + Component.getY(code) + '\"^^xsd:integer ] ;</dd>';
		pin.innerHTML += '<dd>df:id &lt;' + Component.getURI(code) + '&gt; ;</dd>';
		pin.innerHTML += '<dd>df:input swi:InputDataset .</dd>';
		
		codein.appendChild(pin);
		p.appendChild(codein);
		
		Code.cercaTarget(code);
	}
};

/*Cancella il codice corrispondente al componente passato come parametro*/
Code.cancellaCodice = function(code){
	var elem = document.getElementsByTagName("p");
	for(var i=0;i<elem.length;i++){
		if(elem[i].id == code && elem[i].id != ""){
			var parent = elem[i].parentNode;
			parent.removeChild(elem[i]);
			return;
		}
	}
};

/*Elimina l'input disconnesso dal componente dall'array*/
Code.eliminaInput = function(inputVett,source){
	for(var i=0; i<inputVett.length; i++){
		if(inputVett[i].ConnectedComponentCode == source){inputVett.splice(i,1);}
	}
};

/*Chiama la funzione modificaCodice sul compenente il cui codice deve essere aggiornato*/
Code.modificaTarget = function(inputVett){
	for(var i=0;i<inputVett.length;i++){Code.modificaCodice(inputVett[i].ConnectedComponentCode);}
};

/*Cerco i componenti target connessi al componente*/
Code.cercaTarget = function(source){
	var connections = jsPlumb.getConnections(source);
	
	for(var i=0;i<connections.length;i++){
		var parameter = connections[i].getParameters();
		if(/*source != parameter.codeTarget &&*/ source == parameter.codeSource){
			if(Component.getComponent(parameter.codeTarget) == "construct" || Component.getComponent(parameter.codeTarget) == "updatable"){Code.modificaCodice(parameter.codeTarget);}
			else{
				InputType.aggiornaInput(Component.getVett(parameter.codeTarget),source);
				Code.modificaCodice(parameter.codeTarget);
			}
		}
	}	
};

/*Invia il codice RDF al server*/
Code.estraiTesto = function(code,name,graphURIPrefix){
	
	var dataflowURI = graphURIPrefix + "dataflow";
	var pipelineURI = graphURIPrefix + "pipeline";
	var layoutURI = graphURIPrefix + "pipeline/layout";

	var textCode = code.textContent;
	
	Code.sendCodeDataflowURI(textCode,name,dataflowURI);

	JsonToServer.savePipelineAndLayout(URIGraphStore,pipelineURI,layoutURI,componentVett);
};

Code.sendCodeDataflowURI = function(textCode,name,graphURIPrefix){

	var dataflowURI = graphURIPrefix + "dataflow";

	try{var request = new XMLHttpRequest();}
	catch(error){var request = null;}
	
	if(request == null){
		alert("ERROR! Invalid Request");
	}
	else{
		request.open("PUT",URIGraphStore + encodeURIComponent(dataflowURI), false);
		request.setRequestHeader("Content-Type","text/turtle");
		request.send(textCode);
		if(name == "Save"){
			if(request.status == 200 || request.status == 201 || request.status == 204){
				alert("Data sent");
			}
		}
		if(request.status == 400 ){alert("Parse error");}
		if(request.status == 500 ){alert("Server error");}
		if(request.status == 503 ){alert("Service not available");}
	}
};


Code.sendCodeURIUpdate = function(dataflowURI,graphURIPrefix){

	var pubDataflowURI = graphURIPrefix + "dataflow/public";

	try{var request = new XMLHttpRequest();}
	catch(error){var request = null;}
	
	if(request == null){
		alert("ERROR! Invalid Request");
	}
	else{
		request.open("POST",URIUpdate, false);
		request.setRequestHeader("Content-Type","application/sparql-update");
		request.send("COPY <" +  dataflowURI + "> TO <" +  pubDataflowURI + ">");
		if(request.status == 200 || request.status == 201 || request.status == 204){
				alert("Dataflow published");
		}
		if(request.status == 400 ){alert("Parse error");}
		if(request.status == 500 ){alert("Server error");}
		if(request.status == 503 ){alert("Service not available");}
	}
};
