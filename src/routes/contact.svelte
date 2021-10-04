<script>
	import BGCircle from '$lib/background/BGCircle.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<!-- markup (zero or more items) goes here -->
<section class="contact-page">
	<BGCircle />
	<ContainerSixty jcsb>
		<div class="left">
			<SectionHeader
				sub="GET IN TOUCH"
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
	</ContainerSixty>
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
	}
	.left {
		height: 70vh;
		width: 25vw;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.blurb {
			margin-top: var(--title-margin);
			font-size: var(--text-lg);
			color: var(--text-color);
		}
	}
	.right {
		height: 70vh;
		width: 30vw;
	}
  :global(.contact-page svg) {
    position: absolute;
    top: 15vh;
    z-index: var(--base-one);
  }
</style>
