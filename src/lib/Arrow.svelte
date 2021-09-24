<script>
	export let direction = 'left';
	export let filled;
</script>

<svg
  class="arrow"
	transform={direction === 'right' ? 'rotate(180)' : null}
	viewBox="0 0 58 47"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M27.8617 4.23396L11.6979 19.7219L10.7993 20.5829H12.0438H57.1251V25.5715H12.0438H10.7993L11.6979 26.4325L27.8617 41.9204L24.1657 45.4619L0.804 23.0772L24.1657 0.69248L27.8617 4.23396Z"
		stroke="#F5DA4E"
		fill="{filled ? "#F5DA4E" : "transparent"}"
	/>
</svg>

<style>
	.arrow {
		cursor: pointer;
    /* height: var(--arrow-lg); */
    width: var(--arrow-lg);
		display: flex;
		align-items: center;
		justify-content: center;

	}
</style>
