<template>
	<section>
		<slot></slot>
		<ProgressBar></ProgressBar>
		<Button>⬆️</Button>
	</section>
</template>

<script setup lang="ts">
	import ProgressBar from "./ProgressBar.vue";
	import Button from "./Button.vue";
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
