<template>
	<section>
		<div></div>
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

	const progressPercantage = ref(props.progressPercantage + "%");

	watch(
		() => props.progressPercantage,
		(newValue) => {
			progressPercantage.value = newValue + "%";
		}
	);
</script>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	section {
		width: 90%;
		height: 0.4rem;
		border-radius: 20px;
		background-color: $background-primary-color;
		padding: 0.03rem;
	}
	section > div {
		width: v-bind(progressPercantage);
		height: 100%;
		border-radius: 20px;
		background-color: $primary-dark-color;
	}
</style>
