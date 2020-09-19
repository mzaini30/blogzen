<script>
 import {Link, Router, Route} from "svelte-routing"
 import Beranda from "./halaman/Beranda.svelte"
 export let url = ""
</script>

<Router {url}>
 <div>
  <Route path="/"><Beranda/></Route>
 </div>
</Router>
