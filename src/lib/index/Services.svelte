<script>
	import SectionHeader from '$lib/SectionHeader.svelte';
	import Container from '$lib/containers/Container.svelte';
	import Arrow from '$lib/Arrow.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';

	let services = [
		{
			id: 'data001',
			path: 'data-facilities',
			title: 'Data Facilities',
			urlFrag: `server-blade_bzsxfx.jpg`, 
		},
		{
			id: 'netvoip002',
			path: 'voip',
			title: 'Internet & VoIP',
			urlFrag: `conference-room_wx0qgg.jpg`, 
		},
		{
			id: 'fiberopt003',
			path: 'fiber',
			title: 'Fiber <br> Optics',
			urlFrag: `more-cables_af6dis.jpg`, 
		},
		{
			id: 'security004',
			path: 'security',
			title: 'Security Systems',
			urlFrag: `security_apy2rj.jpg`, 
		},
		{
			id: 'serverrep005',
			path: 'server-repair',
			title: 'Server Repair',
			urlFrag: `server_rack_uo9hu6.jpg`, 
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

<section class="services" id="services">
	<div class="bgcircle-wrap">
		<BGCircle />
	</div>
	<Container column={true}>
		<div class="upper">
			<SectionHeader sub={'What we Do'} titleMainColor={'services &'} titleYellow={'solutions'} />
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
				{#each services as { title, urlFrag, id, path } (id)}
					<a class="service" href={`/services/`} class:server={id === 'data001'}>
						<img 
							src={`https://res.cloudinary.com/datacom-cabling/image/upload/f_auto,q_75/v1633947679/services/${urlFrag}`} 
							alt={title} 
							loading="eager"
							class="image" 
						/>
						<div class="service-title">
							<span class="disc" />{@html title}
							<div class="arrow-wrap arrow-wrap--service"><Arrow direction="right" filled /></div>
						</div>
					</a>
				{/each}
			</ul>
		</div>
	</Container>
</section>

<style lang="scss">
	.bgcircle-wrap {
		position: absolute;
		left: 40%;
	}
	:global(.arrow-wrap--service svg) {
		transform: scale(0.6) rotate(180deg);
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
		@media (max-width: 1024px) {
			height: max-content;
			padding-top: var(--vp-xl);
		}
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
			@media (max-width: 1024px) {
				height: max-content;
				flex-direction: column;
				min-width: 100vw;
				padding: 0;
			}
		}
		.service {
			-webkit-user-select: none;
			cursor: pointer;
			position: relative;
			height: 50vh;
			width: 20vw;
			margin-right: var(--space-5xl);
			overflow: hidden;
			@media (max-width: 1024px) {
				width: 90vw;
				margin: 0;
				margin-bottom: var(--vp-sm);
			}
			&.server {
				img {
					object-position: 75% 50%;
				}
			}
			&:hover {
				.arrow-wrap {
					transform: translate(0, -50%);
					opacity: 1;
				}
				.disc {
					transform: scale(0.8);
					background-color: var(--accent-color);
				}
				img {
					transform: scale(1.1);
				}
			}
			&-title {
				z-index: var(--level-one);
				position: absolute;
				bottom: var(--space-3xl);
				left: var(--space-3xl);
				width: 40%;
				line-height: 100%;
				word-break: break-word;
				font-size: var(--text-header);
				font-weight: 600;
				color: var(--white);
				.arrow-wrap {
					position: absolute;
					right: -25%;
					top: 50%;
					width: 20%;
					transform: translate(-50%, -50%);
					opacity: 0;
					transition: var(--transition-2-smooth);
				}
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
				}
			}
			&::before {
				z-index: var(--level-one);
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: calc(100% - var(--space-3xl));
				width: 100%;
				background-color: var(--primary-tr2);
			}
		}
		img {
			height: 100%;
			width: calc(100% - var(--space-3xl));
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
		.arrows {
			z-index: var(--level-top);
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
	:global(.upper .title-block) {
		@media (max-width: 1024px) {
			margin-left: 5vw;
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
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		@media (max-width: 1024px) {
			transform: unset;
		}
	}
</style>
