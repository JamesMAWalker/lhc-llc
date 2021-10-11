<script>
	import Case from './Case.svelte';

	import { goto } from '$app/navigation';

	import SectionHeader from '$lib/SectionHeader.svelte';
	import Container from '$lib/containers/Container.svelte';
	import Arrow from '$lib/Arrow.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	let services = [
		{
			// title: 'imgIX Data Center',
			title: '<div>imgIX <br> Data Center</div>',
			blurb: 'Delivering a custom solution for an innovative start-up.',
			urlFrag: `server-tower_lbb7ia.jpg`,
		},
		{
			title: '<div>Security at <br> YS Athletics</div>',
			blurb: 'Clean and tamper-proof installation provides security and peace of mind.',
			urlFrag: `security_vgwpbm.jpg`,
		},
		{
			title: '<div>Oakpark <br> Logistics Hub</div>',
			blurb: 'Providing core infrastructure improvements when downtime is not an option.',
			urlFrag: `logistics_k1kkal.jpg`,
		},
		{
			title: '<div>Lawndale <br> City College</div>',
			blurb: 'Optimizing networks to improve remote learning facilities.',
			urlFrag: `campus_a8qeux.jpg`,
		},
		{
			title: '<div>Eastbank <br> Credit Union</div>',
			blurb: 'Improving customer experience through VoIP and modernized tools.',
			urlFrag: `office__front-desk_gcxpyv.jpg`,
		}
	];

	let scrollIndex = 0;
	let scrollPosition = 0;
	let casesScrolled;

	const scrollCases = (direction) => {
		const scrollDistance = 34;

		// prevent scroll if already translated
		if (casesScrolled) return;

		if (direction === 'right' && scrollIndex <= 2) {
			scrollIndex++;
		} else if (direction === 'left' && scrollIndex > 0) {
			scrollIndex--;
		}
		scrollPosition = scrollDistance * scrollIndex;
	};
</script>

<section class="case-studies" id="case-studies">
	<div class="bgcircle-wrap">
		<BGCircle />
	</div>
	<Container column>
		<div class="upper">
			<div class="upper-left">
				<SectionHeader sub={'HOW WE WORK'} titleMainColor={'case'} titleYellow={'studies'} />
				<div class="section-blurb">
					See how we approach each customer's unique set of issues with a tailored solution.
				</div>
			</div>
			<div class="arrows">
				<span on:click={() => scrollCases('left')}
					><Arrow filled={scrollIndex !== 0} direction="left" /></span
				>
				<span on:click={() => scrollCases('right')}
					><Arrow filled={scrollIndex !== 3} direction="right" /></span
				>
			</div>
		</div>
		<div
			class="lower"
			on:scroll={(e) => {
				if (scrollIndex > 0) {
					e.target.scrollLeft = 0;
				}
				casesScrolled = e.target.scrollLeft > 0;
			}}
		>
			<ul class="case-studies__list" style={`transform: translate(-${scrollPosition}vw)`}>
				{#each services as { urlFrag, title, blurb } (title)}
					<Case {urlFrag} {title} {blurb} />
				{/each}
			</ul>
		</div>
	</Container>
</section>

<style lang="scss">
	.bgcircle-wrap {
		z-index: var(--ground);
		position: absolute;
		top: 10%;
		left: -25%;
	}
	.case-studies {
		position: relative;
		height: 140vh;
		width: 100vw;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--white);
		overflow: hidden;
		&__list {
			min-width: 180vw;
			height: 50vh;
			margin: 0;
			padding: 0;
			padding-left: 20vw;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			overflow: visible;
			transition: var(--transition-1-smooth);
			will-change: transform;
			@media (max-width: 1024px) {
				height: max-content;
				min-width: 100%;
				padding: 0;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		@media (max-width: 1024px) {
			height: max-content;
			padding-top: var(--mobile-sec-margin);
		}
	}
	.upper {
		z-index: var(--level-top);
		width: 100%;
		margin-bottom: var(--space-5xl);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.section-blurb {
			width: 55%;
			margin-top: var(--title-margin);
			font-size: var(--text-lg);
			color: var(--text-color);
			@media (max-width: 1024px) {
				width: 90vw;
				margin-left: 5vw;
			}
		}
		.arrows {
			width: 200px;
			width: var(--vp-2xl);
			display: flex;
			align-items: center;
			justify-content: space-between;
			@media (max-width: 1024px) {
				display: none;
			}
		}
	}
	.lower {
		width: 100vw;
		transform: translateX(-20vw);
		height: max-content;
		overflow-x: scroll;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		&::-webkit-scrollbar {
			display: none;
		}
		@media (max-width: 1024px) {
			transform: unset;
		}
	}
</style>
