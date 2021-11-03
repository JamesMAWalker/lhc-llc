<script>
	import Testimonial from './Tstm.svelte';
	import Container from '$lib/containers/Container.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
	import Arrow from '$lib/Arrow.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	let testimonialData = [
		{
			quote:
				'Our business took off far more quickly than we anticipated, and our hardware simply couldn’t keep up. Datacom got us back on track quickly, and without interruption. Excellent work.',
			client: 'Abdullah Slimani',
			imgUrlFrag: 'abdullah_xdqqw2',
			company: 'imgIX Data Center',
			caseLink: '/'
		},
		{
			quote:
				'Even with our extremely close deadline , Datacom was able to help us choose the right security system and get it installed ahead of our launch, and inside our budget! Highly recommened. ',
			client: 'Chris McGeorge',
			imgUrlFrag: 'chris_fjcgld',
			company: 'YSA Athletics',
			caseLink: '/'
		},
		{
			quote:
				'With online learning becoming more important in higher education, we needed a network refresh more than ever. Datacom assessed our issues, and was quickly able to execute. We couldn’t be happier.',
			client: 'Eleanor Nakahara',
			imgUrlFrag: 'eleanor_n2tmgn',
			company: 'Hayward City College',
			caseLink: '/'
		},
		{
			quote:
				'With online learning becoming more important in higher education, we needed a network refresh more than ever. Datacom assessed our issues, and was quickly able to execute. We couldn’t be happier.',
			client: 'Besty Graham',
			imgUrlFrag: 'betsy_c9aybh',
			company: 'Hayward City College',
			caseLink: '/'
		},
		{
			quote:
				'With online learning becoming more important in higher education, we needed a network refresh more than ever. Datacom assessed our issues, and was quickly able to execute. We couldn’t be happier.',
			client: 'Patrice Beaumont',
			imgUrlFrag: 'patrice_zwdnin',
			company: 'Hayward City College',
			caseLink: '/'
		},
	];

	let scrollIndex = 0;
	let scrollPosition = 0;
	let casesScrolled;

	const scrollCases = (direction) => {
		const scrollDistance = 35;

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

<section class="testimonials" id="testimonials">
	<div class="bgcircle-wrap">
		<BGCircle />
	</div>
	<Container column>
		<div class="upper">
			<div class="upper-left">
				<SectionHeader
					sub={'HOW WE WORK'}
					titleMainColor={'customer'}
					titleYellow={'testimonials'}
				/>
				<div class="section-blurb">
					We strive to build strong relationships with our customers. Read their thoughts on our
					work.
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
			<ul class="testimonials__list" style={`transform: translate(-${scrollPosition}vw)`}>
				{#each testimonialData as { client, company, quote, imgUrlFrag, caseLink: link } (client)}
					<Testimonial {client} {imgUrlFrag} {company} {quote} {link} />
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
	.testimonials {
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
				padding: 0;
				min-width: 520vw;
				/* flex-direction: column;
				justify-content: center;
				align-items: center; */
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

