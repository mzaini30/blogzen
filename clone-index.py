import os, json

os.chdir("public")
with open("db.json") as f:
 data = json.load(f)
slug = []
for x in data["postingan"]:
 slug.append(x["slug"])
for x in slug:
 os.system('cp index.html ' + x + '.html')
os.system("cp index.html 404.html")
