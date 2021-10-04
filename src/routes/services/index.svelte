<script>
	import { fade, draw } from 'svelte/transition';

	import SectionHeader from '$lib/SectionHeader.svelte';
	import RingButton from '../../lib/buttons/ring-button.svelte';
	import ContainerFifty from '$lib/containers/ContainerFifty.svelte';
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	let loaded = false;
	let centerCircle;
	// $: {
	// 	if (centerCircle !== undefined) {
	// 		let size = scrollContainer.scrollTop / 100
	// 		console.log('size: ', size);
	// 	}
	// }

	const handleScroll = (e) => {
		let size = e.target.scrollTop / 100;
		console.log('size: ', size);
		centerCircle.style.transform = `translate(-50%, -50%) scale(${1 + 0.9 * size})`;
	};

	setTimeout(() => {
		loaded = true;
	}, 200);

	let processList = [
		{
			title: 'technical consultation',
			steps: ['Dolor sit amet', 'Adipiscing elit', 'Mauris eu risus', 'Dapibus neque']
		},
		{
			title: 'patching services',
			steps: ['Dolor sit amet', 'Adipiscing elit', 'Mauris eu risus', 'Dapibus neque']
		},
		{
			title: 'network setup',
			steps: [
				'Dolor sit amet',
				'Adipiscing elit',
				'Mauris eu risus',
				'Dapibus neque',
				'Risus id metus',
				'Cras ornare'
			]
		},
		{
			title: 'server racking',
			steps: [
				'Dolor sit amet',
				'Adipiscing elit',
				'Mauris eu risus',
				'Dapibus neque',
				'Risus id metus',
				'Cras ornare'
			]
		},
		{
			title: 'server blades',
			steps: [
				'Dolor sit amet',
				'Adipiscing elit',
				'Mauris eu risus',
				'Dapibus neque',
				'Risus id metus',
				'Cras ornare'
			]
		},
		{
			title: 'system maintenance',
			steps: [
				'Dolor sit amet',
				'Adipiscing elit',
				'Mauris eu risus',
				'Dapibus neque',
				'Risus id metus',
				'Cras ornare'
			]
		}
	];
</script>

<!-- markup (zero or more items) goes here -->
<section class="service-hero" transition:fade>
	<div class="left">
		<div class="blurb-container">
			<SectionHeader sub="we develop" titleMainColor="server" titleYellow="solutions" />
			<p class="blurb">
				One of the most important pieces of equipment in any company’s data center will be its
				server racks, and these can come in a variety of different models and designs. You might use
				enclosed cabinets or open frame racks, and they can be two-post or four-post racks, but all
				of them serve to store the different kinds of equipment which are necessary to your network
				processing, and your computing capability.
			</p>
			<RingButton />
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
			<img src="/services/server-blade.jpg" alt="" class="hero-img" />
		</div>
	</div>
</section>
<section class="service-info">
	<ContainerFifty>
		<div class="left">
			<SectionHeader sub="how we work" titleMainColor="our" titleYellow="process" />
			<p class="blurb">
				Whether you're setting up a new datacenter or refitting an existing facility, you don't want
				to leave your company's data at risk. Our decades of experience with all manner of server
				form factors and ancillary technologies means that your server facility will be built with
				security, easy maintenance, and optimal functionality in mind.
				<br /><br />
				We also offer technical consultation for businesses without deep knowledge of server technologies.
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
	</ContainerFifty>
	<div class="bgcircle--scaling" bind:this={centerCircle} />
</section>
<section class="service-contact">
	<BGCircle />
	<ContainerSixty jcsb>
		<div class="left">
			<SectionHeader
				sub="CONTACT"
				titleMainColor="start your <br> networking project"
				titleYellow="today"
			/>
			<div class="blurb">
				We are there every step of the way for your mission critical systems. From design to
				installation to network management, your IT infrastructure remains secure and constant.
				<br /><br />
				Start your network architect services today in order to plan and evolve with the ever-changing
				technology advantages.
			</div>
			<div class="call">
				<span class="text">or call today</span>
				<span class="number">289 . 555 . 1234</span>
			</div>
		</div>
		<div class="right">
			<form class="contact-form">
				<input type="text" class="first" placeholder="First name" />
				<input type="text" class="last" placeholder="Last" />
				<input type="text" class="company" placeholder="Company name" />
				<input type="email" class="email" placeholder="Email address" />
				<textarea name="message" id="message" class="message" placeholder="Your message..." />
				<div class="captcha">
					<input type="checkbox">
					<div class="text">
						<span>I'm not a robot</span>
						<span class="privacy">Privacy • Terms</span>
					</div>
					<img src="/static/captcha.png" alt="captcha symbol">
				</div>
				<button class="submit" type="submit">send message</button>
			</form>
		</div>
	</ContainerSixty>
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
		height: 100vh;
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
					transform: scale(.6);
					transform-origin: left;
					color: var(--light-grey);
				}
				img {
					/* padding: ; */
				}
			}
			.submit {
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
