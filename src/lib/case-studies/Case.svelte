<script>
	import { goto } from '$app/navigation';

	import Arrow from '$lib/Arrow.svelte';

	export let imgSrc;
	export let title;
	export let blurb;
	export let height = '40vh';
	export let width = '30vw';
</script>

<li class="case" style="height: {height}; width: {width}" on:click={() => goto('/case-studies')}>
	<img src={imgSrc} alt={title} class="image" />
	<div class="case-title">
		<span class="disc" />
		{@html title}
		<span class="arrow-wrap">
			<Arrow direction="right" filled={true} />
		</span>
		<div class="case-blurb">
			{blurb}
		</div>
	</div>
</li>

<style lang="scss">
	.case {
		-webkit-user-select: none;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		@media (max-width: 1024px) {
			width: 90vw !important;
			height: 50vh !important;
			margin: 0 !important;
			margin-bottom: 5vw !important;
		}
		&:not(:last-child) {
			margin-right: var(--space-5xl);
		}
		&:hover {
			.arrow-wrap {
				transform: translate(50%, -50%);
				opacity: 1;
			}
			.disc {
				background-color: var(--accent-color);
				transform: scale(0.8);
			}
			img {
				transform: scale(1.1);
			}
		}
		&-blurb {
			position: absolute;
			margin-top: var(--space-md);
			font-size: var(--text-md);
			font-weight: var(--body);
			line-height: 100%;
		}
		&-title {
			z-index: var(--level-one);
			position: absolute;
			bottom: 27.5%;
			left: var(--space-3xl);
			width: 40%;
			line-height: 100%;
			word-break: break-word;
			font-size: var(--text-header);
			font-weight: 600;
			color: var(--white);
			.disc {
				z-index: var(--base-one);
				position: absolute;
				height: var(--circle-lg);
				width: var(--circle-lg);
				top: -15%;
				left: -15%;
				height: 60px;
				width: 60px;
				border-radius: var(--radius-rounded);
				background-color: var(--accent-tr1);
				transition: var(--transition-2-smooth);
				will-change: color, transform;
			}
			.arrow-wrap {
				position: absolute;
				height: 100%;
				width: 20%;
				top: 100%;
				right: 0%;
				transform: translate(0%, -50%);
				opacity: 0;
				transition: var(--transition-2-smooth);
				will-change: transition, opacity;
			}
			:global(.arrow-wrap svg) {
				height: 50%;
			}
		}
		&::before {
			z-index: var(--level-one);
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: var(--dark-cyan-tr1);
		}
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
		filter: saturate(0.6);
		transition: var(--transition-2-smooth);
	}
</style>
