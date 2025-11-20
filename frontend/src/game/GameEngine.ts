export class GameEngine {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private raf = 0;
	private ball = { x:400, y:300, vx:5, vy:5, r:8 };
	private left = { x:20, y:250, w:12, h:100, s:6 };
	private right = { x:768, y:250, w:12, h:100, s:6 };
	private keys: Record<string,boolean> = {};

	constructor(canvas: HTMLCanvasElement) {
	  this.canvas = canvas; this.ctx = canvas.getContext('2d')!;
	  window.addEventListener('keydown', e => this.keys[e.key]=true);
	  window.addEventListener('keyup', e => this.keys[e.key]=false);
	  this.loop = this.loop.bind(this);
	}

	update() {
	  if (this.keys['w']) this.left.y -= this.left.s;
	  if (this.keys['s']) this.left.y += this.left.s;
	  if (this.keys['ArrowUp']) this.right.y -= this.right.s;
	  if (this.keys['ArrowDown']) this.right.y += this.right.s;

	  this.ball.x += this.ball.vx; this.ball.y += this.ball.vy;
	  if (this.ball.y - this.ball.r < 0 || this.ball.y + this.ball.r > this.canvas.height) this.ball.vy *= -1;

	  // left paddle collision
	  if (this.ball.x - this.ball.r < this.left.x + this.left.w &&
		  this.ball.y > this.left.y && this.ball.y < this.left.y + this.left.h) {
		this.ball.vx = Math.abs(this.ball.vx);
	  }
	  // right paddle collision
	  if (this.ball.x + this.ball.r > this.right.x &&
		  this.ball.y > this.right.y && this.ball.y < this.right.y + this.right.h) {
		this.ball.vx = -Math.abs(this.ball.vx);
	  }
	}

	draw() {
	  this.ctx.fillStyle='black'; this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
	  this.ctx.fillStyle='white';
	  this.ctx.fillRect(this.left.x,this.left.y,this.left.w,this.left.h);
	  this.ctx.fillRect(this.right.x,this.right.y,this.right.w,this.right.h);
	  this.ctx.beginPath(); this.ctx.arc(this.ball.x,this.ball.y,this.ball.r,0,Math.PI*2); this.ctx.fill();
	}

	loop() { this.update(); this.draw(); this.raf = requestAnimationFrame(this.loop); }
	start() { this.loop(); }
	stop() { cancelAnimationFrame(this.raf); }
  }
