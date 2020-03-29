---
title: "Menjalankan PHP di Android"
description: "Cara menjalankan PHP di Android. Dijamin 100% work"
date: "2020-03-21T06:06:29Z"
thumbnail: "https://www.egrappler.com/wp-content/uploads/2017/07/PHP.jpg"
categories:
  - "teknologi"
---

## Persiapan

Pastikan kamu sudah menginstall Termux.

Lalu, kita install PHP-nya:

```bash
pkg install php 
```

## Menjalankan PHP 

Arahkan Termuxmu ke lokasi project PHPmu.

Jalankan perintah berikut di Termux:

```bash 
php -S localhost:2020 
```

Setelah itu, buka `localhost:2020` di browser.