<script>
 import router from "page"
 import Beranda from "./halaman/Beranda.svelte"
 import Baca from "./halaman/Baca.svelte"
 import Tulis from "./halaman/Tulis.svelte"
 import Edit from "./halaman/Edit.svelte"
 let page
 let params
 router("/", () => page = Beranda)
 router("/tulis", () => page = Tulis)
 router("/:slug", (x, next) => {
 	params = x.params
 	next()
 }, () => page = Baca)
 router("/:slug/edit", (x, next) => {
 	params = x.params
 	next()
 }, () => page = Edit)
 router.start()
</script>

<svelte:component this={page} {params}/>
