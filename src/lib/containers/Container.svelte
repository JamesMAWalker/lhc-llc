<script>
	// your script goes here
	export let column = false;
	export let jcsb = false;
	export let forty = false;
	export let fifty = false;
	export let sixty = true;
	export let full = false;
</script>

<div class="container" class:jcsb class:column class:forty class:fifty class:sixty class:full>
	<slot />
</div>

<style lang="scss">
	.container {
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
		&.forty {
			width: 40vw;
		}
		&.fifty {
			width: 50vw;
		}
		&.sixty {
			width: 60vw;
		}
		&.full {
			width: 100vw;
		}
	}
</style>
