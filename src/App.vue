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
			<p class="money"><span>10000000</span> 💵</p>
			<ProgressBar :progressPercantage="40"></ProgressBar>
		</article>
		<article class="upgrades">
			<h2>Upgrades</h2>
			<section class="aspect">
				<h3>Stanice</h3>
				<Upgrade>Rychlost</Upgrade>
				<Upgrade>Kvalita</Upgrade>
			</section>
			<section class="aspect">
				<h3>Vozy</h3>
				<Upgrade>Rychlost</Upgrade>
				<Upgrade>Kvalita</Upgrade>
			</section>
			<section class="aspect">
				<h3>Pásy</h3>
				<Upgrade>Rychlost</Upgrade>
			</section>
		</article>
		<Button clicker>♻️</Button>
	</aside>
</template>

<script setup lang="ts">
	import Canvas from "./components/Canvas.vue";
	import Button from "./components/Button.vue";
	import Upgrade from "./components/Upgrade.vue";
</script>
