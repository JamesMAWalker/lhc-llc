<script>
	// your script goes here
	import Container from '$lib/containers/Container.svelte';
	import Icon from '$lib/logo/Icon.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Yelp from '$lib/icons/Yelp.svelte';
</script>

<div class="footer">
	<Container column>
		<div class="footer-grid">
			<div class="logo-wrap--footer">
				<svg
					class="wordmark"
					height="100%"
					viewBox="0 0 347 47"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M343 23H31V22.5H343V23Z"
						fill="var(--accent-tr1)"
					/>
					<path
						d="M219.131 22.5656C219.131 24.8109 217.311 26.6311 215.065 26.6311C212.82 26.6311 211 24.8109 211 22.5656C211 20.3202 212.82 18.5 215.065 18.5C217.311 18.5 219.131 20.3202 219.131 22.5656Z"
						fill="var(--accent-tr1)"
					/>
					<path
						d="M0.503906 0.82806H16.3119C19.1706 0.82806 21.7519 1.29739 24.0559 2.23606C26.4026 3.17472 28.3866 4.58273 30.0079 6.46006C31.6719 8.29473 32.9519 10.6201 33.8479 13.4361C34.7439 16.2094 35.1919 19.4521 35.1919 23.1641C35.1919 26.8761 34.7439 30.1401 33.8479 32.9561C32.9519 35.7294 31.6719 38.0547 30.0079 39.9321C28.3866 41.7667 26.4026 43.1534 24.0559 44.0921C21.7519 45.0307 19.1706 45.5001 16.3119 45.5001H0.503906V0.82806ZM16.3119 39.1001C19.6399 39.1001 22.3279 38.0547 24.3759 35.9641C26.4239 33.8734 27.4479 30.8014 27.4479 26.7481V19.5801C27.4479 15.5267 26.4239 12.4547 24.3759 10.3641C22.3279 8.27339 19.6399 7.22806 16.3119 7.22806H7.73591V39.1001H16.3119Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M81.4754 45.5001L77.4434 33.4041H60.7394L56.8354 45.5001H49.4754L64.7074 0.82806H73.7954L89.0274 45.5001H81.4754ZM69.2514 7.48406H68.9314L62.4674 27.1961H75.6514L69.2514 7.48406Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M119.215 7.22806V45.5001H111.983V7.22806H98.6709V0.82806H132.527V7.22806H119.215Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M174.173 45.5001L170.141 33.4041H153.437L149.533 45.5001H142.173L157.405 0.82806H166.493L181.725 45.5001H174.173ZM161.949 7.48406H161.629L155.165 27.1961H168.349L161.949 7.48406Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M214.917 46.2681C209.072 46.2681 204.485 44.3054 201.157 40.3801C197.829 36.4121 196.165 30.6734 196.165 23.1641C196.165 19.4094 196.592 16.1027 197.445 13.2441C198.298 10.3854 199.536 7.97473 201.157 6.01206C202.778 4.04939 204.741 2.57739 207.045 1.59606C209.392 0.572058 212.016 0.0600586 214.917 0.0600586C218.8 0.0600586 222.042 0.913392 224.645 2.62006C227.29 4.32673 229.36 6.84406 230.853 10.1721L224.773 13.5001C224.005 11.3667 222.81 9.68139 221.189 8.44406C219.61 7.16406 217.52 6.52406 214.917 6.52406C211.461 6.52406 208.752 7.69739 206.789 10.0441C204.826 12.3907 203.845 15.6334 203.845 19.7721V26.5561C203.845 30.6947 204.826 33.9374 206.789 36.2841C208.752 38.6307 211.461 39.8041 214.917 39.8041C217.605 39.8041 219.781 39.1214 221.445 37.7561C223.152 36.3481 224.41 34.5561 225.221 32.3801L231.045 35.9001C229.552 39.1427 227.461 41.6814 224.773 43.5161C222.085 45.3507 218.8 46.2681 214.917 46.2681Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M266.059 46.2681C263.158 46.2681 260.512 45.7774 258.123 44.7961C255.776 43.7721 253.75 42.3001 252.043 40.3801C250.379 38.4174 249.078 36.0067 248.139 33.1481C247.243 30.2467 246.795 26.9187 246.795 23.1641C246.795 19.4094 247.243 16.1027 248.139 13.2441C249.078 10.3427 250.379 7.93206 252.043 6.01206C253.75 4.04939 255.776 2.57739 258.123 1.59606C260.512 0.572058 263.158 0.0600586 266.059 0.0600586C268.96 0.0600586 271.584 0.572058 273.931 1.59606C276.32 2.57739 278.347 4.04939 280.011 6.01206C281.718 7.93206 283.019 10.3427 283.915 13.2441C284.854 16.1027 285.323 19.4094 285.323 23.1641C285.323 26.9187 284.854 30.2467 283.915 33.1481C283.019 36.0067 281.718 38.4174 280.011 40.3801C278.347 42.3001 276.32 43.7721 273.931 44.7961C271.584 45.7774 268.96 46.2681 266.059 46.2681ZM266.059 39.8041C267.766 39.8041 269.323 39.5054 270.731 38.9081C272.182 38.3107 273.398 37.4574 274.379 36.3481C275.403 35.1961 276.192 33.8094 276.747 32.1881C277.302 30.5667 277.579 28.7321 277.579 26.6841V19.6441C277.579 17.5961 277.302 15.7614 276.747 14.1401C276.192 12.5187 275.403 11.1534 274.379 10.0441C273.398 8.89206 272.182 8.01739 270.731 7.42006C269.323 6.82273 267.766 6.52406 266.059 6.52406C264.31 6.52406 262.731 6.82273 261.323 7.42006C259.915 8.01739 258.699 8.89206 257.675 10.0441C256.694 11.1534 255.926 12.5187 255.371 14.1401C254.816 15.7614 254.539 17.5961 254.539 19.6441V26.6841C254.539 28.7321 254.816 30.5667 255.371 32.1881C255.926 33.8094 256.694 35.1961 257.675 36.3481C258.699 37.4574 259.915 38.3107 261.323 38.9081C262.731 39.5054 264.31 39.8041 266.059 39.8041Z"
						fill="var(--dark-cyan-2)"
					/>
					<path
						d="M339.397 11.3241H339.077L335.557 18.5561L325.765 36.4121L315.973 18.5561L312.453 11.3241H312.133V45.5001H305.221V0.82806H313.797L325.765 23.5481H326.149L338.117 0.82806H346.309V45.5001H339.397V11.3241Z"
						fill="var(--dark-cyan-2)"
					/>
				</svg>
			</div>
			<h4 class="blurb">Improving <br /> business <br /> since <br /><span> 1997.</span></h4>
			<div class="icons">
				<LinkedIn />
				<Facebook />
				<Yelp />
			</div>
			<div class="contact-info">
				<h6 class="header">GET IN TOUCH</h6>
				<p class="email">place@holder.com</p>
				<p class="number">555 . 123 . 4567</p>
			</div>
			<div class="page-links">
				<h6 class="header">EXPLORE</h6>
				<ul class="links">
					<li class="link"><a href="/#">about</a></li>
					<li class="link"><a href="/#">contact</a></li>
					<li class="link"><a href="/#">services</a></li>
					<li class="link"><a href="/#">case studies</a></li>
					<li class="link"><a href="/#">location</a></li>
				</ul>
			</div>
			<div class="copyright">© DATACOM LLC. 2021</div>
			<div class="dev">
				<span>development and design by &nbsp;</span> <a href="/#">jw.dev</a>
			</div>
		</div>
	</Container>
