<script>
 import router from "page"
 import Beranda from "./halaman/Beranda.svelte"
 import Baca from "./halaman/Baca.svelte"
 import Tulis from "./halaman/Tulis.svelte"
 import Edit from "./halaman/Edit.svelte"
 import Cari from "./halaman/Cari.svelte"
 let page
 let params
 router("/", () => page = Beranda)
 router("/tulis", () => page = Tulis)
 router("/cari/:cari?", (x, next) => {
 	params = x.params
 	next()
 }, () => page = Cari)
 router("/:slug", (x, next) => {
 	params = x.params
 	next()
 }, () => page = Baca)
 router("/:slug/edit", (x, next) => {
 	params = x.params
 	next()
 }, () => page = Edit)
 router.start()
 $: {
 	if(params){
 		window.scrollTo(0, 0)
 	}
 }
</script>

<svelte:component this={page} {params}/>
