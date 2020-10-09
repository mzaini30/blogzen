process = require("process")
fs = require("fs")
util = require("util")
marked = require("marked")
readFile = util.promisify(fs.readFile)
writeFile = util.promisify(fs.writeFile)
marked.setOptions({
	breaks: true
})
process.chdir("public")
jalankan = async () => {
 css = await readFile("water.min.css", "utf8")
	baca = await readFile("db.json", "utf8")
	baca = JSON.parse(baca)
	process.chdir("amp")
	for (x of baca.postingan){
	 data = [...baca.postingan]
	 data = data.sort(() => 0.5 - Math.random())
	 konten = marked(x.isi).replace(/<img([^>]+)>/g, "<div class='container-gambar'><amp-img class='gambar' layout='fill'$1></amp-img></div>")
		isi = `
<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>${x.judul}</title>
    <link rel="canonical" href="https://blogzen.js.org/${x.slug}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "${x.judul}",
        "image": [
        	"https://blogzen.js.org/tauhid.jpeg"
        ],
        "author": {
        	"@type": "Person",
        	"name": "Zen"
        },
        "publisher": {
        	"@type": "Organization",
        	"name": "Caraka Publishing",
        	"logo": {
        		"@type": "ImageObject",
        		"url": "https://blogzen.js.org/favicon.png"
        	}
        }
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <style amp-custom>
    ${css}
 .container-gambar {
 	position: relative;
 	width: 100%;
 	height: 300px;
 }
 amp-img.gambar img {
 	object-fit: contain;
 }
    </style>
  </head>
  <body>
    <h1>${x.judul}</h1>
    <hr>
    <p><em>${x.deskripsi}</em></p>
    ${konten}
    <h2>Tulisan lainnya</h2>
    <ol>
     <li><a href="/${data[0].slug}">${data[0].judul}</a></li>
     <li><a href="/${data[1].slug}">${data[1].judul}</a></li>
     <li><a href="/${data[2].slug}">${data[2].judul}</a></li>
     <li><a href="/${data[3].slug}">${data[3].judul}</a></li>
     <li><a href="/${data[4].slug}">${data[4].judul}</a></li>
    </ol>
  </body>
</html>
		`
		writeFile(`${x.slug}.html`, isi)
	}
}
jalankan()
