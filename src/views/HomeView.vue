<template>
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
</template>

<script setup lang="ts">
	import Button from "@/components/Button.vue";
	import Upgrade from "@/components/Upgrade.vue";
	import { useGameStore } from "@/stores/game";
	import { useUpgradesStore } from "@/stores/upgrades";

	const gameStore = useGameStore();
	const upgradesStore = useUpgradesStore();
	(window as any).gameStore = gameStore;
	const handleMainClick = () => {
		gameStore.money += 1 * gameStore.multiplier;
	};
</script>
