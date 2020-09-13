<form on:submit|preventDefault={cari}>
	<div class="form-group">
		<input type="search" class="form-control" bind:value={teks_cari} placeholder="Cari apa?" required name="">
	</div>
</form>
<div class="list-group jarak-bawah">
	{#each Array(10) as _}
		<a href="/hello-world" class="list-group-item list-group-item-action" use:link>Hello world</a>
	{/each}
</div>
<div class="bawah">
	{#if login == false}
		<a href="/login" use:link class="btn btn-info">&#x2618;</a>
	{:else}
		<a href="/tulis" use:link class="btn btn-info">&#x270E;</a>
	{/if}
</div>

<script type="text/javascript">
	import {link, push} from 'svelte-spa-router'
	let login = false
	let teks_cari = ''
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