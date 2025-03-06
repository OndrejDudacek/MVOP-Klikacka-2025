import { Material } from "./Material.js";

class ConveyorBelt {
	ctx: CanvasRenderingContext2D;
	start: [number, number];
	end: [number, number];
	thickness: number;
	material: Material;
	constructor(
		ctx: CanvasRenderingContext2D,
		start: [number, number],
		end: [number, number],
		thickness: number,
		material: Material
	) {
		this.ctx = ctx;
		this.start = start;
		this.end = end;
		this.thickness = thickness;
		this.material = material;
	}
}

export default ConveyorBelt;
