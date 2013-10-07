/*Gestisce il resize orizzontale dell'area editor.*/
var actionListenerResizeY = 
{ 
	init:function(){
		var resize = Core.getElementsByClass("orizontalresize");
		for(var i=0; i<resize.length; i++){
			Core.addEventListener(resize[i],"mouseover",actionListenerResizeY.actionResizeY);
			Core.addEventListener(resize[i],"mouseout",actionListenerResizeY.actionNormalY);
			Core.addEventListener(resize[i],"click",actionListenerResizeY.actionClickY);
		}
	},
	
	clickY: function(editor,help,codice,tool,resize){
		for(var j=0;j<editor.length;j++){
			if(Core.hasClass(editor[j],"expandeditorY")){
				Core.removeClass(resize,"collapsedresizeY");
				Core.removeClass(editor[0],"expandeditorY");
				Core.removeClass(help[0],"collapsedY");
				Core.removeClass(codice[0],"collapsedY");
				Core.removeClass(tool[0],"expandbarraY");
			}
			else{
				Core.addClass(resize,"collapsedresizeY");
				Core.addClass(editor[0],"expandeditorY");
				Core.addClass(help[0],"collapsedY");
				Core.addClass(codice[0],"collapsedY");
				Core.addClass(tool[0],"expandbarraY");
			}
		}//Chiude for j
	},
	
	normalY: function(resize){
		if(resize.className == "orizontalanimationresize"){
			var pulsante = document.getElementById("orizontalbotton");
			pulsante.style.backgroundColor="#333333";
			pulsante.style.borderColor="#333333";
			Core.removeClass(resize,"orizontalanimationresize");
			Core.addClass(resize,"orizontalresize");
		}
	},
	
	animationY: function(resize){
		if(resize.className == "orizontalresize"){
			var pulsante = document.getElementById("orizontalbotton");
			pulsante.style.backgroundColor="#FFFF00";
			pulsante.style.borderColor="#FFFF00";
			Core.removeClass(resize,"orizontalresize");
			Core.addClass(resize,"orizontalanimationresize");
		}
	},
	
	actionClickY: function(event){
		var editor = Core.getElementsByClass("areaeditor");
		var help = Core.getElementsByClass("areahelper");
		var codice = Core.getElementsByClass("sourcecode");
		var tool = Core.getElementsByClass("barratools");
		actionListenerResizeY.clickY(editor,help,codice,tool,this);
		Core.preventDefault(event);
	},
	
	actionNormalY: function(event){
		actionListenerResizeY.normalY(this);
		Core.preventDefault(event);
	},
	
	actionResizeY: function(event){
		actionListenerResizeY.animationY(this);
		Core.preventDefault(event);
	},
};

Core.start(actionListenerResizeY);