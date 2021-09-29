<script>
	import Wordmark from '$lib/logo/Wordmark.svelte'
	import Icon from '$lib/logo/Icon.svelte'

	export let menuOpen;
	export let menuIsWhite;
	export let showWordmark;
</script>

<nav class="header">
	<div class="logo-container">
		{#if showWordmark}
		 <!-- content here -->
		 <Wordmark />
	{:else}
		 <!-- else content here -->
		 <Icon />
	{/if}
	</div>
	<div class="menu-cluster" class:active={!menuIsWhite} on:click={() => (menuOpen = !menuOpen)}>
		<span class="quote-btn">get a quote</span>
		<span class="divider" />
		<div class="menu-button"><span>//</span></div>
	</div>
</nav>

<style lang="scss">
	.header {
		z-index: var(--level-top);
		position: fixed;
		height: 20vh;
		width: 90vw;
		padding: 0 5vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo-container {
		position: relative;
		height: 4vh;
		svg {
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.menu-cluster {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&.active {
			.quote-btn,
			.divider,
			.menu-button {
				color: var(--text-color);
			}
			.menu-button, .divider {
				background-color: var(--text-color);
				color: var(--white);
			}
		}
	}
	.quote-btn,
	.divider,
	.menu-button {
		margin: 0 var(--space-md);
	}
	.quote-btn {
		font-weight: bold;
		color: var(--white);
		transition: var(--transition-3-smooth);
		&:hover {
			color: var(--accent-color);
		}
	}
	.divider {
		height: 50px;
		width: 1px;
		background-color: var(--white);
	}
	.menu-button {
		height: 45px;
		width: 45px;
		background-color: var(--white);
		border-radius: var(--radius-rounded);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-color);
		transition: var(--transition-4-smooth);
		&:hover {
			background-color: var(--accent-color);
			span {
				transform: scaleX(1.3) rotate(3deg);
			}
		}
		span {
			transition: var(--transition-3-smooth);
		}
	}
</style>
