/*Cliccando su uno dei componenti nell'area helper compare la descrizone del componente cliccato, in questo script viene gestito tale evento.*/
var GraphHelp =
{
	init: function(){
		var img = document.getElementsByTagName("img");
		for(i=0;i<img.length;i++){
			var titolo = img[i].getAttribute("title");
			if(titolo && titolo.length > 0){
				Core.addEventListener(img[i],"click", GraphHelp.showTipListener);
			}
		}
	},
	
	showTip: function(img){
		var p = document.getElementById("paragrafo");
		
		GraphHelp.hideTip(p);

		if(img.title == "input graph"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Input graph"));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Input Graph puo' essere collegato ad uno o piu' componenti come uno dei loro ingressi."));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un ID, un Nome e un URI."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#input");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Input Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
		
		if(img.title == "output graph"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Output graph"));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Output Graph accetta in ingresso uno qualsiasi degli altri componenti"));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un Nome e un URI."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#output");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Output Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
		
		if(img.title == "union graph"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Union graph"));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Union Graph consente di collegare tra loro due o piu' grafici RDF."));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un ID e un Nome."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#union");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Union Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
		
		if(img.title == "construct graph"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Construct graph"));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Construct Graph sono costruiti tramite una query SPARQL CONSTRUCT su un set di dati."));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un ID e un Nome e scrivere la query SPARQL da eseguire."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#construct");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Construct Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
		
		if(img.title == "updatable graph"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Updatable graph "));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Updatable Graph e' un operatore speciale che definisce una porzione dello stato dell'applicazione."));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un ID, un Nome e scrivere la query SPARQL da eseguire."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#updatable");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Updatable Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
		
		if(img.title == "new dataset"){
			var h3 = document.createElement("h3");
			h3.appendChild(document.createTextNode("Dataset graph"));
			p.appendChild(h3);
			
			var par = document.createElement("p");
			par.setAttribute("id","paragrafo");
			par.appendChild(document.createTextNode("Dataset Graph rappresenta un file RDF."));
			par.appendChild(document.createTextNode(" Per funzionare correttamente occorre impostargli un URI e un Nome."));
			p.appendChild(par);
			
			var title = document.createElement("h4");
			title.appendChild(document.createTextNode("Per saperne di piu': "));
			var link = document.createElement("a");
			link.setAttribute("href","GuidaD'uso.html#dataset");
			link.setAttribute("target","_new");
			link.appendChild(document.createTextNode("Dataset Graph"));
			title.appendChild(link);
			p.appendChild(title);
		}
	},
	
	hideTip: function(par){
		var figli = par.childNodes;
		if(figli.length == 0){return;}
		else{
			while(figli.length != 0){
				par.removeChild(figli[figli.length - 1]);
			}
		}
	},
	
	showTipListener: function(event){
		GraphHelp.showTip(this);
		Core.preventDefault(event);
	},
};

Core.start(GraphHelp);
