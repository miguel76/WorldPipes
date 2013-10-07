var InputType = {};

var InputTypeClass = function(CODE,ID,URI,NAME,SHAPE,COLOR,TYPE){
	this.ConnectedComponentCode = CODE;
	this.Id = ID;
	this.URI = URI;
	this.Name = NAME;
	this.Shape = SHAPE;
	this.Color = COLOR;
	this.Type = TYPE;
};

/*Aggingo input al componente target Construct o Updatable*/
InputType.addInput = function(inputVett,name,id,shape,color){
	var i=0;
	while(i<inputVett.length){
		if(inputVett[i].Name != name && inputVett[i].Id != id){i++;}
		else{return inputVett;}
	}
	//alert("name - " + name + " id - " + id + " shape - " + shape + " color - " + color);
	inputVett[inputVett.length] = new InputTypeClass(null,id,null,name,shape,color,"FROM NAMED");
};

/*Inizializza inputVett[i].Code*/
InputType.addSource = function(label,source,inputVett){
	for(var i=0;i<inputVett.length;i++){
		if(inputVett[i].Name == label){
			inputVett[i].ConnectedComponentCode = source; 
			if(Component.getURI(source) != null){inputVett[i].Uri = Component.getURI(source);}
			else{inputVett[i].Uri = null;}
		}
	}
};

/*Aggingo input ai componenti target Union, Output e OutputDefault*/
InputType.inizializzaInput = function(inputVett, source){
	var id = (Component.getID(source) != null ) ? Component.getID(source) : Component.getURI(source) ;
	var name = Component.getName(source);
	if(Component.getURI(source) != null){var uri = Component.getURI(source);}
	else{var uri = null;}
	var i=0;
	while(i<inputVett.length){
			if(inputVett[i].ConnectedComponentCode != source){i++;}
			else{return inputVett;}
	}
	//alert("name - " + name + " id - " + id + " uri - " + uri);
	inputVett[inputVett.length] = new InputTypeClass(source,id,uri,name,null,null,"FROM NAMED");
};


/*Inizializza vettore di input*/
InputType.fillVett = function(table,inputVett,div){
	var cell = table.getElementsByTagName("td");
	var i = 0;
	for(var r=1;r<=table.rows.length-1;r++){
		for(var c=0;c<table.rows[r].cells.length;c++){
			if(table.rows[r].cells[c].firstChild.value == ""){return alert("The fields can not be blank");}
			if(c == 0){var name = table.rows[r].cells[c].firstChild.value;}
			if(c == 1){var id = table.rows[r].cells[c].firstChild.value;}
			if(c == 2){var shape = table.rows[r].cells[c].firstChild.value;}
			if(c == 3){var color = table.rows[r].cells[c].firstChild.value;}
			if(c == 4){
				if(r <= inputVett.length ){
					if(!Endpoint.verificaConnessione(inputVett[i],div)){
						inputVett[i].Name = name;
						inputVett[i].Id = id;
						inputVett[i].Shape = shape;
						inputVett[i].Color = color;
						i++;
					}
					else{i++;}
				}
				else{InputType.addInput(inputVett,name,id,shape,color);}
			}
		}
	}
};

/*Elimina l'input cancellato dalla tabella componente dall'array*/
InputType.eliminaInputTable = function(inputVett,name,id){
	for(var i=0; i<inputVett.length; i++){
		if(inputVett[i].Name == name && inputVett[i].Id == id){inputVett.splice(i,1);}
	}
};

/*Elimina l'input disconnesso dal componente dall'array*/
InputType.eliminaInput = function(inputVett,source){
	for(var i=0; i<inputVett.length; i++){
		if(inputVett[i].ConnectedComponentCode == source){inputVett.splice(i,1);}
	}
};

/*Aggiorno vettore di input*/
InputType.aggiornaInput = function(inputVett,source){
	for(var i=0;i<inputVett.length;i++){
		if(inputVett[i].ConnectedComponentCode == source){
			inputVett[i].Id = Component.getID(source);
			inputVett[i].Name = Component.getName(source);
			inputVett[i].Uri = Component.getURI(source);
		}
	}
};

/*Elimina il codice del componente sorgente quando si recide un collegamento*/
InputType.eliminaCode = function(inputVett,source){
	for(var i=0; i< inputVett.length;i++){
		if(inputVett[i].ConnectedComponentCode == source){inputVett[i].ConnectedComponentCode = null;}
	}
};