</div>

<style lang="scss">
	.footer {
		height: 80vh;
		background-color: var(--text-color);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-xl);
		font-weight: var(--semibold) !important;
		color: var(--white);
	}
	.footer-grid {
		transform: translateY(6vh);
		height: calc(80vh - var(--vp-xl) - var(--vp-xl));
		width: 100%;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: 1fr 1.5fr 1fr;
		grid-template-areas:
			'blurb info  logo'
			'icons links links'
			'cc    cc    dev';
	}
	.header {
		margin: 0;
		margin-bottom: var(--space-xl);
	}
	.logo-wrap--footer {
		grid-area: logo;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		svg {
			max-width: 100%;
		}
	}
	.blurb {
		grid-area: blurb;
		font-size: var(--text-header);
		margin: 0;
		padding-bottom: var(--space-3xl);
		span {
			color: var(--accent-color);
		}
	}
	.contact-info {
		padding-top: var(--space-md);
		grid-area: info;
		.email,
		.number {
			cursor: pointer;
			color: var(--accent-color);
			margin-bottom: var(--space-xl);
			transition: var(--transition-3-smooth);
			&:hover {
				color: var(--white);
			}
		}
	}
	.icons {
		grid-area: icons;
		width: 50%;
		/* padding-bottom: var(--vp-md); */
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		svg {
			cursor: pointer;
		}
	}
	:global(.icons svg) {
		cursor: pointer;
	}
	.page-links {
		grid-area: links;
		width: 100%;
		/* padding-bottom: var(--vp-md); */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		ul {
			width: 100%;
			padding: 0;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		li {
			cursor: pointer;
			list-style: none;
			color: var(--accent-color);
			a {
				text-decoration: none;
				transition: var(--transition-3-smooth);
				&:hover {
					color: var(--white);
				}
			}
		}
	}
	.copyright {
		grid-area: cc;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		font-size: var(--text-md);
	}
	.dev {
		grid-area: dev;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: var(--text-md);
		color: var(--barely-grey);
		a, span {
			height: var(--text-2xl);
		}
	}
</style>
