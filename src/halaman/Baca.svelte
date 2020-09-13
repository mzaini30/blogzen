<h1>{data.judul}</h1>
<div class="jarak-bawah">{@html data.isi}</div>
<div class="bawah">
	{#if login == true}
		<button class="btn btn-danger" on:click={hapus}>&#x2717;</button>
		<a href="/{params.slug}/edit" use:link class="btn btn-info">&#x2710;</a>
	{:else}
		<a href="/login" use:link class="btn btn-info">&#x2618;</a>
	{/if}
</div>

<script type="text/javascript">
	import {link, push} from 'svelte-spa-router'
	import {onMount} from 'svelte'
	export let params = {}
	let login = false
	let data = {
		judul: '',
		isi: ''
	}
	onMount(() => {
		if (localStorage.token) {
			login = true
		}
		fetch(`${api}/index.php/postingan/detail/${params.slug}`).then(x => x.json()).then(y => data = y)
	})
	const hapus = () => {
		const tanya = confirm('Hapus kah?')
		if (tanya){
			fetch(`${api}/index.php/admin/${localStorage.token}/hapus/${params.slug}`).then(push('/'))
		}
	}
</script>

<style type="text/css">
	:global(blockquote) {
		font-style: italic;
	}
</style>