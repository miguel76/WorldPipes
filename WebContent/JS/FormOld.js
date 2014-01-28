/*In questo script si realizzano i form per permettere all'utente di inserire le propriet� di ogni componente.*/
var Form = {};

/*Crea il form corrispondente al componente passato in input*/
Form.createForm = function(parent,cnt){

	var connections = jsPlumb.getConnections(parent);
	
	form = document.createElement("form");
	form.name = "Propriet�";
	form.setAttribute("method","POST");
//	form.setAttribute("action","WorldPipesNew.html");
			
	var fieldset = document.createElement("fieldset");
	fieldset.setAttribute("id","form");
	
	fieldset.innerHTML += "<input type='hidden' name='code' value='" + cnt + "'>"
	
	if(parent.title == "Output"){
		fieldset.innerHTML += "<label id='label'> URI</br> <input id='input' name='URI' type='text' size = '35' value='"+ Component.getURI(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) +"'></br></br> </label>";
	}
			
	if(parent.title == "Dataset"){
		fieldset.innerHTML += "<label id='label'> URI</br> <input id='input' name='URI' type='text' size = '35' value='"+ Component.getURI(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) +"'></br></br> </label>";
	}
			
	if(parent.title == "Input"){
		fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> URI</br> <input id='input' name='URI' type='text' size = '35' value='"+ Component.getURI(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) +"'></br></br> </label>";
	}
	
	if(parent.title == "Union"){
		fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) + "'></br> </label>";
	}
	
	if(parent.title == "Construct"){
		if(!connectionConstr){
			fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Query</br> <textarea name='Query' rows='10' cols='30' id='input'>" + Component.getQuery(cnt) + "</textarea></br></br> </label>";
		}
		else{
			fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Query</br> <textarea name='Query' rows='10' cols='30' id='input'>" + Component.getQuery(cnt) + "</textarea></br></br> </label>";
			fieldset.innerHTML += "<label id='label'><b>INPUT TABLE</b></label>";
			var table = document.createElement("table");
			table.setAttribute("id","tableInput");
				var thead = document.createElement("thead");
					var tr = document.createElement("tr");
					var th = document.createElement("th");
					th.setAttribute("id","label");
					th.appendChild(document.createTextNode("NAME"));
					tr.appendChild(th);
					var th = document.createElement("th");
					th.setAttribute("id","label");
					th.appendChild(document.createTextNode("TYPE"));
					tr.appendChild(th);
					thead.appendChild(tr);
				var tbody = document.createElement("tbody");
					for(i=0;i<connections.length;i++){
						var parameter = connections[i].getParameters();
						if(cnt != parameter.codeSource && cnt == parameter.codeTarget){
							var source = Component.getName(parameter.codeSource);
							Component.addInput(parameter.codeTarget,parameter.codeSource,source,"From/FromNamed");
							var tr = document.createElement("tr");
								var td = document.createElement("td");
									td.setAttribute("id","inputName");
									td.appendChild(document.createTextNode(source));
							tr.appendChild(td);
							var td = document.createElement("td");
								var select = document.createElement("select");
								select.setAttribute("id","select");
								select.name = "inputType";
									var option2 = document.createElement("option");
									option2.appendChild(document.createTextNode("From"));
									var option3 = document.createElement("option");
									option3.appendChild(document.createTextNode("From Named"));
									var option4 = document.createElement("option");
									option4.appendChild(document.createTextNode("From/FromNamed"));
								
									var options = Component.getInputType(cnt,parameter.codeSource);
									if(options == "From"){option2.setAttribute("selected","selected");}
									if(options == "From Named"){option3.setAttribute("selected","selected");}
									if(options == "From/FromNamed"){option4.setAttribute("selected","selected");}
								
								select.appendChild(option2);
								select.appendChild(option3);
								select.appendChild(option4);
							td.appendChild(select);
							tr.appendChild(td);
							tbody.appendChild(tr);
						}
					}
			table.appendChild(thead);
			table.appendChild(tbody);
			fieldset.appendChild(table);
		}
	}		
	if(parent.title == "Updatable"){
		if(!connectionUpdat){
			fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='" + Component.getName(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Query</br> <textarea name='Query' rows='10' cols='30' id='input'>" + Component.getQuery(cnt) + "</textarea></br></br> </label>";
		}
		else{
			fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) + "'></br> </label>";
			fieldset.innerHTML += "<label id='label'> Query</br> <textarea name='Query' rows='10' cols='30' id='input'>" + Component.getQuery(cnt) + "</textarea></br></br> </label>";
			fieldset.innerHTML += "<label id='label'><b>INPUT TABLE</b></label>";
			var table = document.createElement("table");
			table.setAttribute("id","tableInput");
				var thead = document.createElement("thead");
					var tr = document.createElement("tr");
					var th = document.createElement("th");
					th.setAttribute("id","label");
					th.appendChild(document.createTextNode("NAME"));
					tr.appendChild(th);
					var th = document.createElement("th");
					th.setAttribute("id","label");
					th.appendChild(document.createTextNode("TYPE"));
					tr.appendChild(th);
					thead.appendChild(tr);
				var tbody = document.createElement("tbody");
					for(i=0;i<connections.length;i++){
						var parameter = connections[i].getParameters();
						if(cnt != parameter.codeSource && cnt == parameter.codeTarget){
							var source = Component.getName(parameter.codeSource);
							Component.addInput(parameter.codeTarget,parameter.codeSource,source,"From/FromNamed");
							var tr = document.createElement("tr");
								var td = document.createElement("td");
									td.setAttribute("id","inputName");
									td.appendChild(document.createTextNode(source));
							tr.appendChild(td);
							var td = document.createElement("td");
								var select = document.createElement("select");
								select.setAttribute("id","select");
								select.name = "inputType";
									var option2 = document.createElement("option");
									option2.appendChild(document.createTextNode("From"));
									var option3 = document.createElement("option");
									option3.appendChild(document.createTextNode("From Named"));
									var option4 = document.createElement("option");
									option4.appendChild(document.createTextNode("From/FromNamed"));
									
									var options = Component.getInputType(cnt,parameter.codeSource);
									if(options == "From"){option2.setAttribute("selected","selected");}
									if(options == "From Named"){option3.setAttribute("selected","selected");}
									if(options == "From/FromNamed"){option4.setAttribute("selected","selected");}
									
								select.appendChild(option2);
								select.appendChild(option3);
								select.appendChild(option4);
							td.appendChild(select);
							tr.appendChild(td);
							tbody.appendChild(tr);
						}
					}
			table.appendChild(thead);
			table.appendChild(tbody);
			fieldset.appendChild(table);
		}
	}
	if(parent.title == "Pipeline"){
		fieldset.innerHTML += "<label id='label'> ID</br> <input id='input' name='ID' type='text' size = '35' value='" + Component.getID(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'> Name</br> <input id='input' name='Name' type='text' size = '35' value='"+ Component.getName(cnt) + "'></br> </label>";
		fieldset.innerHTML += "<label id='label'><b>Input table</b></label></br>";
		fieldset.innerHTML += "<table id='tableInput'><thead><tr><th id='label'>ID</th> <th id='label'>Type</th></tr></thead>";
		fieldset.innerHTML += "<tbody>";			
		fieldset.innerHTML += "</tbody></table></br></br>";
	}
	fieldset.innerHTML += "<button type='submit' name='submit'>Save</button> <button type='reset' name='reset'>Cancel</button>";
	form.appendChild(fieldset);
	
	/*Gestione evento submit*/
	Core.addEventListener(form,"submit",function(){
		
		/*** Occorre salvare i dati inseriti nel form per poterli poi inviare al server ***/
		var inputVett = Component.getVettType(cnt);
		var x = parent.offsetLeft;
		var y = parent.offsetTop;
		
		if(inputVett != null && inputVett.length != 0){
			Component.modifica(cnt,Form.getID(),Form.getURI(),Form.getName(),Form.getQuery(),Form.getType(inputVett),x,y);
		}
		else{Component.modifica(cnt,(Form.getID() != null) ? Form.getID() : Form.getURI(),Form.getURI(),Form.getName(),Form.getQuery(),null,x,y);}
		
		Code.modificaCodice(cnt);
		
		var sourcecode = Core.getElementsByClass("codeclass")[0];
		Code.estraiTesto(sourcecode,null);
		
		var label = Component.scriviNome(parent,cnt);
		var figli = parent.childNodes;
		parent.replaceChild(label,figli[1]);
		
		var div = document.getElementsByTagName("body")[0].lastChild;
		var table = div.previousSibling;
		document.getElementsByTagName("body")[0].removeChild(table);
		document.getElementsByTagName("body")[0].removeChild(div);
		
		Core.preventDefault(event);
		
	});

	/*Gestione evento reset*/
	Core.addEventListener(form,"reset",function(){
		var div = document.getElementsByTagName("body")[0].lastChild;
		var form = div.previousSibling;
		document.getElementsByTagName("body")[0].removeChild(form);
		document.getElementsByTagName("body")[0].removeChild(div);
		
		Core.preventDefault(event);
	});
	
	return form;
};

