import { computed, ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { useUpgradesStore } from "./upgrades";

export const useGameStore = defineStore("game", () => {
	const upgradesStore = useUpgradesStore();

	const money = ref(0);
	const progress = ref(0);

	const buyUpgrade = (name: string, type: string) => {
		const thing = upgradesStore.upgrades.find((thing) => thing.name === name);
		const upgrade = thing?.upgrades.find((upgrade) => upgrade.type === type);
		if (!upgrade) {
		} else if (upgrade.cost > money.value) {
			alert("Nemáš dost peněz");
		} else if (upgrade.purchased >= upgrade.max) {
			alert("Dosáhl jsi maximálního počtu");
		} else {
			money.value -= upgrade.cost;
			upgrade.purchased++;
		}
		console.log(upgrade);
	};

	onMounted(() => {
		setInterval(() => {
			money.value += upgradesStore.moneyPerSecond;
		}, 500);
	});

	return { money, progress, buyUpgrade };
});
