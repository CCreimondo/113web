function addLoadEvent (func) {
	var oldonload = window.onload ;
	if (typeof window.onload != 'function') {
		window.onload = func ;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function moveElement (elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.left);   //parseFloat(); 取带有小数的，
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	if (xpos == final_x && ypos == final_y) {
		return true ;
	}
	if (xpos < final_x){
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y){
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y){
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos +  "px" ;
	elem.style.top = ypos + "px" ;
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	movement = setTimeout(repeat,interval);
}
function divSlideshow() {
	if (!document.getElementsByTagName) return false ;
	if (!document.getElementById) return false ;
	if (!document.getElementById("l_nav")) return false ;
	if (!document.getElementById("r_detail")) return false ;
	var r_detail = document.getElementById("r_detail");
	r_detail.style.position = "relative";
	r_detail.style.left = "0px";
	r_detail.style.top = "0px";
	var list = document.getElementById("l_nav");
	var links = list.getElementsByClassName("button");
	links[0].onclick = function () {
		moveElement("r_detail",0,-676,10);
	}
	links[1].onclick = function() {
	    moveElement("r_detail",0,-1352,10);
	}
	links[2].onclick = function () {
	    moveElement("r_detail",0,-2028,10);
	}
}
addLoadEvent(divSlideshow);