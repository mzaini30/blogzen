fs = require('fs')
util = require('util')
process = require('process')
writeFile = util.promisify(fs.writeFile)
readFile = util.promisify(fs.readFile)
process.chdir('public')
buka = async () => {
	data = await readFile('db.json', 'utf8')
	data = JSON.parse(data)
	slug = []
	judul = []
	isi = []
	deskripsi = []
	for (x of data.postingan){
		slug.push(x.slug)
		judul.push(x.judul)
		isi.push(x.isi)
		deskripsi.push(x.deskripsi)
	}
	beranda = []
	for (n in slug){
		beranda.push({
			slug: slug[n],
			judul: judul[n],
			deskripsi: deskripsi[n]
		})
	}
	writeFile('beranda.json', JSON.stringify(beranda))
	for (n in slug){
		yang_diisi = {
			judul: judul[n],
			deskripsi: deskripsi[n],
			isi: isi[n]
		}
		writeFile(`${slug[n]}.json`, JSON.stringify(yang_diisi))
	}
}
buka()