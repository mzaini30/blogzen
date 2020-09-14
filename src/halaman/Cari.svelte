<form on:submit|preventDefault={cari}>
	<div class="form-group">
		<input type="search" class="form-control" bind:value={teks_cari} placeholder="Cari apa?" required name="">
	</div>
</form>
<div class="list-group">
	{#each data as x}
		<a href="#/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
	{/each}
</div>

<script type="text/javascript">
	import {link, push} from 'svelte-spa-router'
	import {onMount} from 'svelte'
	let teks_cari
	let data = []
	export let params = {}
	const pencarian = () => {
		if (params.cari) {
			let body = new FormData
			body.append('cari', decodeURIComponent(params.cari))
			teks_cari = decodeURIComponent(params.cari)
			fetch(`${api}/index.php/postingan/cari`, {
				method: 'post',
				body
			}).then(x => x.json()).then(y => {
				if (y.length == 0) {
					data = [
						{
							slug: '',
							judul: `${decodeURIComponent(params.cari)} tidak ditemukan`
						}
					]
				} else {
					data = y
				}
			})
		} else {
			teks_cari = ''
			data = []
		}
	}
	const cari = () => {
		push(`/cari/${encodeURIComponent(teks_cari)}`)
	}
	onMount(() => pencarian())
	$: if (params.cari){
		pencarian()
	}
</script>