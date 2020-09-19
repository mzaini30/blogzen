import os, json

os.chdir("public")
with open("db.json") as f:
 data = json.load(f)
slug = []
for x in data["postingan"]:
 slug.append(x["slug"])
sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
for x in slug:
 sitemap += '<url><loc>https://blogzen.js.org/' + x + '</loc></url>'
sitemap += '</urlset>'
olah = open("sitemap.xml", "w")
olah.write(sitemap)
olah.close()