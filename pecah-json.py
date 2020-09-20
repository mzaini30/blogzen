import os, json

os.chdir("public")
with open("db.json") as f:
 data = json.load(f)
slug = []
judul = []
deskripsi = []
isi = []
for x in data["postingan"]:
 slug.append(x["slug"])
 judul.append(x["judul"])
 deskripsi.append(x["deskripsi"])
 isi.append(x["isi"])

beranda = []
for (n, x) in enumerate(slug):
 beranda.append({"slug": x, "judul": judul[n], "deskripsi": deskripsi[n]})
simpan_beranda = open("beranda.json", "w")
simpan_beranda.write(str(beranda))
simpan_beranda.close()
