<script>
	import IntersectionObserver from "svelte-intersection-observer";

	import Header from '$lib/header/Header.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';

	let menuOpen = false;

	let menuTrigger;
	let menuIsWhite = false;
</script>

{#if menuOpen}
	 <Menu />
{/if}
<Header bind:menuOpen={menuOpen} {menuIsWhite} />
<main>
	<slot 	/>
	<IntersectionObserver element={menuTrigger} bind:intersecting={menuIsWhite}>
		<div class="intersection-point" bind:this={menuTrigger}></div>
	</IntersectionObserver>
</main>

<footer />

<style>
	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
	}
	.intersection-point {
		z-index: 99;
		position: absolute;
		height: 1px;
		width: 100vw;
		top: 90vh;
		left: 0;
		background-color: transparent;
	}
</style>
