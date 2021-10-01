<script>
	import { goto } from '$app/navigation';
</script>

<button on:click={() => goto('/#services')} class="ring-btn">
	<span class="ring" />
	<span class="text">services</span>
	<span class="down-arr">↓</span>
</button>

<style lang="scss">
	.ring-btn {
		isolation: isolate;
		cursor: pointer;
		position: relative;
		margin-top: var(--space-lg);
		background-color: transparent;
		border: none;
		color: var(--text-color);
		font-size: var(--text-prose);
		font-weight: var(--semibold);
		.down-arr {
			color: var(--accent-color);
		}
		.ring {
			z-index: var(--base-one);
			position: absolute;
			top: 50%;
			left: -5%;
			transform: translateY(-50%);
			height: 30px;
			width: 30px;
			border-radius: var(--radius-rounded);
			border: 1px solid var(--accent-color);
		}
	}
</style>
