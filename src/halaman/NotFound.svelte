<p bind:this={teks} class="text-center">Nggak ada</p>

<script>
 import {onMount} from "svelte"
 let teks
 onMount(() => {
    const posisi = () => teks.style.marginTop = `${(window.innerHeight - 50) / 2}px`
    posisi()
    window.addEventListener("resize", posisi)
 })
</script>
