import cup from "cup-readdir";
import { readFileSync, writeFile, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

let data = await cup.getAllFilePaths("output");
data = data.filter((x) => x.endsWith(".html"));

let hasil = [];
for (let x of data) {
  let isi = readFileSync(x);
  let dom = new JSDOM(isi);
  let judul = dom.window.document.title;
  hasil.push({
    judul,
    link: x.replace("output/", "/"),
  });
}
writeFileSync("output/cari.json", JSON.stringify(hasil));
