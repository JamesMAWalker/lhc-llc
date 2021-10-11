<script>
	import { fade, draw } from 'svelte/transition';
	import { page } from '$app/stores';

	import ContactForm from '../../lib/ContactForm.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
	import RingButton from '../../lib/buttons/ring-button.svelte';
	import Container from '$lib/containers/Container.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	import { services } from '$lib/data/services';

	let loaded = false;
	let centerCircle;
	let currentService = $page.params.services;

	let {
		title,
		imgUrlFrag,
		heroHeader: hero,
		heroBlurb,
		infoHeader: info,
		infoBlurb,
		processList,
		contactHeader: contact,
		contactBlurb
	} = services[currentService];

	const handleScroll = (e) => {
		let size = e.target.scrollTop / 100;
		centerCircle.style.transform = `translate(-50%, -50%) scale(${1 + 0.9 * size})`;
	};

	setTimeout(() => {
		loaded = true;
	}, 200);
</script>

<!-- markup (zero or more items) goes here -->
<section class="service-hero" transition:fade>
	<div class="left">
		<div class="blurb-container">
			<SectionHeader
				sub={hero.sub}
				titleMainColor={hero.mainColor}
				titleYellow={hero.accentColor}
			/>
			<p class="blurb">
				{heroBlurb}
			</p>
			<RingButton link="/services/#info" />
		</div>
	</div>
	<div class="right">
		{#if loaded}
			<svg
				class="hero-circle"
				height="46vh"
				viewBox="0 0 396 396"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				transform="rotate(180)"
			>
				<path
					in:draw={{ delay: 500, duration: 1200 }}
					d="M395.5 198C395.5 307.076 307.076 395.5 198 395.5C88.9238 395.5 0.5 307.076 0.5 198C0.5 88.9238 88.9238 0.5 198 0.5C307.076 0.5 395.5 88.9238 395.5 198Z"
					stroke="#F5DA4E"
				/>
			</svg>
		{/if}
		<div class="image-circle">
			<div class="image-shade" />
			<img src={`https://res.cloudinary.com/datacom-cabling/image/upload/f_auto,q_75/v1633947679/services/${imgUrlFrag}`} alt={title} class="hero-img" />
		</div>
	</div>
</section>
<section class="service-info" id="info">
	<Container fifty>
		<div class="left">
			<SectionHeader
				sub={info.sub}
				titleMainColor={info.mainColor}
				titleYellow={info.accentColor}
			/>
			<p class="blurb">
        {@html infoBlurb}
      </p>
		</div>
		<div class="right" on:scroll={(e) => handleScroll(e)}>
			<div class="process-steps">
				{#each processList as { title, steps }, idx (title)}
					<div class="process-block">
						<h4 class="step-title"><span>0{idx + 1}&nbsp;</span>{title}</h4>
						<ul class="steps-list">
							{#each steps as step (step)}
								<li class="step">{step}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</Container>
	<div class="bgcircle--scaling" bind:this={centerCircle} />
</section>
<section class="service-contact">
	<BGCircle />
	<Container jcsb>
		<div class="left">
			<SectionHeader
				sub={contact.sub}
				titleMainColor={contact.mainColor}
				titleYellow={contact.accentColor}
			/>
			<div class="blurb">
				{@html contactBlurb}
			</div>
			<div class="call">
				<span class="text">or call today</span>
				<span class="number">289 . 555 . 1234</span>
			</div>
		</div>
		<div class="right">
			<ContactForm />
		</div>
	</Container>
</section>

<style lang="scss">
	.service-hero {
		height: 100vh;
		width: 100vw;
		background-color: var(--white);
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		.hero-circle {
			path {
				stroke-dashoffset: 78.5%;
			}
		}
	}
	.blurb-container {
		height: 60%;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.blurb {
			margin-top: var(--title-margin);
			margin-bottom: var(--space-lg);
			width: 75%;
		}
	}
	.left {
		height: 100vh;
		width: 62vw;
		background-color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right {
		position: relative;
		height: 100vh;
		width: 38vw;
		background-color: var(--deep-cyan-tr);
		.image-circle {
			position: absolute;
			height: 42vh;
			width: 42vh;
			top: 50%;
			left: 0%;
			transform: translate(-50%, -50%);
			border-radius: var(--radius-rounded);
			border: 2px solid var(--barely-grey);
			overflow: hidden;
		}
		.image-shade {
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: var(--primary-tr2);
		}
		.hero-img {
			height: 110%;
			width: 110%;
			object-fit: cover;
			object-position: right;
		}
		.hero-circle {
			position: absolute;
			top: 50%;
			left: 0%;
			transform: translate(-50%, -50%);
		}
	}

	.service-info {
		overflow: hidden;
		position: relative;
		height: 100vh;
		width: 100vw;
		background-color: var(--deep-cyan-tr3);
		display: flex;
		align-items: center;
		justify-content: center;
		.left {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			background-color: var(--primary-tr1);
			background-color: transparent;
		}
		.right {
			width: 50%;
			height: 100vh;
			background-color: transparent;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			.process-block {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-evenly;
			}
			.process-steps {
				padding-top: var(--vp-lg);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
			}
			.step-title {
				margin-top: var(--title-margin);
				color: var(--primary-color);
				font-size: var(--text-xl);
				text-transform: uppercase;
				span {
					font-size: var(--text-3xl);
					color: var(--primary-tr1);
				}
			}
			.step {
				color: var(--primary-tr1);
				font-size: var(--text-lg);
				/* font-weight: var(--semibold); */
				margin-bottom: var(--space-xl);
				text-transform: uppercase;
			}
		}
		.blurb {
			margin-top: var(--title-margin);
			width: 90%;
			color: var(--text-color);
		}
		.bgcircle--scaling {
			z-index: var(--base-one);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 20vh;
			width: 20vh;
			background-color: var(--primary-tr2);
			border-radius: var(--radius-rounded);
			transform-origin: center;
			transition: var(--transition-1-smooth);
		}
	}

	.service-contact {
		position: relative;
		height: 120vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		.left {
			height: calc(70vh - var(--vp-lg));
			width: 30vw;
			padding-top: var(--vp-lg);
			margin-right: 5vw;
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: space-between;
			background-color: transparent;
			.blurb {
				margin-top: var(--title-margin);
				font-size: var(--text-lg);
				color: var(--text-color);
			}
			.call {
				margin-top: var(--space-3xl);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				font-size: var(--text-2xl);
				font-weight: var(--bold);
				.text {
					color: var(--text-color);
					margin-bottom: var(--space-lg);
				}
				.number {
					color: var(--accent-color);
				}
			}
		}
		.right {
			height: 70vh;
			width: 55vw;
			background-color: transparent;
			z-index: var(--level-top);
			.contact-form {
				height: 100%;
				width: 100%;
				display: grid;
				gap: var(--vp-md-sm);
				grid-template-rows: repeat(2, var(--vp-lg)) var(--vp-2xl) repeat(2, var(--vp-lg));
				grid-template-columns: repeat(2, 1fr);
			}
			.message {
				grid-column: 1 / -1;
				padding: var(--space-xl);
				&::-webkit-resizer {
					display: none;
				}
			}
			.captcha {
				grid-column: 1 / 2;
				grid-row: 4 / 5;
				padding: var(--space-lg);
				background-color: var(--barely-grey);
				display: flex;
				align-items: center;
				justify-content: space-between;
				input {
					margin: var(--space-lg);
					transform: scale(1.5);
				}
				.text {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
					margin-left: -20px;
				}
				.privacy {
					font-size: var(--text-xs);
					transform: scale(0.6);
					transform-origin: left;
					color: var(--light-grey);
				}
				img {
					/* padding: ; */
				}
			}
			.submit {
				cursor: pointer;
				grid-column: 1 / 2;
				grid-row: 5 / 6;
				height: 90%;
				width: 100%;
				border: none;
				background-color: var(--accent-color);
				color: var(--white);
			}
		}
	}
	:global(.service-contact svg) {
		position: absolute;
		z-index: var(--base-one);
		top: 17.5vh;
		left: 15vw;
		transform: scale(1.3);
	}
</style>
