<script>
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
	import Case from '$lib/case-studies/Case.svelte';
	import BgCircle from '$lib/background/BGCircle.svelte';
	import RingButton from '$lib/buttons/ring-button.svelte';

	let services = [
		{
			title: '<div>Security at <br> YS Athletics</div>',
			blurb: 'Clean and tamper-proof installation provides security and peace of mind.',
			imgSrc: '/case-studies/security.jpg'
		},
		{
			title: '<div>Lawndale <br> City College</div>',
			blurb: 'Optimizing networks to improve remote learning facilities.',
			imgSrc: '/case-studies/campus.jpg'
		}
	];

	const pageData = {
		imgSrc: '/case-studies/server-tower.jpg',
		alt: 'imgIX server tower',
		title: 'ImgIX Data Center',
		sub: 'Network infrastructure upgrade',
		client: 'ImgIX LLC',
		jobType: 'Broad-scoped network infrastructure upgrade',
		industry: 'Image processing service',
		clientDesc: `ImgIX is a SaaS company providing a robust image processing API. Their services power hundreds of businesses, including the popular stock image library, Unsplash. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a sunt ad tenetur incidunt culpa nisi totam, atque mollitia soluta asperiores veniam, reprehenderit iste tempore delectus modi nam voluptatibus excepturi reiciendis autem, earum odit consectetur quaerat provident. Expedita ex eaque, aperiam delectus dolorem corporis, inventore dicta illum laboriosam voluptates tempora.`,
		challenge: `As the importance of online presence has grown, so has the demand for high quality images. ImgIX’s comprehensive feature set earned them a place as a developer favorite across the web. The issue was that their network infrastructure was being rapidly outgrown by demand.
        <br><br>
        Through an old connection, imgIX contacted Datacom and worked with us to develop a solution that would not only solve their current problems, but would prevent issues that would inevitably arise as they continued to scale. 
        `,
		issues: [
			'Not enough storage space',
			'Outdated server hardware',
			'Insufficient network cabling',
			'Poor wireless connectivity'
		],
		solution: `The first and most pressing issue was that the number of users using the service to store their images and the number of transforms generated as a result was fast outstripping their storage capacity. They needed an upgrade, and they needed it quickly. This meant there wasn’t time to move their servers to a new facility, so after understanding the current and future needs of the company, we opted to replace the racked servers with blade servers. This very modular server type allows for very dense storage with excellent cooling, as well as easy maintenance since any single module can be replaced or repaired with ease.`,
		result: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a sunt ad tenetur incidunt culpa nisi totam, atque mollitia soluta asperiores veniam, reprehenderit iste tempore delectus modi nam voluptatibus excepturi reiciendis autem, earum odit consectetur quaerat provident. Expedita ex eaque, aperiam delectus dolorem corporis, inventore dicta illum laboriosam voluptates tempora.`,
		resultList: [
			'Network outages cut to 0%',
			'Processing speed up 457%',
			'Physical capacity now scales with demand',
			'Wireless throughput from 21% of wired to 94%'
		],
		keywords: ['infrastructure, storage, network, fiber', 'data']
	};

	let d = pageData;
	let casePageWidth;
	$: console.log('casePageWidth: ', casePageWidth);
</script>

<section class="case-studies" bind:clientWidth={casePageWidth}>
	<ContainerSixty column>
		<div class="hero">
			<img src={d.imgSrc} alt={d.alt} />
			<div class="header">
				<h1>{d.title}</h1>
				<h3>{d.sub}</h3>
			</div>
			<div class="label">Case Study</div>
		</div>
		<div class="case">
			<ul class="job-specs">
				<li class="spec">
					<span class="spec-label accent">CLIENT</span>
					<span>{d.client}</span>
				</li>
				<li class="spec">
					<span class="spec-label">JOB TYPE</span>
					<span>{d.jobType}</span>
				</li>
				<li class="spec">
					<span class="spec-label">INDUSTRY</span>
					<span>{d.industry}</span>
				</li>
			</ul>
			<div class="case-content">
				<div class="client-desc">
					<h3 class="header">The Client</h3>
					<p class="text">{@html d.clientDesc}</p>
				</div>
				<div class="challenge">
					<h3 class="header">The Challenge</h3>
					<p class="text">{d.challenge}</p>
					<ul class="issues">
						{#each d.issues as issue (issue)}
							<li><span class="ring" /><span>{issue}</span></li>
						{/each}
					</ul>
				</div>
				<div class="solution">
					<h3 class="header">The Solution</h3>
					<p class="text">{d.solution}</p>
				</div>
				<div class="result">
					<h3 class="header">The Result</h3>
					<p class="text">{d.result}</p>
					<ul class="result-list">
						{#each d.resultList as res (res.slice(0, 8))}
							<li class="res">
								<span
									><svg width="19" height="15" viewBox="0 0 19 15" fill="none">
										<path
											d="M6.13575 15L0 8.86425L2.7285 6.13575L6.13575 9.55264L15.6787 0L18.4072 2.7285L6.13575 15Z"
											fill="#F5DA4E"
										/>
									</svg>
								</span><span class="text">{res}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div class="related-cases">
			<SectionHeader sub="SEE MORE" titleMainColor="relevant" titleYellow="cases" />
			<ul class="case-list">
				{#each services as { imgSrc, title, blurb } (title)}
					<Case {imgSrc} {title} {blurb} width="27.5vw" height="27.5vw" />
				{/each}
			</ul>
		</div>
		<div class="contact-cta">
			<SectionHeader titleMainColor="have a similar case?" titleYellow="let's talk." />
			<RingButton text="get in touch" arrow={false} />
			<div class="bgcircle-wrapper">
				<BgCircle />
			</div>
		</div>
	</ContainerSixty>
</section>

<style lang="scss">
	.case-studies {
		width: 100vw;
		min-height: 300vh;
		display: flex;
		justify-content: center;
	}
	.hero {
		position: relative;
		width: 100%;
		min-height: 65vh;
		margin-top: var(--vp-3xl);
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: var(--primary-tr2);
			filter: saturate(75%) contrast(200%);
		}
		.header {
			z-index: var(--level-one);
			margin: var(--space-2xl) var(--space-3xl);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			letter-spacing: 2px;
			& > {
				margin: 0;
				padding: 0;
			}
			h1 {
				color: var(--accent-color);
				font-size: var(--text-display);
			}
			h3 {
				color: var(--white);
				font-size: var(--text-header-sm);
			}
		}
		.label {
			z-index: var(--level-one);
			position: absolute;
			top: var(--space-3xl);
			left: var(--space-3xl);
			color: var(--white);
			color: var(--barely-grey);
			font-size: var(--text-2xl);
			font-weight: var(--semibold);
			text-transform: uppercase;
		}
		img {
			position: absolute;
			height: 100%;
			width: 100%;
			object-position: center;
			object-fit: cover;
		}
	}
	.case {
		margin-top: var(--vp-lg);
		width: 100%;
		color: var(--text-color) !important;
		display: grid;
		gap: 5vw;
		grid-template-columns: 15vw 40vw;
		grid-template-areas: 'specs content';
	}
	.job-specs {
		grid-area: specs;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		li {
			margin-bottom: var(--space-3xl);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
		}
		.spec-label {
			text-transform: uppercase;
			font-weight: var(--bold);
			&.accent {
				color: var(--accent-color);
			}
		}
	}
	.case-content {
		div {
			margin-bottom: var(--vp-lg);
		}
		h3 {
			margin-bottom: var(--title-margin);
			font-size: var(--text-header);
			font-weight: var(--bold);
		}
	}
	.issues {
		margin: var(--space-3xl) 0;
		li {
			display: flex;
			align-items: center;
			margin-bottom: var(--space-2xl);
			.ring {
				margin-right: var(--space-lg);
				height: 12px;
				width: 12px;
				border-radius: var(--radius-rounded);
				border: 1px solid var(--accent-color);
			}
		}
	}
	.result-list {
		margin-top: var(--space-3xl);
		li {
			margin-bottom: var(--space-2xl);
			font-size: var(--text-xl);
			font-weight: var(--semibold);
			display: flex;
			align-items: center;
			span:first-child {
				padding-right: var(--space-lg);
				svg {
					transform: scale(1.2);
				}
			}
		}
	}
	.related-cases {
		height: 80vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.case-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
      &:last-child {
        padding-right: none;
      }
		}
	}
	.contact-cta {
		position: relative;
		height: 90vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	:global(.contact-cta .title-block) {
		margin-bottom: var(--space-2xl);
	}
	:global(.contact-cta .ring-btn) {
		font-size: var(--text-lg) !important;
		font-weight: 600 !important;
	}
	.bgcircle-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	:global(.bgcircle-wrapper svg) {
		height: 30vw !important;
		width: 30vw !important;
		opacity: 1 !important;
	}
	:global(.contact-cta .title-block .title) {
		display: flex;
		align-items: center !important;
		justify-content: center !important;
	}
</style>
