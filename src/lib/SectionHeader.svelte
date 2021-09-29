<script>
	export let mainColor = "var(--text-color)";
	export let sub
	export let titleMainColor
	export let titleYellow
</script>

<div class="title-block" style="color: {mainColor}">
	<h3 class="sub">{sub}</h3>
	<h2 class="title">
		<span>{titleMainColor}</span>
		<span>{titleYellow}</span>
	</h2>
</div>

<style lang="scss">
	.title-block {
		.sub {
			padding: 0;
			margin: 0;
			margin-bottom: var(--space-md);
			font-size: var(--text-md);
			font-weight: 200;
			text-transform: uppercase;
		}
		.title {
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			font-size: var(--text-header);
			font-weight: 600;
			span:last-of-type {
				color: var(--accent-color);
			}
		}
	}
</style>
