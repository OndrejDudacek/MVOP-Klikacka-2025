import { computed, onMounted, ref } from "vue";
import { defineStore } from "pinia";

export type Upgrade = {
	type: string;
	displayName: string;
	description: string;
	cost: number;
	purchased: number;
	max: number;
};

export type Aspect = {
	name: string;
	displayName: string;
	upgrades: Upgrade[];
};

export const useUpgradesStore = defineStore("upgrades", () => {
	const upgrades = ref<Aspect[]>([
		{
			name: "Station",
			displayName: "Stanice",
			upgrades: [
				{
					type: "speed",
					displayName: "Rychlost",
					description: "Zvyšuje rychlost stanice o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					displayName: "Kvalita",
					description: "Zvyšuje kvalitu stanice o 1",
					cost: 10,
					purchased: 0,
					max: 30,
				},
			],
		},
		{
			name: "Car",
			displayName: "Vozidla",
			upgrades: [
				{
					type: "speed",
					displayName: "Rychlost",
					description: "Zvyšuje rychlost vozidel o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					displayName: "Kvalita",
					description: "Zvyšuje kvalitu vozidel o 1",
					cost: 10,
					purchased: 0,
					max: 30,
				},
			],
		},
		{
			name: "Conveyor",
			displayName: "Pásy",
			upgrades: [
				{
					type: "speed",
					displayName: "Rychlost",
					description: "Zvyšuje rychlost pásů o 1",
					cost: 10,
					purchased: 0,
					max: 10,
				},
			],
		},
	]);

	const moneyPerSecond = computed(() => {
		let mps = 1;
		for (const thing of upgrades.value) {
			for (const upgrade of thing.upgrades) {
				if (upgrade.type === "speed") mps += upgrade.purchased;
				else if (upgrade.type === "quality") mps += upgrade.purchased * 2;
			}
		}
		return mps;
	});
	return { upgrades, moneyPerSecond };
});
