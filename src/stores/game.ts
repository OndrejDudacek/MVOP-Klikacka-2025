import { ref } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {
	const money = ref(0);
	const progress = ref(0);

	return { money, progress };
});
