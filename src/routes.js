import Beranda from './halaman/Beranda.svelte'
import Login from './halaman/Login.svelte'
import Tulis from './halaman/Tulis.svelte'
import Baca from './halaman/Baca.svelte'
import Edit from './halaman/Edit.svelte'
import Cari from './halaman/Cari.svelte'
let routes = {
	'/': Beranda,
	'/login': Login,
	'/tulis': Tulis,
	'/cari/:cari?': Cari,
	'/:slug': Baca,
	'/:slug/edit': Edit
}
export {routes}