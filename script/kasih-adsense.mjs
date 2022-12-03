import cup from "cup-readdir";
import { readFileSync, writeFileSync } from "fs";

let data = await cup.getAllFilePaths("output");
data = data.filter((x) => x.endsWith(".html"));
for (let x of data) {
  let isi = readFileSync(x).toString();
  isi = isi.replace(
    "<head>",
    `<head><script async='async' crossorigin='anonymous' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2408628281705149'></script>`
  );
  writeFileSync(x, isi);
}
