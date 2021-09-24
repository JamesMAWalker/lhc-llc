<script>
	import Header from '$lib/header/Header.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';

	let menuOpen = false;
</script>

{#if menuOpen}
	 <Menu />
{/if}
<Header bind:menuOpen={menuOpen} />
<main>
	<slot />
</main>

<footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
	}
</style>
