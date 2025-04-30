<template>
	<h2>Settings</h2>
	<section>
		<Button @click="resetGame"
			>Resetuj hru pro vylepšní <strong>1 000 000 💵</strong></Button
		>
	</section>
</template>

<script setup lang="ts">
	import { useGameStore } from "@/stores/game";
	import Button from "@/components/Button.vue";

	const gameStore = useGameStore();

	const resetGame = () => {
		if (gameStore.money >= 1000000) {
			gameStore.resetGame();
		}
	};
</script>
