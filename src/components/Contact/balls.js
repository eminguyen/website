/*$(window).on('load', function() {
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
} else {*/
var browserX = 0;
var browserY = 0;
var balls = [];
let colors = null;
var total = 20;
var currentDrag = null;
var mouseX = 0;
var mouseY = 0;
var stageWidth = 0;
var stageHeight = 0;
var context = null;
var IE = document.all ? true : false;
var stage = null;

export const initBalls = () => {
browserX = window.screenX;
browserY = window.screenY;
stageWidth = window.innerWidth;
stageHeight = window.innerHeight;
stage = document.getElementById('stage');
stage.width = stageWidth;
stage.height = stageHeight;

	if(!IE) document.addEventListener(Event.MOUSEMOVE, getMouseXY, false);
	//document.onmousemove = getMouseXY;

	window.onresize = function(event)
	{
		stageWidth = window.innerWidth;
		stageHeight = window.innerHeight;
		stage.width = stageWidth;
		stage.height = stageHeight;
	}

	generate();
	addIcons();
  addMore();

	var drawingCanvas = document.getElementById('stage');
	if(drawingCanvas.getContext)
	{
		context = drawingCanvas.getContext('2d');
		setInterval(render, 20);
	}
  drawingCanvas.addEventListener('mousemove', e => {
    getMouseXY(e);
  });

  drawingCanvas.addEventListener('mousedown', e => {
    onMouseDown();
  });

  drawingCanvas.addEventListener('mouseup', e => {
    onMouseUp();
  });
}

	/*jQuery(document).ready(function()
	{
		$(document).mousedown(function(e)
		{
			onMouseDown();
		});

		$(document).mouseup(function(e)
		{
			onMouseUp();
		});
	})*/

	function onMouseDown()
	{
		var j = balls.length;
		while(--j > -1)
		{
			var dx = mouseX - balls[j].x;
			var dy = mouseY - balls[j].y;
			var dist = Math.sqrt(dx * dx + dy * dy);
			if(dist < balls[j].size/2)
			{
				currentDrag = balls[j];
				currentDrag.dragging = true;
				return;
			}
		}
	}

	function onMouseUp()
	{
    if(currentDrag == null) {
      return;
    }
		if(currentDrag.link) {
		  window.location.href = currentDrag.link;
		}
		if(currentDrag !== null) currentDrag.dragging = false;
	}

	function generate()
	{
		for(var i = 0; i < total; i++)
		{
      generateBall();
		}
	}

	function generateBall() {
		var ball = {};
		ball.color = genColor();
		ball.bounce = .5 + (Math.random() * .5);
		ball.vx = Math.random() * 50 - 25;
		ball.vy = Math.random() * 50 - 25;
		ball.size = 100 - (ball.bounce * 50);
		ball.x = Math.random() * stageWidth;
		ball.y = stageHeight;
		balls[balls.length] = ball;
	}

	function addMore(id) {
		clearInterval(id);
		let int = setInterval(function() {
			generateBall();
			if(balls.length > 25) {
				removeSome(int);
			}
		}, 10000);
	}

	function removeSome(id) {
		clearInterval(id);
		let int = setInterval(function() {
			clearBall();
			if(balls.length <= 15) {
				addMore(int);
			}
		}, 10000);
	}

	function clearBall() {
		balls.splice(8,1);
	}

	function addIcons()
	{
		balls[0].image = 'static/icons/linkedin.png';
		balls[0].link = 'https://www.linkedin.com/in/emilyhuongnguyen/';
		balls[1].image = 'static/icons/facebook.png';
		balls[1].link = 'https://www.facebook.com/empressily';
		balls[2].image = 'static/icons/github.png';
		balls[2].link = 'https://github.com/eminguyen';
    balls[3].image = 'static/icons/instagram.png';
    balls[3].link = 'https://www.instagram.com/empress.emi';
    balls[4].image = 'static/icons/steam.png';
    balls[4].link = 'https://steamcommunity.com/profiles/76561198042182878';
    balls[5].image = 'static/icons/medium.png';
    balls[5].link = 'https://medium.com/@emilyhuongnguyen';
    balls[6].image = 'static/icons/strava.png';
    balls[6].link = 'https://www.strava.com/athletes/18678952';
	}

  // this is there bc i'll probably want more colors later
	function genColor()
	{
		colors = new Array(1)
		colors[0] = '#43C0F6';
		return colors[Math.round(Math.random()*0)];
	}

	function render()
	{
		var isChange = (browserX !== window.screenX || browserY !== window.screenY);
		if(isChange)
		{
			var diffX = browserX - window.screenX;
			browserX = window.screenX;

			var diffY = browserY - window.screenY;
			browserY = window.screenY;
		}

		var j = balls.length;
		while(--j > -1)
		{
			update(balls[j]);

			if(isChange)
			{
				balls[j].vx += (diffX * .05);
				balls[j].vy += (diffY * .1);
			}
		}

		draw();
	}

	function draw()
	{
		context.clearRect(0, 0, stageWidth, stageHeight);
		var i = balls.length;
		while(--i > -1)
		{
			var image = document.createElement('img');
			image.src = balls[i].image;

			context.save();
			context.fillStyle = balls[i].color;
			context.beginPath();
			context.arc(balls[i].x,balls[i].y,balls[i].size, 0, Math.PI * 2, true);
			context.closePath();
			context.fill()
			context.clip();

			context.drawImage(image, (balls[i].x - (balls[i].size/2)), (balls[i].y - (balls[i].size * image.height / image.width)/2), balls[i].size, balls[i].size * (image.height / image.width));

			context.beginPath();
			context.arc(balls[i].x,balls[i].y,balls[i].size, 0, Math.PI * 2, true);
			context.clip();
			context.closePath();
			context.restore();
		}
	}

	function update(ball)
	{
		collisionCheck();

		var gravity = 2;
		var drag = .98;

		if(ball.dragging)
		{
			ball.vx = ball.x - ball.ox;
			ball.vy = ball.y - ball.oy;
			ball.ox = ball.x;
			ball.oy = ball.y;

			ball.x = mouseX;
			ball.y = mouseY;

			if ((ball.x + ball.size) > stageWidth)
			{
				ball.x = stageWidth - ball.size;
			}
			else if((ball.x - ball.size) < 0)
			{
				ball.x = 0 + ball.size;
			}

			if ((ball.y + ball.size) > stageHeight)
			{
				ball.y = stageHeight - ball.size;
			}
			else if((ball.y - ball.size) < 0)
			{
				ball.y = 0 + ball.size;
			}
		}
		else
		{
			ball.x += ball.vx;
			ball.y += ball.vy;

			if ((ball.x + ball.size) > stageWidth)
			{
				ball.x = stageWidth - ball.size;
				ball.vx = -ball.vx * ball.bounce;
			}
			else if((ball.x - ball.size) < 0)
			{
				ball.x = 0 + ball.size;
				ball.vx = -ball.vx * ball.bounce;
			}

			if ((ball.y + ball.size) > stageHeight)
			{
				ball.y = stageHeight - ball.size;
				ball.vy = -ball.vy * ball.bounce;
			}
			else if((ball.y - ball.size) < 0)
			{
				ball.y = 0 + ball.size;
				ball.vy = -ball.vy * ball.bounce;
			}

			ball.vx = ball.vx * drag;
			ball.vy = ball.vy * drag + gravity;
		}
	}

	function collisionCheck()
	{
		var spring = .5;

		for(var i = 0; i < (balls.length-1); ++i)
		{
			var ball0 = balls[i];

			for(var j = i + 1; j < balls.length; ++j)
			{
				var ball1 = balls[j];
				var dx = ball1.x - ball0.x;
				var dy = ball1.y - ball0.y;
				var dist = Math.sqrt(dx * dx + dy * dy);
				var minDist = ball0.size + ball1.size;

				if(dist < minDist)
				{
					var angle = Math.atan2(dy, dx);
					var tx = ball0.x + dx / dist * minDist;
					var ty = ball0.y + dy / dist * minDist;
					var ax = (tx - ball1.x);
					var ay = (ty - ball1.y);


					ball0.x -= ax;
					ball0.y -= ay;

					ball1.x += ax;
					ball1.y += ay;


					ball0.vx -= (ax * spring);
					ball0.vy -= (ay * spring);
					ball1.vx += (ax * spring);
					ball1.vy += (ay * spring);
				}
			}
		}
	}

	function getMouseXY(e)
	{
			if(IE)
			{
				mouseX = e.clientX
				mouseY = e.clientY
			}
			else
			{
				mouseX = e.pageX - stage.offsetLeft;
				mouseY = e.pageY - stage.offsetTop;
			}

			if(mouseX < 0) {mouseX = 0;}
			if(mouseY < 0) {mouseY = 0;}
			return true;
	}
//}
//});
