import { Material, MaterialColors } from "./Material.js";

class Station {
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
	material: Material;
	speed: number;
	quality: number;
	constructor(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		material: Material
	) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.material = material;
		this.speed = 1;
		this.quality = 1;
	}

	draw() {
		this.ctx.fillStyle = MaterialColors[this.material];
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.fill();
	}

	getPosition() {
		return { x: this.x, y: this.y, width: this.width, height: this.height };
	}
}

export default Station;
