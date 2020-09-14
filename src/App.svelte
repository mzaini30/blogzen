<svelte:head>
	<script type="text/javascript">
		api = 'https://mzaini30.nasihosting.com/blogzen'
		// api = 'http://localhost/blogzen'
	</script>
</svelte:head>
<div class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
	<a href="/" class="navbar-brand" use:link>Blog Zen</a>
</div>
<div class="container">
	<Router {routes} on:routeLoaded={route_loaded}/>
</div>

<script type="text/javascript">
	import {link} from 'svelte-spa-router'
	import Router from 'svelte-spa-router'
	import {routes} from './routes.js'
	const route_loaded = () => window.scrollTo(0, 0)
</script>

<style type="text/css">
	.container {
		padding-top: 70px;
	}
</style>