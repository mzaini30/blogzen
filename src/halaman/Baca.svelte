<div class="container">
	<br>
	<h1>{data.judul}</h1>
	<hr>
	<div>
     <p><em>{data.deskripsi}</em></p>
     <div class="konten">{@html konten}</div>
	</div>
</div>
<div class="bawah">
 <a href="/cari" class="btn btn-dark">&#9906;</a>
 <a href="/" class="btn btn-info">&#9876;</a>
 {#if location.host.includes("localhost")}
  <a href="/{params.slug}/edit" class="btn btn-warning">&#10000;</a>
  <div on:click={hapus} class="btn btn-danger">&times;</div>
 {/if}
</div>

<script type="text/javascript">
	import {onMount} from 'svelte'
	import router from "page"
	export let params
	let data = {
		judul: "",
		deskripsi: "",
		isi: ""
	}
	let konten = ""
	const isinya = () => {
		if (location.host.includes('localhost')) {
			fetch('/db.json').then(x => x.json()).then(x => {
				for (let y of x.postingan){
					if (y.slug == params.slug) {
						data = y
					}
				}
			})
		} else {
			fetch(`/${params.slug}.json`).then(x => x.json()).then(x => data = x)
		}
	}
	onMount(() => isinya())
	const hapus = () => {
		let tanya = confirm("Hapus kah?")
		if (tanya){
			fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(x => {
				fetch(`http://localhost:3000/postingan/${x[0].id}`, {
					method: "delete"
				}).then(() => router.replace("/"))
			})
		}
	}
	$: konten = marked(data.isi)
	$: if (params.slug){
	 	isinya()
	 }
</script>

<svelte:head>
 <title>{data.judul}</title>
</svelte:head>