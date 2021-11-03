<script>
	import { goto } from '$app/navigation';

	import QuoteMark from './QuoteMark.svelte';
	import Arrow from '$lib/Arrow.svelte';

	export let client;
	export let imgUrlFrag;
	export let company;
	export let quote;
	export let link;
	export let height = '40vh';
	export let width = '30vw';
</script>

<li
	class="testimonial"
	style="height: {height}; width: {width}"
	on:click={() => goto('/case-studies')}
>
	<div class="quote">
		<div class="quote__mark-wrap"><QuoteMark /></div>
		<p class="quote__text">
			{quote}
		</p>
		<button class="read-more"> ...read more </button>
	</div>
	<div class="meta">
		<figure class="client-img">
			<img
				src={`https://res.cloudinary.com/datacom-cabling/image/upload/f_auto,q_50/v1635931310/testimonials/${imgUrlFrag}.jpg`}
				alt={`${client} from ${company}`}
			/>
			<figcaption class="client-info">
				<span class="name">{client}</span>
				<span class="company">{company}</span>
			</figcaption>
		</figure>
		<button class="case-link">
			<span>Read Case Study</span>
			<span class="arrow-wrap">
				<Arrow direction="right" />
			</span>
		</button>
	</div>
</li>

<style lang="scss">
	.testimonial {
		-webkit-user-select: none;
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: column;
		@media (max-width: 1024px) {
      width: 100vw !important;
			height: 70vh !important;
			margin: 0 !important;
			margin-bottom: 5vw !important;
        &:not(:last-child) {
        margin-right: 5vw;
      }
		}
		&:not(:last-child) {
			margin-right: 100px;
		}
		.quote {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
      overflow: visible;
			&:hover {
				.read-more {
					color: var(--primary-tr1);
					border-bottom: 1px solid var(--primary-tr1);
				}
			}
			&__text {
				width: 75%;
				text-align: center;
				font-size: var(--text-prose);
				font-style: italic;
				color: var(--text-color);
			}
			&__mark-wrap {
				position: absolute;
				top: -20%;
				left: 10%;
        overflow: visible;
        @media (max-width: 1024px) {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -100%) scale(1.5);
        }
			}
			&::after {
				z-index: var(--base-one);
				position: absolute;
				content: '';
				top: 50%;
				left: 50%;
				transform: translate(-50%, -55%);
				width: 35%;
				aspect-ratio: 1 / 1;
				background-color: var(--accent-tr2);
				border-radius: var(--radius-rounded);
        @media (max-width: 1024px) {
          display: none;
        }
			}
			.read-more {
				cursor: pointer;
				align-self: flex-end;
				background-color: transparent;
				border: none;
				margin-right: var(--space-5xl);
				font-size: var(--text-lg);
				font-style: italic;
				color: var(--deep-cyan-tr2);
				padding-bottom: var(--space-md);
				border-bottom: 1px solid var(--deep-cyan-tr2);
				transition: var(--transition-3-smooth);
        @media (max-width: 1024px) {
          margin-right: var(--space-3xl);
          padding-top: var(--space-xl);
          margin-bottom: var(--space-3xl);
        }
			}
		}
		.meta {
			display: flex;
			justify-content: space-between;
      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: var(--space-2xl);
      }
			.client-img {
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					height: var(--icon-2xl);
					width: var(--icon-2xl);
					border-radius: var(--radius-rounded);
					border: 3px solid var(--accent-color);
					object-fit: cover;
          @media (max-width: 1024px) {
            margin-left: var(--space-2xl);
            height: var(--icon-lg);
            width: var(--icon-lg);
          }
        }
			}
			.client-info {
				margin-left: var(--space-lg);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				font-size: var(--text-2xl);
				color: var(--text-color);
        @media (max-width: 1024px) {
          /* margin-left: var(--space-2xl); */
        }
				.name {
					font-weight: var(--light);
					font-style: italic;
				}
				.company {
					font-weight: var(--bold);
				}
			}
			.case-link {
				cursor: pointer;
				background-color: transparent;
				border: none;
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--text-color);
				font-size: var(--text-lg);
				font-weight: var(--semibold);
        @media (max-width: 1024px) {
          align-self: flex-end;
          margin-top: var(--space-3xl);
          margin-right: var(--space-3xl);
        }
				&:hover {
					.arrow-wrap {
						transform: translateX(10%) scaleX(1.05);
					}
				}
				.arrow-wrap {
					margin-left: var(--space-md);
					display: flex;
					align-items: center;
					height: var(--icon-sm);
					width: var(--icon-sm);
					transition: var(--transition-3-smooth);
					svg {
						height: 25px;
						width: 25px;
					}
				}
			}
		}
	}
</style>
