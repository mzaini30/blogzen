<svelte:head>
 <title>Edit {judul}</title>
</svelte:head>

<form on:submit|preventDefault={submit}>
 <table class="table table-bordered">
  <tbody>
   <tr><td><input bind:this={judulnya} placeholder="Judul" bind:value={judul} required class="form-control"></td></tr>
   <tr><td><input placeholder="Deskripsi" class="form-control" required bind:value={deskripsi}></td></tr>
   <tr><td><textarea bind:this={isinya} placeholder="Isi" required bind:value={isi} class="form-control"></textarea></td></tr>
  </tbody>
 </table>
 <div class="bawah">
  <input type="submit" value="&check;" class="btn btn-success">
 </div>
</form>

<style>
 .form-control {
 	border: none;
 	box-shadow: none;
 }
 td {
 	padding: 0;
 }
</style>

<script>
 import {onMount} from "svelte"
 import router from "page"
 export let params
 let judulnya
 let isinya
 let judul
 let deskripsi
 let isi
 let id
 onMount(() => {
  judulnya.focus()
  fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(w => {
  	judul = w[0].judul
  	deskripsi = w[0].deskripsi
  	isi = w[0].isi
  	id = w[0].id
  })
  const atur_tinggi = () => isinya.style.height = `${window.innerHeight - 160}px`
  atur_tinggi()
  window.addEventListener("resize", atur_tinggi)
 })
 const submit = () => {
 	fetch(`http://localhost:3000/postingan/${id}`, {
 		method: "put",
 		headers: {
 			"Content-Type": "application/json"
 		},
 		body: JSON.stringify({
 			judul,
 			deskripsi,
 			isi,
 			slug: params.slug
 		})
 	}).then(() => router.replace(`/${params.slug}`))
 }
</script>