/*Restituisce il codice del form associato a quel componente*/
Form.getCode = function(){
	for(var i=0; i<form.length;i++){
		if(form[i].name == "code"){ return form[i].value; }
	}
};

/*Restituisce l'ID inserito in input nel form*/
Form.getID = function(){
	for(var i=0; i<form.length;i++){
		if(form[i].name == "ID"){ return form[i].value; }
	}
};

/*Restituisce l'URI inserito in input nel form*/
Form.getURI = function(){
	for(var i=0; i<form.length;i++){
		if(form[i].name == "URI"){ return form[i].value; }
	}
};

/*Restituisce il nome inserito in input nel form*/
Form.getName = function(){
	for(var i=0; i<form.length;i++){
		if(form[i].name == "Name"){ return form[i].value; }
	}
};

/*Restituisce la query scritta nella textarea del form*/
Form.getQuery = function(){
	for(var i=0; i<form.length;i++){
		if(form[i].name == "Query"){ return form[i].value; }
	}
};

/*Restitusce il type degli input connessi al componente*/
Form.getType = function(inputVett){

	var selects = document.getElementsByTagName("select");
	
	for(var i=0; i<inputVett.length;i++){
			inputVett[i].Type = selects[i].value;
	}
	
	return inputVett;
};

/*Salva in un array tutti i dati contenuti nel form*/
Form.getDatiForm = function(form){
	var formElements = [];
	var inputs = form.getElementById("input");
	for(var i=0;i<inputs.length;i++){
		var inputType = inputs[i].getAttribute("type");
		if(inputType == null || inputType == "text"){
			formElements[formElements.length] = inputs[i];
		}
	}
		
	var textareas = form.getElementsByTagName("textarea");
	for(var i=0; i<textareas.length;i++){
		formElements[formElements.length] = textareas[i];
	}
		
	var selects = form.getElementsByTagName("select");
	for(var i=0; i<selects.length;i++){
		formElements[formElements.length] = selects[i];
	}
	
	return formElements;
};
