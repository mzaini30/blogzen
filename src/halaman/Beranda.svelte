<div class="container">
	<br>
	<h1 class="text-center">Blog Zen</h1>
	<hr>
	<div class="row">
		{#each data as x}
			<div class="col-6 col-sm-3">
				<div class="card click" on:click={() => location.href = `/${x.slug}`}>
					<div class="card-body">
						<h5>{x.judul}</h5>
						<p>{x.isi}</p>
					</div>
				</div>
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

<style type="text/css">
	.click {
		user-select: none;
		cursor: pointer;
	}
</style>