<h1>Hello world</h1>
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
<div class="jarak-bawah"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
<div class="bawah">
	{#if login == true}
		<button class="btn btn-danger">&#x2717;</button>
		<a href="/{params.slug}/edit" use:link class="btn btn-info">&#x2710;</a>
	{:else}
		<a href="/login" use:link class="btn btn-info">&#x2618;</a>
	{/if}
</div>

<script type="text/javascript">
	import {link} from 'svelte-spa-router'
	export let params = {}
	let login = false
</script>