<script setup lang="ts">
	import HelloWorld from "./components/HelloWorld.vue";
	import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
	<body>
		<canvas></canvas>
		<aside>
			<header>
				<h1>Recykluj</h1>
				<section>
					<button>🏅</button>
					<button>⚙️</button>
				</section>
			</header>
			<article class="progres">
				<p class="money"><span>10000000</span> 💵</p>
				<section class="greenesBar progresBar"><div></div></section>
			</article>
			<article class="upgrades">
				<h2>Upgrades</h2>
				<section class="aspect">
					<h3>Stanice</h3>
					<section>
						<p>Rychlost</p>
						<section class="progresBar"><div></div></section>
						<button>⬆️</button>
					</section>
					<section>
						<p>Kvalita</p>
						<section class="progresBar"><div></div></section>
						<button>⬆️</button>
					</section>
				</section>
				<section class="aspect">
					<h3>Vozy</h3>
					<section>
						<p>Rychlost</p>
						<section class="progresBar"><div></div></section>
						<button>⬆️</button>
					</section>
					<section>
						<p>Kvalita</p>
						<section class="progresBar"><div></div></section>
						<button>⬆️</button>
					</section>
				</section>
				<section class="aspect">
					<h3>Pásy</h3>
					<section>
						<p>Rychlost</p>
						<section class="progresBar"><div></div></section>
						<button>⬆️</button>
					</section>
				</section>
			</article>
			<button class="clicker">♻️</button>
		</aside>
		<script type="module" src="./dist/main.js"></script>
	</body>
</template>
