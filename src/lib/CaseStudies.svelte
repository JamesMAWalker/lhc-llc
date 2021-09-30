<script>
	import SectionHeader from '$lib/SectionHeader.svelte';
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import Arrow from '$lib/Arrow.svelte';

	let services = [
		{
			// title: 'imgIX Data Center',
			title: '<div>imgIX <br> Data Center</div>',
			blurb: 'Delivering a custom solution for an innovative start-up.',
			imgSrc: '/case-studies/server-tower.jpg'
		},
		{
			title: '<div>Security at <br> YS Athletics</div>',
			blurb: 'Clean and tamper-proof installation provides security and peace of mind.',
			imgSrc: '/case-studies/security.jpg'
		},
		{
			title: '<div>Oakpark <br> Logistics Hub</div>',
			blurb: 'Providing core infrastructure improvements when downtime is not an option.',
			imgSrc: '/case-studies/logistics.jpg'
		},
		{
			title: '<div>Lawndale <br> City College</div>',
			blurb: 'Optimizing networks to improve remote learning facilities.',
			imgSrc: '/case-studies/campus.jpg'
		},
		{
			title: '<div>Eastbank <br> Credit Union</div>',
			blurb: 'Improving customer experience through VoIP and modernized tools.',
			imgSrc: '/case-studies/front-desk.jpg'
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

<section class="case-studies">
	<ContainerSixty>
		<div class="upper">
			<div class="upper-left">
				<SectionHeader
					sub={'HOW WE WORK'}
					titleMainColor={'services &'}
					titleYellow={'solutions'}
				/>
				<div class="section-blurb">
					See how we approach each unique issue with a tailored solution.
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
				{#each services as { imgSrc, title, blurb } (title)}
					<li class="service">
						<img src={imgSrc} alt={title} class="image" />
						<div class="service-title">
							<span class="disc" />
							{@html title}
							<span class="arrow-wrap">
								<Arrow direction="right" filled />
							</span>
							<div class="service-blurb">
								{blurb}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</ContainerSixty>
</section>

<style lang="scss">
	.case-studies {
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
		}
		.service {
			-webkit-user-select: none;
			position: relative;
			height: 40vh;
			width: 30vw;
			margin-right: var(--space-5xl);
			overflow: hidden;
			&:hover {
				.arrow-wrap {
					transform: translate(50%, -50%);
					opacity: 1;
				}
				.disc {
					background-color: var(--accent-color);
					transform: scale(.8);
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
	}

	.upper {
		width: 100%;
		margin-bottom: var(--space-5xl);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.section-blurb {
			width: 65%;
			font-size: var(--text-lg);
			color: var(--text-color);
		}
		.arrows {
			width: 200px;
			width: var(--vp-2xl);
			display: flex;
			align-items: center;
			justify-content: space-between;
			/* span:first-child{
				padding-right: var(--space-5xl);
			} */
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
	}
</style>
