<script>
	import IntersectionObserver from 'svelte-intersection-observer';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';

	let menuOpen = false;

	let menuTrigger;
	let menuTriggerTwo;
	let heroInView = true;
	let aboutInView = false;

	let logoTrigger;
	let showWordmark = true;
</script>

{#if menuOpen}
	<Menu />
{/if}
<Header bind:menuOpen {heroInView} {aboutInView} {showWordmark} />
<main>
	<slot />
	<IntersectionObserver element={menuTrigger} bind:intersecting={heroInView}>
		<div class="menu-trigger" bind:this={menuTrigger} />
	</IntersectionObserver>
	<IntersectionObserver element={logoTrigger} bind:intersecting={showWordmark}>
		<div class="logo-trigger" bind:this={logoTrigger} />
	</IntersectionObserver>
	<IntersectionObserver element={menuTriggerTwo} bind:intersecting={aboutInView}>
		<div class="menu-trigger menu-trigger--2" bind:this={menuTriggerTwo} />
	</IntersectionObserver>
</main>

<Footer />

<style lang="scss">
	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
	}
	.menu-trigger {
		z-index: 9999;
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 90vh;
		left: 0;
		&--2 {
			top: 330vh;
		}
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
