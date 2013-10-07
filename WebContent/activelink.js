/*Rende interattivi i tab Dataset e Pipeline*/
var activelink = {
	
	init: function(){
		tabComponent = [];
		
		tabComponent[tabComponent.length] = document.getElementById("dataset");
		tabComponent[tabComponent.length] = document.getElementById("pipes");
		
		var tabs = document.getElementById("tabs");
		var folds = tabs.childNodes;
		for(var j=0; j < folds.length; j++){
			if(folds[j].title == "tabs"){
				alink = folds[j].getElementsByTagName("li");
				for(var i=0;i<alink.length;i++){
					var link = alink[i].getElementsByTagName("a");	
					Core.addEventListener(link[0],"click",activelink.clickListener);	

				}
			}
		}
	},
	
	clickListener: function(event){
		if(this.name == "dataset" && alink[0].className != "activelink"){
			Core.addClass(alink[0],"activelink");
			Core.removeClass(tabComponent[0],"hide");
			Core.addClass(tabComponent[1],"hide");
			Core.removeClass(alink[1],"activelink");
			
		}
		if(this.name == "pipes" && alink[1].className != "activelink"){
			Core.addClass(alink[1],"activelink");
			Core.removeClass(tabComponent[1],"hide");
			Core.addClass(tabComponent[0],"hide");
			Core.removeClass(alink[0],"activelink");
		}
	},
};
Core.start(activelink);