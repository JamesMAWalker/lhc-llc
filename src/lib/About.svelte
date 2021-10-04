<script>
	// your script goes here
	import ContainerSixty from '$lib/containers/ContainerSixty.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<!-- markup (zero or more items) goes here -->
<section class="about" id="about">
	<img class="bg-image" src="/job-site.jpg" alt="Construction site planning" />
	<ContainerSixty column>
		<div class="about-inner">
			<SectionHeader mainColor="var(--white)" sub={'WHO WE ARE'} titleMainColor={'focus &'} titleYellow={'specialties'} />
			<p class="about-text">
				Datacom llc. is a Texas-based information technology solutions provider
				offering a wide range of IT expertise. Our focus is in network security, application
				delivery and IT infrastructure. Our goal is to provide industry leading IT solutions to help
				your organization improve network performance, mitigate risk and operate efficiently. 
        <br>
        <br>
        If your company needs access to specialized, highly-technical engineers for complex IT projects
				and/or emerging technologies, CTC Technologies is here to help. Whether it's a multi-site
				network refresh, large-scale wireless site survey, or a global SD-WAN implementation, we've
				got the proven experience to get your next IT project executed without having to hire
				additional employees or project managers.
			</p>
		</div>
	</ContainerSixty>
</section>

<style lang="scss">
	.about {
		position: relative;
		height: 100vh;
		width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
		&::before {
			z-index: var(--level-one);
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background: var(--primary-tr1);
		}
		&::after {
			z-index: var(--level-two);
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 80vh;
			width: 80vh;
			border-radius: var(--radius-rounded);
			background: var(--barely-grey-tr1);
		}
		.bg-image {
      position: absolute;
      top: 0;
      left: 0;
			height: 100%;
			width: 100%;
			background-size: cover;
			background-position: center;
			filter: saturate(0);
		}
		.about-inner {
      z-index: var(--level-three);
			height: 100%;
			width: calc(100% - var(--vp-lg));
      padding: 0 var(--vp-lg);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
      /* background-color: aqua; */
		}
    .about-text {
      margin-top: var(--space-2xl);
      font-size: var(--text-xl);
      color: var(--white);
    }
	}
</style>
