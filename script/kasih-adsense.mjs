import cup from "cup-readdir";
import { readFileSync, writeFileSync } from "fs";

let data = await cup.getAllFilePaths("dist");
data = data.filter((x) => x.endsWith(".html"));
for (let x of data) {
  let isi = readFileSync(x).toString();
  isi = isi.replace(
    "<head>",
    `<head>
    <script async='async' crossorigin='anonymous' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2408628281705149'></script>
    <script data-name="NBJ-Widget" data-cfasync="false" src="https://www.nihbuatjajan.com/javascripts/widget.prod.min.js?u=mzaini30" data-id="mzaini30" data-domain="https://www.nihbuatjajan.com" data-description="" data-message="" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>`
  );
  writeFileSync(x, isi);
}
