<template>
	<button>
		<slot> </slot>
	</button>
</template>

<style lang="scss" scoped>
	@use "../assets/styles/variables" as *;
	@use "sass:color";

	button {
		background-color: transparent;
		cursor: pointer;
		transition: transform 0.2s;
		font-size: $font-size-large;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.93);
		}

		&[clicker] {
			font-size: $font-size-huge;
			margin: $spacing-medium 0;
			width: 100%;
			height: 100%;
			border-radius: 115px;
			background: linear-gradient(
				145deg,
				$primary-light-color,
				$primary-dark-color
			);
			/*box-shadow: 7px 7px 0px
				color.adjust($color: $primary-light-color, $lightness: 10%),
			-7px -7px 20px color.adjust($color: $primary-dark-color, $lightness: 10%);
            */
			justify-self: center;
			align-self: center;
			transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

			&:hover {
				transform: scale(1.03);
			}

			&:active {
				transform: scale(0.93);
			}
		}
	}
</style>
