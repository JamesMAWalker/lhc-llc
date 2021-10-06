<script>
	import { goto } from '$app/navigation';

	export let link = '/'
	export let text = 'services'
	export let arrow = true
</script>

<button on:click={() => goto(`${link}`)} class="ring-btn">
	<span class="ring" />
	<span class="text">{text}</span>
	{#if arrow}
		 <span class="down-arr">↓</span>
	{/if}
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
