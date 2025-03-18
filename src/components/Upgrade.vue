<template>
	<section class="upgrade">
		<p>{{ upgrade.displayName }}</p>
		<ProgressBar
			:progressPercantage="Math.floor((upgrade.purchased / upgrade.max) * 100)"
		></ProgressBar>
		<Button @click="buyUpgrade">⬆️</Button>
	</section>
</template>

<script setup lang="ts">
	import ProgressBar from "./ProgressBar.vue";
	import Button from "./Button.vue";
	import type { PropType } from "vue";
	import type { Upgrade } from "@/stores/upgrades";
	import { useGameStore } from "@/stores/game";

	const props = defineProps({
		upgrade: {
			type: Object as PropType<Upgrade>,
			required: true,
		},
		aspectName: {
			type: String,
			required: true,
		},
	});

	const gameStore = useGameStore();

	const buyUpgrade = () => {
		gameStore.buyUpgrade(props.aspectName, props.upgrade.type);
	};
</script>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	section.upgrade {
		display: grid;
		grid-template-columns: 2fr 5fr 1fr;
		gap: $spacing-medium;
		align-items: center;
	}
</style>
