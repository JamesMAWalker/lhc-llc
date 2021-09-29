<script>
	import IntersectionObserver from 'svelte-intersection-observer';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';

	let menuOpen = false;

	let menuTrigger;
	let menuIsWhite = true;

	let logoTrigger;
	let showWordmark = true;
</script>

{#if menuOpen}
	<Menu />
{/if}
<Header bind:menuOpen {menuIsWhite} {showWordmark} />
<main>
	<slot />
	<IntersectionObserver element={menuTrigger} bind:intersecting={menuIsWhite}>
		<div class="menu-trigger" bind:this={menuTrigger} />
	</IntersectionObserver>
	<IntersectionObserver element={logoTrigger} bind:intersecting={showWordmark}>
		<div class="logo-trigger" bind:this={logoTrigger} />
	</IntersectionObserver>
</main>

<Footer />

<style>
	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
	}
	.menu-trigger {
		z-index: 99;
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 90vh;
		left: 0;
	}
	.logo-trigger {
		z-index: 99;
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 20vh;
		left: 0;
	}
</style>
