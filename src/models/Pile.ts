class Pile {
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
	items: object[];
	constructor(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number
	) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.items = [];
	}

	draw() {
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.fillStyle = "black";
		this.ctx.fill();
	}

	getPosition() {
		return { x: this.x, y: this.y, width: this.width, height: this.height };
	}
}

export default Pile;
