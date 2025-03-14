import { ref } from "vue";
import { defineStore } from "pinia";

export type Upgrade = {
	type: string;
	name: string;
	description: string;
	cost: number;
	purchased: number;
	max: number;
};

export type Thing = {
	name: string;
	displayName: string;
	upgrades: Upgrade[];
};

export const useUpgradesStore = defineStore("upgrades", () => {
	const upgrades = ref<Thing[]>([
		{
			name: "Station",
			displayName: "Stanice",
			upgrades: [
				{
					type: "speed",
					name: "Rychlost",
					description: "Zvyšuje rychlost stanice o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					name: "Kvalita",
					description: "Zvyšuje kvalitu stanice o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
			],
		},
		{
			name: "Car",
			displayName: "Vozidla",
			upgrades: [
				{
					type: "speed",
					name: "Rychlost",
					description: "Zvyšuje rychlost vozidel o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					name: "Kvalita",
					description: "Zvyšuje kvalitu vozidel o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
			],
		},
		{
			name: "Conveyor",
			displayName: "Pásy",
			upgrades: [
				{
					type: "speed",
					name: "Rychlost",
					description: "Zvyšuje rychlost pásů o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
			],
		},
	]);
	return { upgrades };
});
