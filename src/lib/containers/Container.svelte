<script>
	// your script goes here
	export let column = false;
	export let jcsb = false;
	export let fifty = false;
</script>

<div class="container" class:jcsb class:column >
	<slot />
</div>

<style lang="scss">
	.container {
		overflow: visible;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		width: 60vw;
		@media (max-width: 1024px) {
			width: 100vw;
		}
		&.column {
			flex-direction: column;
		}
		&.jcsb {
			justify-content: space-between;
		}
		&.jcsb {
			width: 50vw;
			@media (max-width: 1024px) {
				width: 100vw;
			}
		}
	}
</style>
