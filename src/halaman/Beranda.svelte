<form on:submit|preventDefault={cari}>
	<div class="form-group">
		<input type="search" class="form-control" bind:value={teks_cari} placeholder="Cari apa?" required name="">
	</div>
</form>
<div class="list-group jarak-bawah">
	{#each data as x}
		<a href="/{x.slug}" class="list-group-item list-group-item-action" use:link>{x.judul}</a>
	{/each}
</div>
<div class="bawah">
	{#if login == false}
		<a href="/login" use:link class="btn btn-info">&#x2618;</a>
	{:else}
		<button class="btn btn-danger" on:click={keluar}>&#x2623;</button>
		<a href="/tulis" use:link class="btn btn-info">&#x270E;</a>
	{/if}
</div>
<svelte:head>
	<title>Blog Zen</title>
</svelte:head>

<script type="text/javascript">
	import {link, push} from 'svelte-spa-router'
	import {onMount} from 'svelte'
	let login = false
	let teks_cari = ''
	let data = []
	const keluar = () => {
		localStorage.removeItem('token')
		login = false
	}
	onMount(() => {
		if (localStorage.token) {
			login = true
		}
		fetch(`${api}/index.php/postingan/semua?${Math.random()}`).then(x => x.json()).then(y => data = y)
	})
	const cari = () => push(`/cari/${encodeURIComponent(teks_cari)}`)
</script>

<style type="text/css">
	:global(.bawah) {
		position: fixed;
		bottom: 20px;
		right: 20px;
	}
	:global(.jarak-bawah) {
		margin-bottom: 80px !important;
	}
</style>