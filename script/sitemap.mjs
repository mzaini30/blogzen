import { SitemapManager } from "sitemap-manager";
import cup from "cup-readdir";

const MySitemap = new SitemapManager({
  /* Options here */
  siteURL: "https://rumahzen.thedev.id/" /*URL*/,
  pathPrefix: "" /*Site Prefix*/,
  outDir: "" /*Output dir*/,
});

let data = await cup.getAllFilePaths("output");
data = data.filter((x) => x.endsWith(".html"));
for (let x of data) {
  MySitemap.addUrl(/*Category name here*/ "rumahzen", [
    {
      loc: `https://blogzen.js.org/${x
        .replace("output/", "")
        .replaceAll("%", "%25")}` /*URL*/,
      lastmod: new Date() /*Last modification time*/,
      changefreq: 7 /*Change frequence*/,
      priority: 1.0 /*Priority*/,
    },
    /*You can add more!*/
  ]);
}

MySitemap.finish();
