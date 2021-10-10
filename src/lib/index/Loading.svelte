<script>
	import BgCircle from '$lib/background/BGCircle.svelte';
</script>

<div class="loading">
		<BgCircle />
		<h4 class="loading-text">
			Loading
		</h4>
	</div>

<style lang="scss">
	.loading {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		.loading-text {
			color: var(--barely-grey);
			font-size: var(--text-display);
			font-weight: var(--light);
			letter-spacing: 15px;
			text-transform: uppercase;
		}
		animation: .7s infinite alternate ease-out pulse;
	}
	:global(.loading svg) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(.5);
	}
	@keyframes pulse {
		from {
			opacity: 0.2;
		}
		to {
			opacity: 0.8;
		}
	}
</style>

