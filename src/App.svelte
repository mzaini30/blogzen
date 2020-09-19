<script>
 import router from "page"
 import Beranda from "./halaman/Beranda.svelte"
 import About from "./halaman/About.svelte"
 let page
 router("/", () => page = Beranda)
 router("/about", () => page = About)
 router.start()
</script>

<svelte:component this={page}/>
