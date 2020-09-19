<div class="container">
	<br>
	<h1 class="text-center">Blog Zen</h1>
	<hr>
	<div class="row">
		{#each data as x}
			<div class="col-6 col-sm-3">
				<a href="/{x.slug}" class="samarkan-link">
					<div class="card">
						<div class="card-body">
							<h5>{x.judul}</h5>
							<p>{x.isi}</p>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<script type="text/javascript">
	import {onMount} from 'svelte'
	let data = []
	onMount(() => {
		fetch('/db.json').then(x => x.json()).then(x => data = x.postingan.reverse())
	})
</script>

<svelte:head>
	<title>Blog Zen</title>
</svelte:head>