<form on:submit|preventDefault={cari}>
	<div class="form-group">
		<input type="search" class="form-control" bind:value={teks_cari} placeholder="Cari apa?" required name="">
	</div>
</form>
<div class="list-group">
	{#each data as x}
		<a href="/{x.slug}" class="list-group-item list-group-item-action" use:link>{x.judul}</a>
	{/each}
</div>

<script type="text/javascript">
	import {link, push} from 'svelte-spa-router'
	import {onMount} from 'svelte'
	let teks_cari
	let data = []
	export let params = {}
	let body = new FormData
	const pencarian = () => {
		if (params.cari) {
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
		push(`/cari/${encodeURIComponent(teks_cari)}`).then(() => {
			if (params.cari) {
				body.append('cari', teks_cari)
			}
			pencarian()
		})
	}
	onMount(() => {
		if (params.cari) {
			body.append('cari', decodeURIComponent(params.cari))
			teks_cari = decodeURIComponent(params.cari)
		}
		pencarian()
	})
</script>