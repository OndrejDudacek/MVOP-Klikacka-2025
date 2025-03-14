const image = new Image();
image.src = "/imgs/garbage-hauler-.png";

class Car {
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
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
	}

	draw() {
		if (image.complete) {
			this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
		} else {
			image.onload = () => {
				this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
			};
		}
	}
}

export default Car;
