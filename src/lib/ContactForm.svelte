<script>
	import SectionHeader from '$lib/SectionHeader.svelte';
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import BGCircle from '$lib/background/BGCircle.svelte';
</script>

<form class="contact-form">
	<input type="text" class="first" placeholder="First name" />
	<input type="text" class="last" placeholder="Last" />
	<input type="text" class="company" placeholder="Company name" />
	<input type="email" class="email" placeholder="Email address" />
	<textarea name="message" id="message" class="message" placeholder="Your message..." />
	<div class="captcha">
		<input type="checkbox" />
		<div class="text">
			<span>I'm not a robot</span>
			<span class="privacy">Privacy • Terms</span>
		</div>
		<img src="/static/captcha.png" alt="captcha symbol" />
	</div>
	<button class="submit" type="submit">send message</button>
</form>

<style lang="scss">
	.contact-form {
		height: 100%;
		width: 100%;
		display: grid;
		gap: var(--vp-md-sm);
		grid-template-rows: repeat(2, var(--vp-lg)) var(--vp-2xl) 7vh var(--vp-lg);
		grid-template-columns: repeat(2, 1fr);
	}
	.message {
		grid-column: 1 / -1;
		padding: var(--space-xl);
		&::-webkit-resizer {
			display: none;
		}
	}
	.captcha {
		grid-column: 1 / 2;
		grid-row: 4 / 5;
		padding: var(--space-lg);
		background-color: var(--barely-grey);
		display: flex;
		align-items: center;
		justify-content: space-between;
		input {
			margin: var(--space-lg);
			transform: scale(1.5);
		}
		.text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			margin-left: -20px;
		}
		.privacy {
			font-size: var(--text-xs);
			transform: scale(0.6);
			transform-origin: left;
			color: var(--light-grey);
		}
	}
	.submit {
		cursor: pointer;
		grid-column: 1 / 2;
		grid-row: 5 / 6;
		height: 90%;
		width: 100%;
		border: none;
		background-color: var(--accent-color);
		color: var(--white);
	}
	:global(.service-contact svg) {
		position: absolute;
		z-index: var(--base-one);
		top: 17.5vh;
		left: 15vw;
		transform: scale(1.3);
	}
</style>
