<template>
	<h2>Settings</h2>
	<section>
		<Button @click="resetGame">Resetuj hru pro vylepšní</Button>
	</section>
</template>

<script setup lang="ts">
	import { useGameStore } from "@/stores/game";
	import { useUpgradesStore } from "@/stores/upgrades";
	import Button from "@/components/Button.vue";

	const gameStore = useGameStore();

	const resetGame = () => {
		gameStore.resetGame();
	};
</script>
