<script>
</script>

<button class="disc-button">
	<span class="disc" />
	learn more
</button>

<style lang="scss">
	.disc-button {
		cursor: pointer;
		position: relative;
		margin-top: 1rem;
		padding-left: 1rem;
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--white);
		background-color: transparent;
		border: none;
		&:hover {
			.disc {
				transform: translate(-5%, -45%) scale(1.1);
			}
		}
		.disc {
			z-index: var(--base-one);
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(-5%, -45%);
			height: var(--circle-med);
			width: var(--circle-med);
			height: 40px;
			width: 40px;
			background-color: var(--accent-tr1);
			border-radius: var(--radius-rounded);
			transition: var(--transition-3-smooth);
		}
	}
</style>
