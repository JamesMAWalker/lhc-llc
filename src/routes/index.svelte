<script context="module">
	export const prerender = true;
</script>

<script>
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte'

	import Hero from '$lib/index/Hero.svelte';
	import Services from '$lib/index/Services.svelte';
	import About from '$lib/About.svelte';
	import CaseStudies from '$lib/case-studies/CaseStudies.svelte';

	let deviceWidth = getContext('deviceWidth')
</script>

<svelte:head>
	<title>Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="landing" transition:fade>
	<Hero {deviceWidth}/>
	<Services {deviceWidth}/>
	<About {deviceWidth}/>
	<CaseStudies {deviceWidth}/>
</div>

<style lang="scss">
	.landing {
		background-color: transparent;
		overflow: hidden;
	}
</style>
