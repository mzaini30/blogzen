process = require('process')
fs = require('fs')
util = require('util')
readFile = util.promisify(fs.readFile)
writeFile = util.promisify(fs.writeFile)
copyFile = util.promisify(fs.copyFile)
process.chdir('public')
buka = async () => {
	data = await readFile('db.json', 'utf8')
	data = JSON.parse(data)
	slug = []
	judul = []
	deskripsi = []
	for (x of data.postingan){
		slug.push(x.slug)
		judul.push(x.judul)
		deskripsi.push(x.deskripsi)
	}
	for (n in slug){
		baca = await readFile('index.html', 'utf8')
		baca = baca.replace(/(<title>)(.+)(<\/title>)/g, `$1${judul[n]}$3`)
		baca = baca.replace(/(<meta name="description" content=")(.+)(">)/g, `$1${deskripsi[n].replace(/"/g, '\\"')}$3`)
		writeFile(`${slug[n]}.html`, baca)
	}
	fs.copyFile('index.html', '404.html', () => {})
	fs.copyFile('index.html', 'cari.html', () => {})
}
buka()