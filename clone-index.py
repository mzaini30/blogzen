# pip install beautifulsoup4
import os, json
from bs4 import BeautifulSoup

os.chdir("public")
with open("db.json") as f:
	data = json.load(f)
slug = []
judul = []
deskripsi = []
for x in data["postingan"]:
	slug.append(x["slug"])
	judul.append(x["judul"])
	deskripsi.append(x["deskripsi"])
for x in slug:
	os.system('cp index.html ' + x + '.html')
os.system("cp index.html 404.html")
os.system("cp index.html cari.html")

# data = open('todo.html')
# soup = BeautifulSoup(data.read())
# soup.find('title').string = 'TODO'
# soup.find('meta', {'name': 'description'})['content'] = 'TODO juga'
# print(soup)

for (n, x) in enumerate(slug):
	data = open(x + '.html')
	soup = BeautifulSoup(data.read(), 'html.parser')
	soup.find('title').string = judul[n]
	soup.find('meta', {'name': 'description'})['content'] = deskripsi[n]
	data.close()
	tulis = open(x + '.html', 'w')
	tulis.write(str(soup))
	tulis.close()