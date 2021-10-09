<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Wordmark from '$lib/logo/Wordmark.svelte';
	import Icon from '$lib/logo/Icon.svelte';

	export let menuOpen;
	export let showWordmark;
	export let heroInView;
	export let aboutInView;

	let isWhitePage;

	$: isWhitePage = $page.path === '/contact' || $page.path === '/case-studies';

	let menuIsWhite;
	$: menuIsWhite = (aboutInView || heroInView || menuOpen) && !isWhitePage;

	const handleContactBtn = () => {
		menuOpen = false;
		setTimeout(() => {
			goto('/contact');
		}, 400);
	};
</script>

<nav class="header-nav">
	<div class="logo-container" transition:fade on:click={() => goto('/')}>
		{#if showWordmark}
			<Wordmark />
		{:else}
			<Icon />
		{/if}
	</div>
	<div
		class="menu-cluster"
		class:active={!menuIsWhite}
		transition:fade
		on:click={() => (menuOpen = !menuOpen)}
	>
		<span class="quote-btn" on:click|stopPropagation={handleContactBtn}>get a quote</span>
		<span class="divider" />
		<div class="menu-button"><span>//</span></div>
	</div>
</nav>

<style lang="scss">
	.header-nav {
		z-index: var(--level-top);
		position: fixed;
		height: 20vh;
		width: 90vw;
		padding: 0 5vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		@media (max-width: 1025px) {
			top: 0;
		}
	}
	:global(.logo-container svg) {
		@media (max-width: 1024px) {
			transform: scale(.6) !important;
		}
	} 
	:global(.logo-container svg path) {
		@media (max-width: 1024px) {
			fill: var(--accent-color);
		}
	} 
	.logo-container {
		cursor: pointer;
		position: relative;
		height: 5vh;
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
				&:hover {
					color: var(--accent-color);
				}
			}
			.menu-button,
			.divider {
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
	.quote-btn,
	.divider {
		@media (max-width: 1025px) {
			display: none;
		}
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
