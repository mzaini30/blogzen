<br>
<div class="container">
 <form on:submit|preventDefault={mulai_cari}>
  <div class="form-group">
   <input type="search" placeholder="Cari apa?" class="form-control" bind:this={el_cari} bind:value={yang_dicari} required>
  </div>
 </form>
</div>
<div class="bawah">
 <a href="/" class="btn btn-info">&#x2616;</a>
</div>

<svelte:head>
 <title>Cari</title>
</svelte:head>

<script>
 import router from "page"
 import {onMount} from "svelte"
 let yang_dicari = ""
 let el_cari
 let data = []
 const mulai_cari = () => router.replace(`/cari/${encodeURIComponent(yang_dicari)}`)
 onMount(() => {
 		el_cari.focus()
 		yang_dicari = ""
 		data = []
 })
</script>
