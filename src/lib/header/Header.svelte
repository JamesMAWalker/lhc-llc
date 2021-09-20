<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<nav class="header">
	<div class="logo">
		DATACOM
	</div>
	<div class="menu-cluster">
		<span class="quote-btn">get a quote</span>
		<span class="divider"/>
		<div class="menu-button">//</div>
	</div>
</nav>

<style>
	.header {
		z-index: 99;
		position: fixed;
		height: 20vh;
		width: 90vw;
		padding: 0 5vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		font-family: var(--font-main);
		font-size: 2.5rem;
		letter-spacing: 2px;
		font-weight: 500;
		text-transform: uppercase;
		color: rgb(53, 53, 53);
	}
	.menu-cluster {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.quote-btn, .divider, .menu-button {
		margin: 0 1rem;
	}
	.quote-btn {
		font-weight: bold;
		color: var(--white);
	}
	.divider {
		height: 50px;
		width: 1px;
		background-color: var(--white);
	}
	.menu-button {
		height: 45px;
		width: 45px;
		background-color: var(--white);
		border-radius: var(--radius-rounded);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-color);
	}
</style>
