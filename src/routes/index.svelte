<script context="module">
	export const prerender = true;
</script>

<script>
import Hero from '$lib/index/Hero.svelte'
import Services from '$lib/index/Services.svelte'

</script>

<svelte:head>
	<title>Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect"	 href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="landing">
	<Hero/>
	<Services />
</div>

<style lang="scss">
	.landing {
		background-color: transparent;
	}
</style>
