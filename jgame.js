
var box=0,c=0,m=0,s=0,w=0;
var x=['A','P','N','J','W','K','J','S','S','P','H','K','N','W','A','H'],y=[];

// randomise
//document.getElementById("new").addEventListener("click",randomise(x));
function randomise(y){
	var index=x.length, temp, randomvar;
	while(index!==0){
		randomvar=Math.floor(Math.random()*index);
		index=index-1;
		temp=y[index];
		y[index]=y[randomvar];
		y[randomvar]=temp;

	}
	return y;
}
randomise(x);

function show(no){
	document.getElementById("b"+no).innerHTML=x[no];
	setTimeout(function(){
		document.getElementById("b"+no).innerHTML="";},100);
	setTimeout(function(){
		document.getElementById("b"+m).innerHTML="";},100);
}
function time(){
	w=w+1;
	document.getElementById("tim").innerHTML=w+'s';
	setTimeout(time,1000);
	if(w==300){
		alert("TIME OVER!\nClick OK to start again.");
		location.reload();
	}
}
time();
function showit(id){
	if(c==0){
		document.getElementById("b"+id).innerHTML=x[id];
		c=1;
	}
	else if(m==id) {
		document.getElementById("b"+id).innerHTML="";
		c=0;
		s=s+1;	
	}
	else if(m!=id && x[m]==x[id]){
		document.getElementById("b"+id).innerHTML=x[id];
		document.getElementById("b"+id).style.backgroundColor="maroon";
		document.getElementById("b"+m).style.backgroundColor="maroon";
		document.getElementById("b"+id).style.background="-webkit-gradient(linear,left top,right bottom,from(#800000),to(#800000))";
		document.getElementById("b"+m).style.background="-webkit-gradient(linear,left top,right bottom,from(#800000),to(#800000))";
		document.getElementById("b"+id).webkitAnimationName="none";
		document.getElementById("b"+m).webkitAnimationName="none";
		document.getElementById("b"+id).webkitAnimationDuration="0s";
		document.getElementById("b"+m).webkitAnimationDuration="0s";
		document.getElementById('b'+id).style.pointerEvents = 'none';
        document.getElementById('b'+m).style.pointerEvents = 'none';
        c=0;
		s=s+1;
		box++;
		console.log(box);
	}
	else{
		show(id);
		c=0;
		s=s+1;
	}
	setTimeout(function(){
		m=id;
	},100);
	document.getElementById("cont").innerHTML=s;
	setTimeout(function(){complete();},100);
}
document.getElementById("b1").onclick=function(){
	showit(1);
}
document.getElementById('b2').onclick=function(){
	showit(2);
}
document.getElementById('b3').onclick=function(){
	showit(3);
}
document.getElementById('b4').onclick=function(){
	showit(4);
}
document.getElementById('b5').onclick=function(){
	showit(5);
}
document.getElementById('b6').onclick=function(){
	showit(6);
}
document.getElementById('b7').onclick=function(){
	showit(7);
}
document.getElementById('b8').onclick=function(){
	showit(8);
}
document.getElementById('b9').onclick=function(){
	showit(9);
}
document.getElementById('b10').onclick=function(){
	showit(10);
}
document.getElementById('b11').onclick=function(){
	showit(11);
}
document.getElementById('b12').onclick=function(){
	showit(12);
}
document.getElementById('b13').onclick=function(){
	showit(13);
}
document.getElementById('b14').onclick=function(){
	showit(14);
}
document.getElementById('b15').onclick=function(){
	showit(15);
}
document.getElementById('b0').onclick=function(){
	showit(0);
}
function complete(){
	if(box==8){
		$(document).ready(function(){
		alert("Congrats!\nClick OK to start again.");
		location.reload();
	});
	}
}

document.getElementById("new").onclick=function(){
	location.reload();
} 

