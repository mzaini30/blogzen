<div class="container">
	<br>
	<h1>{data.judul}</h1>
	<hr>
	<div>{@html data.isi}</div>
</div>

<script type="text/javascript">
	import {onMount} from 'svelte'
	export let params
	let data = {
		judul: '',
		isi: ''
	}
	onMount(() => {
		fetch('/db.json').then(x => x.json()).then(x => {
			for (let y of x.postingan){
				if (y.slug == params.slug) {
					data = y
				}
			}
		})
	})
</script>