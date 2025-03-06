<script setup>
	import Pile from "./models/Pile.js";
	import Road from "./models/Road.js";
	import Station from "./models/Station.js";
	import { Material } from "./models/Material.js";

	const canvas = document.querySelector("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	const dpr = window.devicePixelRatio || 1;
	const clientWidth = canvas.clientWidth;
	const clientHeight = canvas.clientHeight;
	canvas.width = clientWidth * dpr;
	canvas.height = clientHeight * dpr;
	ctx.scale(dpr, dpr);

	const roadWidth = 50;
	const road = new Road(
		ctx,
		[0, clientHeight - roadWidth / 2],
		[clientWidth, clientHeight - roadWidth / 2],
		roadWidth
	);
	road.draw();

	const pile = new Pile(
		ctx,
		(clientWidth - 200) / 2,
		clientHeight - roadWidth - 20 - 100,
		200,
		100
	);
	pile.draw();

	const stationsW = 111;
	const stationsH = 111;
	const stationsY = clientHeight / 4;

	const stationAll = new Station(
		ctx,
		clientWidth / 7 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.All
	);
	const stationPaper = new Station(
		ctx,
		(clientWidth / 7) * 2 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.Paper
	);
	const stationPlastic = new Station(
		ctx,
		(clientWidth / 7) * 3 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.Plastic
	);
	const stationMetal = new Station(
		ctx,
		(clientWidth / 7) * 4 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.Metal
	);
	const stationGlass = new Station(
		ctx,
		(clientWidth / 7) * 5 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.Glass
	);
	const stationBio = new Station(
		ctx,
		(clientWidth / 7) * 6 - stationsW / 2,
		stationsY,
		stationsW,
		stationsH,
		Material.Bio
	);

	const stations = [
		stationAll,
		stationPaper,
		stationPlastic,
		stationMetal,
		stationGlass,
		stationBio,
	];

	for (let station of stations) {
		station.draw();
		const {
			x: stationX,
			y: stationY,
			width: stationWidth,
			height: stationHeight,
		} = station.getPosition();

		const { x: pileX, y: pileY, width: pileWidth } = pile.getPosition();

		ctx.beginPath();
		ctx.moveTo(pileX + pileWidth / 2, pileY);
		ctx.lineTo(stationX + stationWidth / 2, stationY + stationHeight);
		ctx.lineWidth = 5;
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();

		if (station.material === Material.All) continue;
		ctx.beginPath();
		ctx.moveTo(stationX + stationWidth / 2, stationY);
		ctx.lineTo(stationX + stationWidth / 2, 0);
		ctx.stroke();
		ctx.closePath();
	}
</script>
