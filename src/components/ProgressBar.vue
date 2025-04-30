<template>
	<section class="progress-bar">
		<div :style="{ width: `${progressPercantage}%` }"></div>
	</section>
</template>

<script setup lang="ts">
	import { ref, watch } from "vue";

	const props = defineProps({
		progressPercantage: {
			type: Number,
			required: true,
		},
	});

	const progressPercantage = ref(props.progressPercantage);

	watch(
		() => props.progressPercantage,
		() => {
			progressPercantage.value = props.progressPercantage;
		}
	);
</script>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	section.progress-bar {
		width: 100%;
		height: 0.4rem;
		border-radius: 20px;
		background-color: $background-primary-color;
		padding: 0.03rem;
	}
	section.progress-bar > div {
		height: 100%;
		border-radius: 20px;
		background-color: $primary-dark-color;
	}
</style>
