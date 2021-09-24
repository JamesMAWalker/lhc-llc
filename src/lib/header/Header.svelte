<script>
	export let menuOpen
	console.log('menuOpen from Header: ', menuOpen);
</script>

<nav class="header">
	<div class="logo">DATACOM</div>
	<div class="menu-cluster" on:click="{() => menuOpen = !menuOpen}">
		<span class="quote-btn">get a quote</span>
		<span class="divider" />
		<div class="menu-button"><span>//</span></div>
	</div>
</nav>

<style lang="scss">
	.header {
		z-index: var(--level-top);
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
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.quote-btn,
	.divider,
	.menu-button {
		margin: 0 var(--space-lg);
	}
	.quote-btn {
		font-weight: bold;
		color: var(--white);
		transition: var(--transition-3-smooth);
		&:hover {
			color: var(--accent-color);
		}
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
		transition: var(--transition-4-smooth);
		&:hover {
			background-color: var(--accent-color);
			span {
				transform: scaleX(1.3) rotate(3deg);
			}
		}
		span {
			transition: var(--transition-3-smooth);
		}
	}
</style>
