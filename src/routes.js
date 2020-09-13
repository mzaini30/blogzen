import Beranda from './halaman/Beranda.svelte'
import Login from './halaman/Login.svelte'
import Tulis from './halaman/Tulis.svelte'
let routes = {
	'/': Beranda,
	'/login': Login,
	'/tulis': Tulis
}
export {routes}