class Road {
	ctx: CanvasRenderingContext2D;
	start: [number, number];
	end: [number, number];
	thickness: number;
	constructor(
		ctx: CanvasRenderingContext2D,
		start: [number, number],
		end: [number, number],
		thickness: number
	) {
		this.ctx = ctx;
		this.start = start;
		this.end = end;
		this.thickness = thickness;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.moveTo(this.start[0], this.start[1]);
		this.ctx.lineTo(this.end[0], this.end[1]);
		this.ctx.lineWidth = this.thickness;
		this.ctx.strokeStyle = "black";
		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.beginPath();
		this.ctx.setLineDash([25, 20]);
		if (this.start[0] < this.end[0]) {
			this.ctx.moveTo(this.start[0], this.start[1] + 10);
			this.ctx.lineTo(this.end[0], this.end[1] + 10);
		} else {
			this.ctx.moveTo(this.start[0], this.start[1] - 10);
			this.ctx.lineTo(this.end[0], this.end[1] - 10);
		}
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "white";
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.setLineDash([]);
	}
}

export default Road;
