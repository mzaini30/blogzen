<p bind:this={teks} class="text-center">Nggak ada</p>
<div class="bawah">
 <a class="btn btn-info" href="/">&#x2616;</a>
</div>

<svelte:head>
 <title>Nggak ada</title>
</svelte:head>

<script>
 import {onMount} from "svelte"
 let teks
 onMount(() => {
    const posisi = () => teks.style.marginTop = `${(window.innerHeight - 50) / 2}px`
    posisi()
    window.addEventListener("resize", posisi)
 })
</script>
