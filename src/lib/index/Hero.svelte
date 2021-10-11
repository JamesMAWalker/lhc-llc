<script>
  import Loading from './Loading.svelte';
	import DiscButton from '$lib/buttons/disc-button.svelte';
	import RingButton from '$lib/buttons/ring-button.svelte';

	import { draw, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import SectionHeader from '$lib/SectionHeader.svelte';
	import BGLogo from '$lib/background/BGLogo.svelte';
	import Arrow from '$lib/Arrow.svelte';

	let mounted = false;
	let loadingDelay = true;
	let videoLoaded = false;
	
	onMount(() => {
		mounted = true;
	});
	
	setTimeout(() => {
		loadingDelay = false;
	}, 1500);

	let circleHeight;
	let svgEl;
	let deviceWidth;
	let deviceHeight;
	let isMobile;
	$: {
		isMobile = deviceWidth < 1024;
	}

	// TODO: Clicking links is causing deviceWidth to reset. 

	// Detect Firefox
	var isFirefox = typeof InstallTrigger !== 'undefined';

	$: {
		if (svgEl !== undefined) {
			setTimeout(() => {
				const cutoutHeight = svgEl.height.animVal.value;
				circleHeight = cutoutHeight * `${isFirefox ? 0.3 : 0.42}`;
			}, 100);
		}
	}

	const scrollToServices = () => {
		window.scrollTo(0, deviceHeight)
	}
	

</script>

<svelte:window bind:innerHeight={deviceHeight} />

{#if mounted && !loadingDelay}
	<section class="hero" in:fade={{ duration: 1000 }} bind:clientWidth={deviceWidth}>
		<video
			class="hero-vid"
			autoplay
			bind:seekable={videoLoaded}
			class:loaded={videoLoaded}
			muted
			on:load={() => console.log('video loaded')}
			loop
			src="https://res.cloudinary.com/jameswalker-work/video/upload/q_60/v1632240871/cabling-vids_xitbot.mp4"
			alt="slow pan over ethernet cables"
		>
			<track kind="captions" />
		</video>
		{#if mounted}
			<svg
				class="hero-circle"
				height={circleHeight}
				viewBox="0 0 396 396"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={!isMobile ? { duration: 1200 } : { duration: 3000 }}
					d="M395.5 198C395.5 307.076 307.076 395.5 198 395.5C88.9238 395.5 0.5 307.076 0.5 198C0.5 88.9238 88.9238 0.5 198 0.5C307.076 0.5 395.5 88.9238 395.5 198Z"
					stroke="#F5DA4E"
				/>
			</svg>
		{/if}
		{#if !isMobile}
			<div class="left-content">
				<div class="bglogo-wrap">
					<BGLogo />
				</div>
				<SectionHeader titleMainColor="Cabling <br> Service & <br> Expertise." />
				<p class="text">
					Datacom is your comprehensive solution for cabling services from fiber optic networking to
					video security.
				</p>
				<RingButton link="/#services" />
			</div>
			<svg
				class="left"
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1260 1500"
				bind:this={svgEl}
			>
				<path
					d="M1000,1609V3109H2260V2646.5c-157.72,0-287.5-129.78-287.5-287.5s129.78-287.5,287.5-287.5V1609Z"
					transform="translate(-1000 -1609)"
				/>
			</svg>
		{/if}
		<div class="right" />
		<div class="center">
			<h1>Your structured cabling <span class="accent">solution.</span></h1>
			<DiscButton />
		</div>
		{#if isMobile}
			<div class="arrow-mobile" on:click={scrollToServices}>
				<Arrow filled />
			</div>
		{/if}
	</section>
{:else}
	<!-- else content here -->
	<Loading/>
{/if}

<style lang="scss">
	.loading {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
	}
	.hero {
		position: relative;
		height: 101vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		/* overflow: hidden; */
		&-vid {
			z-index: var(--base-one);
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			opacity: 0;
			transform: rotateY(180deg) scale(1.75) translate(17vh, 16vh);
			transition: opacity 2s ease-in-out;
			@media (max-width: 1024px) {
				transform: rotateY(180deg) scale(4) translate(20vw, 0);
			}
			&.loaded {
				opacity: 1;
			}
		}
	}
	.left {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-100%, -50%);
		min-width: 52vw;
		min-height: 102vh;
		background-color: transparent;
		fill: white;
		/* background-image: url('/cut-out.png'); */
	}
	.left-content {
		z-index: var(--level-one);
		position: absolute;
		bottom: 17.5%;
		left: 15%;
		transform: scale(1.1);
		.bglogo-wrap {
			z-index: var(--base-one);
			position: absolute;
			bottom: -20vh;
			left: -27vh;
		}
		.text {
			margin-top: var(--title-margin);
			color: var(--text-color);
			width: 25%;
		}
	}
	.right {
		height: 100%;
		width: 100%;
		background-color: var(--primary-tr1);
	}
	.hero-circle {
		z-index: var(--level-eight);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-0.25turn);
		@media (max-width: 1024px) {
			height: 42vh;
		}
	}
	.center {
		z-index: var(--level-eight);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-59%, -50%);
		width: 20vh;
		color: var(--white);
		@media (max-width: 1025px) {
			transform: translate(-59%, -50%) scale(.8);
		}
		h1 {
			margin: 0;
			text-align: left;
			line-height: 110%;
			letter-spacing: 1.5px;
			font-size: var(--text-display);
			font-weight: 600;
			.accent {
				color: var(--accent-color);
			}
		}
		.disc-button {
			z-index: var(--level-one);
			cursor: pointer;
			position: relative;
			margin-top: 1rem;
			padding-left: 1rem;
			font-size: var(--text-xl);
			font-weight: 700;
			color: var(--white);
			background-color: transparent;
			border: none;
			&:hover {
				.disc {
					transform: translate(-5%, -45%) scale(1.1);
				}
			}
			.disc {
				z-index: var(--base-one);
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(-5%, -45%);
				height: var(--circle-med);
				width: var(--circle-med);
				height: 40px;
				width: 40px;
				background-color: var(--accent-tr1);
				border-radius: var(--radius-rounded);
			}
		}
	}
	.arrow-mobile {
		z-index: var(--level-one);
		position: absolute;
		bottom: var(--vp-md);
		left: 50%;
		transform: translateX(-50%) scale(0.6) rotate(-90deg);
		opacity: 0.2;
		animation: 1.5s infinite alternate ease-out pulse;
	}
	@keyframes pulse {
		from {
			opacity: 0.2;
		}
		to {
			opacity: 0.8;
		}
	}
</style>
