<form on:submit|preventDefault={submit}>
	<div class="form-group">
		<input type="search" bind:this={ref} bind:value={judul} class="form-control" required placeholder="Judul" name="">
	</div>
	<div class="form-group">
		<textarea bind:this={tinggi_textarea} bind:value={isi} class="form-control" placeholder="Isi. Menggunakan Markdown"></textarea>
	</div>
	<div class="form-group">
		<input type="submit" class="btn btn-success float-right" value="&#x2714;" name="">
	</div>
</form>

<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	let ref
	let tinggi_textarea
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
	onMount(() => {
		ref.focus()
		const ukur_tinggi = () => tinggi_textarea.style.height = `${window.innerHeight - 200}px`
		window.addEventListener('resize', ukur_tinggi)
		ukur_tinggi()
	})
</script>