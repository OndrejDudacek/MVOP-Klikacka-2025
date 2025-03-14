<template>
	<section>
		<p>{{ upgrade.name }}</p>
		<ProgressBar
			:progressPercantage="Math.floor(upgrade.purchased / upgrade.max) * 100"
		></ProgressBar>
		<Button>⬆️</Button>
	</section>
</template>

<script setup lang="ts">
	import ProgressBar from "./ProgressBar.vue";
	import Button from "./Button.vue";
	import type { PropType } from "vue";
	import type { Upgrade } from "@/stores/upgrades";

	const props = defineProps({
		upgrade: {
			type: Object as PropType<Upgrade>,
			required: true,
		},
	});
</script>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	section {
		display: grid;
		grid-template-columns: 2fr 5fr 1fr;
		gap: $spacing-medium;
		align-items: center;
	}
</style>
