import { copyFileSync } from "fs";
import cup from "cup-readdir";

let data = await cup.getAllFilePaths("files");
for (let x of data) {
  copyFileSync(x, x.replace("files/", "output/"));
}
