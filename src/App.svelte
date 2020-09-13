<svelte:head>
	<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
</svelte:head>
<div class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
	<a href="/" class="navbar-brand" use:link>Blog Zen</a>
</div>
<div class="container">
	<Router {routes}/>
</div>

<script type="text/javascript">
	import {link} from 'svelte-spa-router'
	import Router from 'svelte-spa-router'
	import {routes} from './routes.js'
</script>

<style type="text/css">
	.container {
		padding-top: 50px;
	} 
</style>