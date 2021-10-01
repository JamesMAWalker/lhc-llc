<script>
	import { fade, draw } from 'svelte/transition';

	import SectionHeader from '$lib/SectionHeader.svelte';
	import RingButton from '../../lib/buttons/ring-button.svelte';
</script>

<!-- markup (zero or more items) goes here -->
<div class="service-page" transition:fade>
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
		<svg
			class="hero-circle"
			height="46vh"
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
		<div class="image-circle">
      <div class="image-shade"/>
			<img src="/services/server-blade.jpg" alt="" class="hero-img" />
		</div>
	</div>
</div>

<style lang="scss">
	.service-page {
		height: 100vh;
		width: 100vw;
		background-color: var(--white);
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.blurb-container {
		height: 60%;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.blurb {
			margin-top: var(--space-lg);
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
</style>
