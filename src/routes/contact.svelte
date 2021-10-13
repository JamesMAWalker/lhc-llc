<script>
	import BGCircle from '$lib/background/BGCircle.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import Container from '$lib/containers/Container.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<!-- markup (zero or more items) goes here -->
<section class="contact-page">
	<BGCircle />
	<Container jcsb>
		<div class="left">
			<SectionHeader
				sub="CONTACT US"
				titleMainColor="find your <br> solution"
				titleYellow="today"
			/>
			<p class="blurb">
				We offer a wide range of cabling and networking services, as well as consultation for
				businesses in need of expert advice. <br /><br /> Get in touch today to find out how we work
				together to find the right solution for your business.
			</p>
		</div>
		<div class="right">
			<ContactForm />
		</div>
	</Container>
</section>

<style lang="scss">
	.contact-page {
    position: relative;
		height: 120vh;
		width: 100vw;
		padding-top: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (max-width: 1024px) {
			height: max-content;
		}
	}
	:global(.contact-page .container) {
		@media (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
		}
	}
	.left {
		height: 70vh;
		width: 25vw;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-right: var(--block-center-margin);
		@media (max-width: 1024px) {
			height: max-content;
			width: 80vw;
			margin-right: 0;
			margin-bottom: var(--vp-lg);
		}
		.blurb {
			margin-top: var(--title-margin);
			font-size: var(--text-lg);
			color: var(--text-color);
		}
	}
	.right {
		height: 70vh;
		width: 30vw;
		@media (max-width: 1024px) {
			height: max-content;
			width: 80vw;
			margin-bottom: var(--vp-2xl	);
		}
	}
  :global(.contact-page svg) {
    position: absolute;
    top: 15vh;
    transform: scale(1.1);
    z-index: var(--base-one);
  }
</style>
