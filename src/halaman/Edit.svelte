<form on:submit|preventDefault={ubah}>
	<div class="form-group">
		<input type="search" bind:this={ref} class="form-control" required placeholder="Judul" name="" bind:value={data.judul}>
	</div>
	<div class="form-group">
		<textarea bind:this={tinggi_textarea} class="form-control" placeholder="Isi. Menggunakan Markdown" bind:value={data.markdown}></textarea>
	</div>
	<div class="form-group">
		<input type="submit" class="btn btn-success float-right" value="&#x2714;" name="">
	</div>
</form>
<svelte:head>
	<title>Edit {data.judul}</title>
</svelte:head>

<script type="text/javascript">
	import {onMount} from 'svelte'
	import {push} from 'svelte-spa-router'
	let ref
	let tinggi_textarea
	let data = {
		judul: '',
		markdown: ''
	}
	export let params = {}
	onMount(() => {
		ref.focus()
		fetch(`${api}/index.php/postingan/detail/${params.slug}`).then(x => x.json()).then(y => data = y)
		const ukur_tinggi = () => tinggi_textarea.style.height = `${window.innerHeight - 200}px`
		window.addEventListener('resize', ukur_tinggi)
		ukur_tinggi()
	})
	const ubah = () => {
		let body = new FormData
		body.append('judul', data.judul)
		body.append('isi', data.markdown)
		fetch(`${api}/index.php/admin/${localStorage.token}/update/${params.slug}`, {
			method: 'post',
			body
		}).then(push(`/${params.slug}`))
	}
</script>