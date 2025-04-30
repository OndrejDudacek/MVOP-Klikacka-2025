<template>
	<Canvas></Canvas>
	<aside>
		<header>
			<h1>Recykluj</h1>
			<section>
				<router-link to="/"><Button>🎮</Button></router-link>
				<router-link to="/setting"><Button>⚙️</Button></router-link>
			</section>
		</header>
		<router-view></router-view>
	</aside>
</template>

<script setup lang="ts">
	import Canvas from "./components/Canvas.vue";
	import Button from "./components/Button.vue";
</script>
