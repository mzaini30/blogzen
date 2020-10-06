<div class="container">
	<br>
	<h1 class="text-center">Blog Zen</h1>
	<hr>
	<div class="row">
		{#each data as x}
			<div class="col-sm-3">
				<a href="/{x.slug}" class="samarkan-link">
					<div class="card">
						<div class="card-body">
							<h5>{x.judul}</h5>
							<div>{x.deskripsi}</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>
<div class="bawah">
	<Atas/>
 <a href="/cari" class="btn btn-info">&#9906;</a>
 {#if location.host.includes("localhost")}
	<a href="/tulis" class="btn btn-success">&plus;</a>
 {/if}
</div>

<script type="text/javascript">
	import {onMount, afterUpdate} from 'svelte'
	import Atas from '../komponen/Atas.svelte'
	let data = []
	onMount(() => {
		window.addEventListener('scroll', () => localStorage.setItem('posisiBerandaBlogZen', window.pageYOffset))
		if (location.host.includes('localhost')) {
			fetch('http://localhost:3000/postingan').then(x => x.json()).then(x => data = x.reverse())
		} else {
			fetch('/beranda.json').then(x => x.json()).then(q => data = q.reverse())
		}
	})
	afterUpdate(() => {
		if (localStorage.posisiBerandaBlogZen) {
			window.scrollTo({
				top: localStorage.posisiBerandaBlogZen,
				left: 0,
				behavior: 'smooth'
			})
		}
	})
</script>

<svelte:head>
	<title>Blog Zen</title>
</svelte:head>

<style>
 .card {
 	margin-bottom: 20px;
 }
</style>
