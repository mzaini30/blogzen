---
title: "Antara Apt Dan Dpkg Manakah Yang Lebih Baik"
description: "Cara install di Linux"
date: "2020-04-03T08:45:15+08:00"
thumbnail: "https://tr3.cbsistatic.com/hub/i/r/2016/06/02/e965310b-b38d-43e6-9eac-ea520992138b/resize/770x/8e291bfbf9962bd2bb3f256ef3c5f5c8/linuxadminhero.jpg"
categories:
  - "teknologi"
---

Ada berbagai cara untuk install suatu aplikasi di Linux. Bisa dengan APT, Pacman (ini yang buat selain Ubuntu based ya), Yarn, NPM, Composer, dan berbagai macam package repository lainnya. Tapi, ketika yang kita install adalah file DEB, maka ada dua pilihannya:

- APT
- DPKG

Manakah yang lebih baik?

Jika ketika kita menginstall, baik-baik saja, atau semua dependencies sudah ada di laptop kita, maka nggak masalah menggunakan yang manapun. Namun, jika kita ternyata ada dependencies yang kurang, APT lebih baik. Soalnya nanti dikasih tau cara menginstall paket-paket aplikasi yang kurang.

Cara install file DEB menggunakan APT:

```bash
sudo apt install ./filenya.deb 
```