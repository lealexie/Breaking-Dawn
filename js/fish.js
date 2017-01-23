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

var i = 0;
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
	
	while(i<10){
	   setInterval(draw,5000,i);	
	   if(i>=1){
	   	setInterval(clear,2000,i);
	   }
       
        i = i + 1;
        if(i == 11){
		break;
	}
	}
	

//   setInterval(clear,1000);

/*    if(i=9)
    {
    //	clearInterval(ST);
    //	ctx1.clearRect(100, 100, 1000, 1000);
    //	draw(10);
    }
*/
	}
