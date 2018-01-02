var can1;
var can2;

var gradient;

var lastTime=0;

var fishbody=[];

var fish;
function init()
{
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext("2d");

	fish = new fishObj;
	fish.init();

	for(var i = 0;i<=10;i++)
	{
		fishbody[i]=new Image();
		fishbody[i].src = "src/fishbody" + i + ".png";
	}
	
	fish.draw();

//	gameloop();
}

function gameloop()
{
	requestAnimFrame(gameloop);
	 //fillcanvas();
	

	
}


function fillcanvas()
{
	gradient = ctx1.createLinearGradient(0,0,170,0);
	gradient.addColorStop(0,"blue");
	gradient.addColorStop(1,"#00FFFF");
	ctx1.fillStyle = gradient;
	ctx1.fillRect(100, 100, 1000, 1000);
}

