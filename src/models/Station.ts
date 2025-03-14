import { Material, MaterialColors } from "./Material.js";

const factoryImage = new Image();
factoryImage.src = "/imgs/isometric-factory.png";
const recIcon = new Image();
recIcon.src = "/imgs/Recycling_symbol.svg";

class Station {
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
	material: Material;
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
	}

	draw() {
		if (factoryImage.complete && recIcon.complete) {
			this.ctx.drawImage(factoryImage, this.x, this.y, this.width, this.height);
		} else {
			factoryImage.onload = () => {
				this.ctx.drawImage(
					factoryImage,
					this.x,
					this.y,
					this.width,
					this.height
				);
			};
		}
	}

	getPosition() {
		return { x: this.x, y: this.y, width: this.width, height: this.height };
	}
}

export default Station;
