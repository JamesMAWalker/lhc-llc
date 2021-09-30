<script>
	import SectionHeader from '$lib/SectionHeader.svelte';
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import Arrow from '$lib/Arrow.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	let services = [
		{
			title: 'Server Racking',
			imgSrc: '/services/server.jpg'
		},
		{
			title: 'Internet & VoIP',
			imgSrc: '/services/voip.jpg'
		},
		{
			title: 'Fiber Optics',
			imgSrc: '/services/fiber.jpg'
		},
		{
			title: 'Security Systems',
			imgSrc: '/services/security.jpg'
		},
		{
			title: 'Server Repair',
			imgSrc: '/services/repair.jpg'
		}
	];

	let scrollIndex = 0;
	let scrollPosition = 0;
	let servicesScrolled;

	const scrollServices = (direction) => {
		const scrollDistance = 23.5;

		// prevent scroll if already translated
		if (servicesScrolled) return;

		if (direction === 'right' && scrollIndex <= 2) {
			scrollIndex++;
		} else if (direction === 'left' && scrollIndex > 0) {
			scrollIndex--;
		}
		scrollPosition = scrollDistance * scrollIndex;
	};
</script>

<section class="services">
	<div class="bgcircle-wrap">
		<BGCircle />
	</div>
	<ContainerSixty>
		<div class="upper">
			<SectionHeader sub={'What we Do'} titleBlue={'services &'} titleYellow={'solutions'} />
			<div class="arrows">
				<span on:click={() => scrollServices('left')}
					><Arrow filled={scrollIndex !== 0} direction="left" /></span
				>
				<span on:click={() => scrollServices('right')}
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
				servicesScrolled = e.target.scrollLeft > 0;
			}}
		>
			<ul class="services__list" style={`transform: translate(-${scrollPosition}vw)`}>
				{#each services as { title, imgSrc } (title)}
					<li class="service">
						<img src={imgSrc} alt={title} class="image" />
						<div class="service-title"><span class="ring" />{title}</div>
					</li>
				{/each}
			</ul>
		</div>
	</ContainerSixty>
</section>

<style lang="scss">
	.bgcircle-wrap {
		position: absolute;
		left: 40%;
	}
	.services {
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
			min-width: 140vw;
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
			height: 50vh;
			width: 20vw;
			padding-right: var(--space-5xl);
			overflow: hidden;
			&-title {
				z-index: var(--level-one);
				position: absolute;
				bottom: var(--space-3xl);
				left: var(--space-3xl);
				width: 30%;
				line-height: 100%;
				word-break: break-word;
				font-size: var(--text-header);
				font-weight: 600;
				color: var(--white);
				span {
					position: absolute;
					height: var(--circle-lg);
					width: var(--circle-lg);
					top: -15%;
					left: -15%;
					height: 60px;
					width: 60px;
					border-radius: var(--radius-rounded);
					border: 1px solid var(--accent-color);
				}
			}
			&::before {
				z-index: var(--level-one);
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: calc(100% - var(--space-5xl));
				background-color: var(--primary-tr2);
			}
		}
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			object-position: center;
			filter: saturate(0.6);
		}
	}
	.upper {
		width: 100%;
		margin-bottom: var(--space-5xl);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.arrows {
			z-index: var(--level-two);
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
