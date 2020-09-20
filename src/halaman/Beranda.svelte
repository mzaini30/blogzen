<div class="container">
	<br>
	<h1 class="text-center">Blog Zen</h1>
	<hr>
	<div class="row">
		{#each data as x}
			<div class="col-sm-3">
				<a href="/{x.slug}" class="samarkan-link">
					<div class="card">
						<div class="card-body">
							<h5>{x.judul}</h5>
							<div>{x.deskripsi}</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>
<div class="bawah">
 <a href="/cari" class="btn btn-info">&#9906;</a>
 {#if location.host == "localhost:5000"}
	<a href="/tulis" class="btn btn-success">&plus;</a>
 {/if}
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

<style>
 .card {
 	margin-bottom: 20px;
 }
</style>
