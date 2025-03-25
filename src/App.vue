<template>
	<Canvas></Canvas>
	<aside>
		<header>
			<h1>Recykluj</h1>
			<section>
				<Button>🏅</Button>
				<Button>⚙️</Button>
			</section>
		</header>
		<article class="progres">
			<p id="money">{{ Math.floor(gameStore.money) }} 💵</p>
		</article>
		<article class="upgrades">
			<h2>Upgrades</h2>
			<section
				class="aspect"
				v-for="aspect in upgradesStore.upgrades"
				:key="aspect.name"
			>
				<h3>{{ aspect.name }}</h3>
				<section>
					<Upgrade
						v-for="upgrade in aspect.upgrades"
						:upgrade="upgrade"
						:aspectName="aspect.name"
						:key="upgrade.displayName"
					></Upgrade>
				</section>
			</section>
		</article>
		<Button clicker @click="handleMainClick">♻️</Button>
	</aside>
</template>

<script setup lang="ts">
	import Canvas from "./components/Canvas.vue";
	import Button from "./components/Button.vue";
	import Upgrade from "./components/Upgrade.vue";
	import { useGameStore } from "./stores/game";
	import { useUpgradesStore } from "./stores/upgrades";

	const gameStore = useGameStore();
	const upgradesStore = useUpgradesStore();

	const handleMainClick = () => {
		gameStore.money += 1;
	};
</script>
