<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>


<Header />
<main>
	<slot/>
</main>

<footer>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
	}

</style>
