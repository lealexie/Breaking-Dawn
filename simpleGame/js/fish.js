var fishObj = function()
{
	this.x;
	this.y;
    this.fishbody = new Image();
	
}

fishObj.prototype.init = function()
{
	this.x = can1.width;
	this.y = can1.height;
}

 
var i = 1;
var p;

function draw(p)
{
	ctx1.drawImage(fishbody[p],250,70);
}

function clear()
{
	ctx1.clearRect(250,70,1000,1000);
}


fishObj.prototype.draw = function()
{
	while(i<9){
		setInterval(draw,1000*i,i);
	   setInterval(clear,1000*(i+1),i);
	   i +=1
	}
	setInterval(draw,10000,10);
	setInterval(clear,13000,10);
	   	
	}
