<template>
	<section class="upgrade">
		<p>
			{{ reactiveUpgrade.displayName }}
			<strong>{{ reactiveUpgrade.cost }} 💵</strong>
		</p>
		<ProgressBar
			:progressPercantage="
				Math.floor((reactiveUpgrade.purchased / reactiveUpgrade.max) * 100)
			"
		></ProgressBar>
		<Button
			v-if="
				gameStore.money >= reactiveUpgrade.cost &&
				reactiveUpgrade.purchased < reactiveUpgrade.max
			"
			@click="buyUpgrade"
			>⬆️</Button
		>
	</section>
</template>

<script setup lang="ts">
	import ProgressBar from "./ProgressBar.vue";
	import Button from "./Button.vue";
	import type { UpgradeComputed } from "@/stores/upgrades";
	import { useGameStore } from "@/stores/game";
	import { ref, watch, type PropType } from "vue";

	const props = defineProps({
		upgrade: {
			type: Object as PropType<UpgradeComputed>,
			required: true,
		},
		aspectName: {
			type: String,
			required: true,
		},
	});

	const reactiveUpgrade = ref(props.upgrade);
	watch(
		() => props.upgrade,
		(newUpgrade) => {
			reactiveUpgrade.value = newUpgrade;
		},
		{ immediate: true }
	);

	const gameStore = useGameStore();

	const buyUpgrade = () => {
		gameStore.buyUpgrade(props.aspectName, props.upgrade.type);
	};
</script>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	section.upgrade {
		display: grid;
		grid-template-columns: 4fr 5fr 1fr;
		gap: $spacing-medium;
		align-items: center;
	}
</style>
