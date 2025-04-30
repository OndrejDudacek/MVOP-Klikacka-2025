import { computed, ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { useUpgradesStore } from "./upgrades";

export const useGameStore = defineStore("game", () => {
	const upgradesStore = useUpgradesStore();

	const money = ref(0);
	const multiplier = ref(1);

	const buyUpgrade = (name: string, type: string) => {
		const thing = upgradesStore.upgrades.find((thing) => thing.name === name);
		const upgrade = thing?.upgrades.find((upgrade) => upgrade.type === type);
		if (
			!upgrade ||
			upgrade.purchased >= upgrade.max ||
			money.value < upgrade.cost
		) {
			return;
		} else {
			money.value -= upgrade.cost;
			upgrade.purchased++;
		}
	};

	const saveToLocalStorage = () => {
		const upgradesData = upgradesStore.upgrades.map((thing) => ({
			name: thing.name,
			upgrades: thing.upgrades.map((upgrade) => ({
				type: upgrade.type,
				purchased: upgrade.purchased,
				max: upgrade.max,
			})),
		}));

		const gameInfo = {
			money: money.value,
			multiplier: multiplier.value,
			upgrades: upgradesData,
		};

		localStorage.setItem("RecycleGameInfo", JSON.stringify(gameInfo));
		console.log("Saved to local storage");
	};

	const loadFromLocalStorage = () => {
		const gameInfoString = localStorage.getItem("RecycleGameInfo");
		if (gameInfoString) {
			const gameInfo = JSON.parse(gameInfoString);
			console.log(gameInfo);

			money.value = gameInfo.money;
			multiplier.value = gameInfo.multiplier;

			gameInfo.upgrades.forEach((savedThing: any) => {
				const thing = upgradesStore.upgrades.find(
					(thing) => thing.name === savedThing.name
				);
				if (thing) {
					savedThing.upgrades.forEach((savedUpgrade: any) => {
						const upgrade = thing.upgrades.find(
							(upgrade) => upgrade.type === savedUpgrade.type
						);
						if (upgrade) {
							upgrade.purchased = savedUpgrade.purchased;
							upgrade.max = savedUpgrade.max;
						}
					});
				}
			});

			console.log("Loaded from local storage");
		}
	};

	const clearLocalStorage = () => {
		localStorage.clear();
	};

	const resetGame = () => {
		money.value = 0;
		multiplier.value += 1;
		upgradesStore.upgrades.forEach((thing) => {
			thing.upgrades.forEach((upgrade) => {
				upgrade.purchased = 0;
			});
		});
	};

	onMounted(() => {
		loadFromLocalStorage();

		setInterval(() => {
			saveToLocalStorage();
		}, 3000);

		setInterval(() => {
			money.value += upgradesStore.moneyPerSecond * multiplier.value;
		}, 1000);
	});

	return {
		money,
		buyUpgrade,
		clearLocalStorage,
		saveToLocalStorage,
		loadFromLocalStorage,
		multiplier,
		resetGame,
	};
});
