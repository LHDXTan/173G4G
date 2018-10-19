// JavaScript Document
function changeTab(){ //两个不同列表之间进行切换
	var gc11=document.getElementById("gc11");
	var gc22=document.getElementById("gc22");
		if(gc11.style.display=="none"){
		gc11.style.display="block";
		gc22.style.display="none";
		}
	else
	{  
		gc11.style.display="none";
		gc22.style.display="block";
		}
	}
var ddtabmenu={
	disabletablinks: false, ////Disable hyperlinks in 1st level tabs with sub contents (true or false)?
	currentpageurl: window.location.href.replace("http://"+window.location.hostname, "").replace(/^\//, ""), 
	//get current page url (minus hostname, ie: http://www.dynamicdrive.com/)

definemenu:function(tabid, dselected){
	this[tabid+"-menuitems"]=null
	this.addEvent(window, function(){ddtabmenu.init(tabid, dselected)}, "load")
},

showsubmenu:function(tabid, targetitem){
	var menuitems=this[tabid+"-menuitems"]
 for (i=0; i<menuitems.length; i++){
		menuitems[i].className=""
		if (typeof menuitems[i].hasSubContent!="undefined")
			document.getElementById(menuitems[i].getAttribute("rel")).style.display="none";
	}
	targetitem.className="current"
	if (typeof targetitem.hasSubContent!="undefined")
		document.getElementById(targetitem.getAttribute("rel")).style.display="block";
},

isSelected:function(menuurl){
	var menuurl=menuurl.replace("http://"+menuurl.hostname, "").replace(/^\//, "")
	return (ddtabmenu.currentpageurl==menuurl)
},

addEvent:function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
	var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
	if (target.addEventListener)
		target.addEventListener(tasktype, functionref, false)
	else if (target.attachEvent)
		target.attachEvent(tasktype, functionref)
},

init:function(tabid, dselected){
	var menuitems=document.getElementById(tabid).getElementsByTagName("a")
	this[tabid+"-menuitems"]=menuitems
	for (var x=0; x<menuitems.length; x++){
		if (menuitems[x].getAttribute("rel")){
			this[tabid+"-menuitems"][x].hasSubContent=true
			if (ddtabmenu.disabletablinks)
				menuitems[x].onclick=function(){return false}
		}
		else //for items without a submenu, add onMouseout effect
			menuitems[x].onmouseout=function(){this.className=""}
		menuitems[x].onmouseover=function(){ddtabmenu.showsubmenu(tabid, this)}
		if (dselected=="auto" && typeof setalready=="undefined" && this.isSelected(menuitems[x].href)){
			ddtabmenu.showsubmenu(tabid, menuitems[x])
			var setalready=true
		}
		else if (parseInt(dselected)==x)
			ddtabmenu.showsubmenu(tabid, menuitems[x])
	}
}
}