import { computed, ref, type ComputedRef } from "vue";
import { defineStore } from "pinia";

export type Upgrade = {
	type: string;
	displayName: string;
	description: string;
	cost: ComputedRef<number>;
	purchased: number;
	max: number;
};

export type UpgradeComputed = {
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

const computeCost = (startingCost: number, purchased: number): number => {
	const finaleCost = Math.floor(startingCost + Math.pow(2, 1.5 * purchased));
	return finaleCost;
};

const computeMoneyPerSecond = (upgrade: UpgradeComputed): number => {
	const purchased = upgrade.purchased;
	const cost = upgrade.cost;
	let mps = 0;
	if (upgrade.type === "speed") {
		mps = (cost * purchased * 0.01) / 2;
		//mps = Math.floor((cost * purchased * 0.01) / 2);
	}
	if (upgrade.type === "quality") {
		mps = cost * purchased * 0.01;
		//mps = Math.floor(cost * purchased * 0.01);
	}
	console.log(mps);
	return mps;
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
					cost: computed((): number =>
						computeCost(10, upgrades.value[0].upgrades[0].purchased)
					),
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					displayName: "Kvalita",
					description: "Zvyšuje kvalitu stanice o 1",
					cost: computed((): number =>
						computeCost(10, upgrades.value[0].upgrades[1].purchased)
					),
					purchased: 0,
					max: 30,
				},
				{
					type: "material",
					displayName: "Materiál",
					description: "Zvyšuje kvalitu materiálu o 1",
					cost: computed((): number =>
						computeCost(2000, upgrades.value[0].upgrades[2].purchased)
					),
					purchased: 1,
					max: 6,
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
					cost: computed((): number =>
						computeCost(10, upgrades.value[1].upgrades[0].purchased)
					),
					purchased: 0,
					max: 10,
				},
				{
					type: "quality",
					displayName: "Kvalita",
					description: "Zvyšuje kvalitu vozidel o 1",
					cost: computed((): number =>
						computeCost(10, upgrades.value[1].upgrades[1].purchased)
					),
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
					cost: computed((): number =>
						computeCost(10, upgrades.value[2].upgrades[0].purchased)
					),
					purchased: 0,
					max: 10,
				},
			],
		},
	]);

	const moneyPerSecond = computed(() => {
		let mps = 0;
		for (const aspect of upgrades.value) {
			for (const upgrade of aspect.upgrades) {
				mps += computeMoneyPerSecond(upgrade as UpgradeComputed);
			}
		}
		return mps;
	});
	return { upgrades, moneyPerSecond };
});
