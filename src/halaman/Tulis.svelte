<form on:submit|preventDefault={submit}>
	<div class="form-group">
		<input type="search" bind:this={ref} bind:value={judul} class="form-control" required placeholder="Judul" name="">
	</div>
	<div class="form-group">
		<textarea style="height: {tinggi}px" bind:value={isi} class="form-control" placeholder="Isi. Menggunakan Markdown"></textarea>
	</div>
	<div class="form-group">
		<input type="submit" class="btn btn-success float-right" value="&#x2714;" name="">
	</div>
</form>

<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	let tinggi = window.innerHeight - 200
	let ref
	let judul = ''
	let isi = ''
	const submit = () => {
		let body = new FormData
		body.append('judul', judul)
		body.append('isi', isi)
		fetch(`${api}/index.php/admin/${localStorage.token}/tulis`, {
			method: 'post',
			body
		}).then(x => x.json()).then(y => push(`/${y}`))
	}
	onMount(() => ref.focus())
</script>