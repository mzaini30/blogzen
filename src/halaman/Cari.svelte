<br>
<div class="container">
 <form on:submit|preventDefault={mulai_cari}>
  <div class="form-group">
   <input type="search" placeholder="Cari apa?" class="form-control" bind:this={el_cari} bind:value={yang_dicari} required>
  </div>
 </form>
 <div class="list-grup">
  {#each data as x}
   <a href="/{x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
  {/each}
 </div>
</div>
<div class="bawah">
 <a href="/" class="btn btn-dark">&#9964</a>
</div>

<script>
 import router from "page"
 export let params = {}
 let yang_dicari = ""
 let el_cari
 let data = []
 const mulai_cari = () => router.replace(`/cari/${encodeURIComponent(yang_dicari)}`)
 const tanpa_param = () => {
 	if (!params.cari){
 		el_cari.focus()
 		yang_dicari = ""
 		data = []
 	}
 }
 const ada_param = () => {
  if (params.cari){
 	    yang_dicari = decodeURIComponent(params.cari)
 		fetch("/db.json").then(u => u.json()).then(q => {
 			let hasilnya = []
 			for (let x of q.postingan){
 				if (x.judul.toLowerCase().includes(yang_dicari.toLowerCase()) || x.deskripsi.toLowerCase().includes(yang_dicari.toLowerCase()) || x.isi.toLowerCase().includes(yang_dicari.toLowerCase())){
 					hasilnya.push(x)
 				}
 			}
 			data = hasilnya.sort((a, b) => {
 				if (a["judul"] > b["judul"]){
 					return 1
 				} else if (a["judul"] < b["judul"]){
 					return -1
 				}
 				return 0
 			})
 			if (data.length == 0){
 				data = [
 					{
 						judul: `${decodeURIComponent(params.cari)} nggak ketemu`,
 						slug: "cari"
 					}
 				]
 			}
 		})
 	}
  }
 $: if (params.cari){
 	ada_param()
 }
 $: if (!params.cari){
 	tanpa_param()
 }
</script>
