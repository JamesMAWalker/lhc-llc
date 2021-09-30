<script>
	import { draw } from 'svelte/transition';
	import { onMount } from 'svelte';

	import SectionHeader from '$lib/SectionHeader.svelte';
	import BGLogo from '$lib/background/BGLogo.svelte'

	let pageLoaded = false;

	onMount(() => {
		pageLoaded = true;
	});

	/*
	 TODO: The below code works, but is VERY hacky. 
	 Find a more elegant solution.
	*/

	let circleHeight;
	let svgEl;

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
</script>

<section class="hero">
	<video
		class="hero-vid"
		autoplay
		muted
		loop
		src="https://res.cloudinary.com/jameswalker-work/video/upload/q_60/v1632240871/cabling-vids_xitbot.mp4"
		alt="slow pan over ethernet cables"
	>
		<track kind="captions" />
	</video>
	{#if pageLoaded}
		<svg
			class="hero-circle"
			height={circleHeight}
			viewBox="0 0 396 396"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				in:draw={{ duration: 1200 }}
				d="M395.5 198C395.5 307.076 307.076 395.5 198 395.5C88.9238 395.5 0.5 307.076 0.5 198C0.5 88.9238 88.9238 0.5 198 0.5C307.076 0.5 395.5 88.9238 395.5 198Z"
				stroke="#F5DA4E"
			/>
		</svg>
	{/if}
	<!-- <div class="left" /> -->
	<div class="left-content">
		<div class="bglogo-wrap">
			<BGLogo />
		</div>
		<SectionHeader titleMainColor="Cabling <br> Service & <br> Expertise." />
		<p class="text">
			Datacom is your comprehensive solution for cabling services from fiber optic networking to
			video security.
		</p>
		<button class="btn"><span class="ring"/>	services <span class="down-arr">↓</span></button>
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

	<div class="right" />
	<div class="center">
		<h1>Your structured cabling <span class="accent">solution.</span></h1>
		<div class="button">
			<span class="circle--fade" />
			learn more
		</div>
	</div>
</section>

<style lang="scss">
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
			transform: rotateY(180deg) scale(1.75) translate(17vh, 12vh);
			transition: opacity 2s ease-in-out;
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
			opacity: .6;
		}
		.text {
			margin-top: var(--space-lg);
			color: var(--text-color);
			width: 25%;
		}
		button {
			position: relative;
			margin-top: var(--space-lg);
			background-color: transparent;
			border: none;
			color: var(--text-color);
			font-size: var(--text-prose);
			font-weight: var(--semibold);
			.down-arr {
				color: var(--accent-color);
			}
			.ring {
				z-index: var(--base-one);
				position: absolute;
				top: 50%;
				left: -5%;
				transform: translateY(-50%);
				height: 30px;
				width: 30px;
				border-radius: var(--radius-rounded);
				border: 1px solid var(--accent-color);
			}
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
		/* top: 50%;
		left: 50%;
		height: 47vh;
		height: calc((((75vw - 80vh) / 2) + 100vh) * 0.4);
		transform: translate(-50%, -50.05%) rotate(-0.25turn); */
	}
	.center {
		z-index: var(--level-two);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-59%, -50%);
		width: 20vh;
		color: var(--white);
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
		.button {
			z-index: var(--level-one);
			cursor: pointer;
			position: relative;
			margin-top: 1rem;
			padding-left: 1rem;
			font-size: var(--text-xl);
			font-weight: 700;
			&:hover {
				.circle--fade {
					transform: translate(-5%, -45%) scale(1.1);
				}
			}
			.circle--fade {
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
</style>
