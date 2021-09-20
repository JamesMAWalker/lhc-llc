<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="landing">
	<section class="hero">
		<video class="hero-vid" autoplay muted loop src="/cabling-vids.mp4" alt="slow pan over ethernet cables">
			<track kind="captions">
		</video>
		<div class="left">
		</div>
		<div class="right" />
		<div class="center">
			<h1>Your custom cabling <span class="accent">solution.</span></h1>
			<div class="button">
				<span class="circle--fade" />
				learn more
			</div>
		</div>
	</section>
	<section class="services">SERVICES</section>
</div>

<style lang="scss">
	.landing {
		background-color: transparent;
	}
	.hero {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		overflow: hidden;
		&-vid {
				z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transform: rotateY(180deg) scale(1.55) translate(15vh, 10vh);
		}
	}
	.left {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 50%;
		background-color: transparent;
		background-position: center;
		background-size: cover;
		background-image: url('/cut-out.png');
	}
	.right {
		height: 100%;
		width: 100%;
		background-color: var(--primary-tr-1);
	}
	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(.9);
		width: 20vh;
		color: var(--white);
		h1 {
			margin: 0;
			text-align: left;
			line-height: 110%;
			letter-spacing: 1.5px;
			font-size: var(--text-display);
			font-weight: 600;
			.accent {
				color: var(--accent-color);
			}
		}
		.button {
			position: relative;
			margin-top: 1rem;
			padding-left: 1rem;
			font-size: var(--text-xl);
			.circle--fade {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(-5%, -45%);
				height: var(--circle-med);
				width: var(--circle-med);
				height: 40px;
				width: 40px;
				background-color: var(--accent-tr-1);
				border-radius: var(--radius-rounded);
			}
		}
	}
	.services {
		height: 100vh;
		width: 100vw;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--white);
	}
</style>
