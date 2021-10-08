<script>
	export let column = false;
</script>

<div class="container-50" class:column>
	<slot />
</div>

<style lang="scss">
	.container-50 {
		width: 50vw;
		overflow: visible;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		.column {
			flex-direction: column;
		}
	}
</style>
