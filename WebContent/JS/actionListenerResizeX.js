/*Gestisce il resize verticale dell'area editor. */
var actionListenerResize = 
{ 
	init:function(){
		var vresize = Core.getElementsByClass("verticalresize");
		for(var i=0;i<vresize.length;i++){
			Core.addEventListener(vresize[i],"mouseover",actionListenerResize.actionResize);
			Core.addEventListener(vresize[i],"mouseout",actionListenerResize.actionNormal);
			Core.addEventListener(vresize[i],"click",actionListenerResize.actionClick);
		}
	},
	
	normal: function(nor){
		if(nor.className == "verticalanimationresize"){
			var pulsante = document.getElementById("verticalbotton");
			pulsante.style.backgroundColor="#333333";
			pulsante.style.borderColor="#333333";
			Core.removeClass(nor,"verticalanimationresize");
			Core.addClass(nor,"verticalresize");
		}
	},
	
	animation: function(res){
		if(res.className == "verticalresize"){
			var pulsante = document.getElementById("verticalbotton");
			pulsante.style.backgroundColor="#FFFF00";
			pulsante.style.borderColor="#FFFF00";
			Core.removeClass(res,"verticalresize");
			Core.addClass(res,"verticalanimationresize");
		}
	},
	
	click: function(barratools,editor,help,codice,resize){
		for(var j=0;j<barratools.length;j++){
			if(Core.hasClass(barratools[j],"collapsedX")){
				Core.removeClass(resize,"collapsedresizeX");
				Core.removeClass(barratools[j],"collapsedX");
				Core.removeClass(editor[0],"expandeditorX");
				Core.removeClass(help[0],"collapsedX");
				Core.removeClass(codice[0],"expandeditorX");
			}
			else{
				Core.addClass(barratools[j],"collapsedX");
				Core.addClass(resize,"collapsedresizeX");
				Core.addClass(editor[0],"expandeditorX");
				Core.addClass(help[0],"collapsedX");
				Core.addClass(codice[0],"expandeditorX");
			}
		}//Chiude for j
	},
	
	actionResize: function(event){
		actionListenerResize.animation(this);
		Core.preventDefault(event);
	},
	
	actionNormal: function(event){
		actionListenerResize.normal(this);
		Core.preventDefault(event);
	},
	
	actionClick: function(event){
		var barratools = Core.getElementsByClass("barratools");
		var editor = Core.getElementsByClass("areaeditor");
		var help = Core.getElementsByClass("areahelper");
		var codice = Core.getElementsByClass("sourcecode");
		actionListenerResize.click(barratools,editor,help,codice,this);
		Core.preventDefault(event);
	},
};

Core.start(actionListenerResize);