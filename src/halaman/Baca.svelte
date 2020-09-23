<div class="container">
	<br>
	<h1>{data.judul}</h1>
	<hr>
	<div>
     <p><em>{data.deskripsi}</em></p>
     <div class="konten">{@html konten}</div>
	</div>
	<div class="card">
     <div class="card-body">
      Blog ini dikelola oleh <strong>Zen</strong> yang merupakan lulusan S1 Psikologi. <a href="/about-me">Lihat profil selengkapnya.</a>
     </div>
	</div>
	<br>
	<h2>Tulisan lainnya</h2>
	<ol>
		{#each tulisan_lainnya as x}
			<li><a href="/{x.slug}">{x.judul}</a></li>
		{/each}
	</ol>
	{#if !location.host.includes('localhost')}
		<div id="disqus_thread"></div>
	{/if}
</div>
<div class="bawah">
 <a href="/cari" class="btn btn-dark">&#9906;</a>
 <a href="/" class="btn btn-info">&#9876;</a>
 {#if location.host.includes("localhost")}
  <a href="/{params.slug}/edit" class="btn btn-warning">&#10000;</a>
  <div on:click={hapus} class="btn btn-danger">&times;</div>
 {/if}
</div>

<script type="text/javascript">
	import router from "page"
	export let params
	let data = {
		judul: "",
		deskripsi: "",
		isi: ""
	}
	let tulisan_lainnya = []
	let konten = ""
	const isinya = () => {
		if (location.host.includes('localhost')) {
			fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(y => data = y[0])
		} else {
			fetch(`/${params.slug}.json`).then(x => x.json()).then(x => data = x)
		}
	}
	const tampil_tulisan_lainnya = () => {
		if (location.host.includes('localhost')) {
			fetch('http://localhost:3000/postingan').then(x => x.json()).then(x => tulisan_lainnya = x.sort(() => Math.random() - 0.5).filter(x => x.judul != data.judul).slice(0, 5))
		} else {
			fetch('/beranda.json').then(x => x.json()).then(x => tulisan_lainnya = x.sort(() => Math.random() - 0.5).filter(x => x.judul != data.judul).slice(0, 5))
		}
	}
 	const muat_disqus = () => {
		if (!location.host.includes('localhost')){
			/**
			*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
			*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
			var disqus_config = function () {
			this.page.url = `https://blogzen.js.org/${params.slug}`;  // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = params.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
			};
			(function() { // DON'T EDIT BELOW THIS LINE
			var d = document, s = d.createElement('script');
			s.src = 'https://blogzen.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
			})();
		}
	}
	const hapus = () => {
		let tanya = confirm("Hapus kah?")
		if (tanya){
			fetch(`http://localhost:3000/postingan?slug=${params.slug}`).then(x => x.json()).then(x => {
				fetch(`http://localhost:3000/postingan/${x[0].id}`, {
					method: "delete"
				}).then(() => router.replace("/"))
			})
		}
	}
	$: konten = marked(data.isi)
	$: if (params.slug){
	 	isinya()
	 	muat_disqus()
	 	tampil_tulisan_lainnya()
	}
</script>

<svelte:head>
 <title>{data.judul}</title>
</svelte:head>
