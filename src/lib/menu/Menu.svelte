<script>
	import { slide, fade } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import BGLogo from '$lib/background/BGLogo.svelte';
	import Yelp from '$lib/icons/Yelp.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';

	export let menuOpen;
</script>

<nav class="menu" transition:slide={{ duration: 1000, easing: expoInOut }}>
	<div class="left">
		{#if menuOpen}
			<ul class="menu-options" in:fade={{ delay: 750 }} out:fade>
				<h6 class="label">MENU</h6>
				<li class="option"><a on:click={() => menuOpen = false} href="/">home</a></li>
				<li class="option"><a on:click={() => menuOpen = false} href="/#about">about</a></li>
				<li class="option"><a on:click={() => menuOpen = false} href="/#services">services</a></li>
				<li class="option"><a on:click={() => menuOpen = false} href="/#case-studies">case studies</a></li>
				<li class="option"><a on:click={() => menuOpen = false} href="/">locations</a></li>
				<li class="option"><a on:click={() => menuOpen = false} href="/contact">contact</a></li>
			</ul>
		{/if}
		<div class="bglogo-wrap">
			<BGLogo />
		</div>
	</div>
	<div class="right">
		{#if menuOpen}
			<div class="contact" in:fade={{ delay: 750 }} out:fade>
				<div class="info">
					<h6>GET IN TOUCH</h6>
					<div class="email">contact@datacom.llc</div>
					<div class="number">555 . 123 . 4567</div>
				</div>
				<div class="social">
					<LinkedIn />
					<Yelp />
					<Facebook />
				</div>
			</div>
		{/if}
	</div>
</nav>

<style lang="scss">
	.menu {
		z-index: var(--level-nine);
		position: fixed;
		top: 0;
		left: 0;
		height: 101vh;
		width: 101vw;
		background-color: var(--white);
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.left {
		isolation: isolate;
		position: relative;
		height: 100%;
		width: 38vw;
		margin-bottom: var(--vp-lg);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-color: var(--white);
		.bglogo-wrap {
			z-index: 1;
			position: absolute;
			bottom: -5vh;
			left: -6vh;
			transform: scale(1.1);
		}
		.menu-options {
			z-index: 2;
			padding-bottom: var(--space-5xl);
			margin-left: -2vw;
			list-style: none;
			color: var(--text-color);
			font-size: var(--text-header);
			font-weight: var(--semibold);
			h6 {
				font-size: var(--text-lg);
				font-weight: var(--light);
				margin-bottom: var(--space-xl);
			}
			li {
				padding-bottom: var(--space-lg);
				a {
					color: var(--text-color) !important;
					transition: var(--transition-3-smooth);
					&:hover {
						color: var(--accent-color) !important;
					}
				}
			}
		}
	}
	.right {
		height: 100%;
		width: 62vw;
		background-color: var(--deep-cyan-tr4);
		.contact {
			height: calc(100% - 10vw);
			width: calc(100% - 10vw);
			margin: 5vw;
			color: var(--white);
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			font-size: var(--text-lg);
			h6 {
				margin: 0;
				margin-bottom: var(--space-lg);
			}
			.email,
			.number {
				font-weight: var(--semibold);
				padding-bottom: var(--space-md);
				color: var(--accent-color);
				transition: var(--transition-3-smooth);
				&:hover {
					color: var(--white);
				}
			}
		}
	}
	:global(.social svg) {
		cursor: pointer;
		margin-left: var(--space-lg);
		transition: var(--transition-3-smooth);
		&:hover {
			path {
				fill: var(--accent-color);
			}
		}
	}
	:global(.social svg path) {
		&:hover {
			fill: var(--accent-color);
		}
	}
</style>
