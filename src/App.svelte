<script>
 import router from "page"
 import Beranda from "./halaman/Beranda.svelte"
 let page
 router("/", () => page = Beranda)
 router.start()
</script>

<svelte:component this={page}/>
