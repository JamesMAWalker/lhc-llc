<script>
	// your script goes here
	export let column = false
	export let jcsb = false
</script>

<div class="container-60" class:jcsb class:column>
  <slot/>
</div>

<style lang="scss">
	.container-60 {
		width: 60vw;
		overflow: visible;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		&.column {
			flex-direction: column;
		}
		&.jcsb {
			justify-content: space-between;
		}
	}
</style>
