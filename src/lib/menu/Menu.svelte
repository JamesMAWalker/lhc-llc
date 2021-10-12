<script>
	import { slide, fade } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import BGLogo from '$lib/background/BGLogo.svelte';
	import Yelp from '$lib/icons/Yelp.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import { goto } from '$app/navigation';

	export let menuOpen;

	let menuOptions = [
		{
			text: 'home',
			path: '/'
		},
		{
			text: 'about',
			path: '/#about'
		},
		{
			text: 'services',
			path: '/#services'
		},
		{
			text: 'case studies',
			path: '/#case-studies'
		},
		{
			text: 'location',
			path: '/'
		},
		{
			text: 'contact',
			path: '/contact'
		}
	];

	const handleMenuClick = (path) => {
		menuOpen = false;
		setTimeout(() => {
			goto(path);
		}, 600);
	};
</script>

<nav class="menu" transition:slide={{ duration: 1000, easing: expoInOut }}>
	<div class="left">
		{#if menuOpen}
			<ul class="menu-options" in:fade={{ delay: 750 }} out:fade>
				<h6 class="label">MENU</h6>
				{#each menuOptions as { text, path } (text)}
					<li class="option">
						<span on:click={() => handleMenuClick(path)}>{text}</span>
					</li>
				{/each}
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
		@media (max-width: 1024px) {
			height: -webkit-fill-avaialble !important;
			flex-direction: column;
			background-color: var(--deep-cyan);
		}
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
		@media (max-width: 1024px) {
			height: 60%;	
			margin-left: var(--space-2xl);
			margin: 0;
			justify-content: flex-end;
			background-color: var(--deep-cyan);
		}
		.bglogo-wrap {
			z-index: 1;
			position: absolute;
			bottom: -5vh;
			left: -6vh;
			transform: scale(1.1);
			@media (max-width: 1024px) {
				display: none;
			}
		}
		.menu-options {
			z-index: 2;
			padding-bottom: var(--space-5xl);
			margin-left: -2vw;
			list-style: none;
			color: var(--text-color);
			font-size: var(--text-header);
			font-weight: var(--semibold);
			@media (max-width: 1024px) {
				font-size: 20px;
				margin: 0;
				padding: 0;
				padding-bottom: var(--space-xl);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				 .option span {
					color: var(--white) !important;
					transform: scale(1.5);
				}
			}
			h6 {
				font-size: var(--text-lg);
				font-weight: var(--light);
				margin-bottom: var(--space-xl);
			}
			li {
				padding-bottom: var(--space-lg);
				span {
					cursor: pointer;
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
		@media (max-width: 1024px) {
			height: 40%;
			margin: 0;
			margin-left: var(--space-2xl);
			background-color: var(--deep-cyan);
		}
		.contact {
			height: calc(100% - 10vw);
			width: calc(100% - 10vw);
			margin: 5vw;
			color: var(--white);
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			font-size: var(--text-lg);
			@media (max-width: 1024px) {
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
			}
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
	.social {
		@media (max-width: 1024px) {
			margin-top: var(--space-2xl	);
			display: flex;
			justify-content: space-between;
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
		@media (max-width: 1024px) {
			margin: 0;
			margin-right: var(--space-lg);
		}
	}
	:global(.social svg path) {
		&:hover {
			fill: var(--accent-color);
		}
	}
</style>
