<script>
	import IntersectionObserver from 'svelte-intersection-observer';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';

	let menuOpen = false;

	let menuTrigger;
	let menuTriggerTwo;
	let footerTrigger;
	let heroInView = true;
	let aboutInView = false;
	let footerInView = false;

	let logoTrigger;
	let showWordmark = true;
</script>

{#if menuOpen}
	<Menu bind:menuOpen />
{/if} 
<Header bind:menuOpen {heroInView} {aboutInView} {showWordmark} {footerInView}/>
<main>
	<slot />
	<IntersectionObserver element={menuTrigger} bind:intersecting={heroInView}>
		<div class="trigger menu-trigger" bind:this={menuTrigger} />
	</IntersectionObserver>
	<IntersectionObserver element={logoTrigger} bind:intersecting={showWordmark}>
		<div class="trigger logo-trigger" bind:this={logoTrigger} />
	</IntersectionObserver>
	<IntersectionObserver element={menuTriggerTwo} bind:intersecting={aboutInView}>
		<div class="trigger menu-trigger menu-trigger--2" bind:this={menuTriggerTwo} />
	</IntersectionObserver>
</main>
<IntersectionObserver element={footerTrigger} bind:intersecting={footerInView}>
	<div class="trigger footer-trigger" bind:this={footerTrigger} />
</IntersectionObserver>
<Footer />

<style lang="scss">
	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
		overflow: hidden;
	}
	.trigger {
		z-index: 9999999;
		visibility: hidden;
		background-color: red;
	}
	.menu-trigger {
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 90vh;
		left: 0;
		&--2 {
			top: 330vh;
			@media (max-width: 1024px) {
				top: 500vh;
			}
		}
	}
	.logo-trigger {
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 20vh;
		left: 0;
	}
	.footer-trigger {
		z-index: 9999999999999;
		position: absolute;
		height: 1px;
		width: 100vw;
		bottom: 40vh;
		left: 0;
	}
</style>
