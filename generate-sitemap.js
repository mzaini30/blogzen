process = require('process')
fs = require('fs')
util = require('util')
readFile = util.promisify(fs.readFile)
writeFile = util.promisify(fs.writeFile)
process.chdir('public')
baca = async () => {
	data = await readFile('db.json', 'utf8')
	data = JSON.parse(data)
	slug = []
	for (x of data.postingan){
		slug.push(x.slug)
	}
	slug.reverse()
	sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
	for (x of slug){
		sitemap += `<url><loc>https://blogzen.js.org/${x}</loc></url>`
		sitemap += `<url><loc>https://blogzen.js.org/amp/${x}</loc></url>`
	}
	sitemap += '<url><loc>https://blogzen.js.org/</loc></url>'
	sitemap += '</urlset>'
	writeFile('sitemap.xml', sitemap)
}
baca()