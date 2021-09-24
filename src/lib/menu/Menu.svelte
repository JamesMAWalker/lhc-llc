<script>
  import { fly, slide } from 'svelte/transition'
  import { expoInOut } from 'svelte/easing'

</script>

<!-- <nav class="menu" transition:fly={{ y: -100, easing: expoInOut }} > -->
<nav class="menu" transition:slide={{ duration: 1000, easing: expoInOut }} >
  here's the menu
</nav>

<style>
	.menu {
    z-index: var(--level-nine);
    position: fixed;
    top: 0;
    left: 0;
    height: 101vh;
    width: 101vw;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
