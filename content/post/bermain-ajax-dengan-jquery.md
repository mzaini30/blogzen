---
title: "Bermain Ajax Dengan Jquery"
description: "Buat websitemu responsive dan tanpa loading dengan AJAX"
date: "2020-04-02T22:44:41Z"
thumbnail: "https://assets1.ignimgs.com/2016/08/29/the-flashjpg-2c50b8.jpg"
categories:
  - "website"
---

Membuat website dengan cepat adalah idaman setiap developer. Nah, salah satu caranya adalah dengan AJAX. Apa sih itu AJAX? Jadi, dengan AJAX, kita bisa menampilkan datanya itu nanti setelah markup utama dimuat. Nah, setelah itu datanya tampil dan kita bisa melakukan pengolahan CRUD tanpa loading. 

Keren.

Jadi, ayo kita mulai.

Pertama, anggap aja kita memiliki sebuah data berformat JSON yang bisa dimanipulasi (katanya sih bisa pakai `json-server`, nanti coba aku pelajari).

Anggap aja namanya `database.json`. Dan ini adalah isinya:

```javascript
[
  {
    nama: "Zen",
    lokasi: "Samarinda"
  },
  {
    nama: "Wirawan",
    lokasi: "Lampung"
  },
  {
    nama: "Hilmi",
    lokasi: "Kupang"
  }
]
```

Kemudian, kita coba mengolah datanya. Tapi kamu load dulu jQuerynya ya.

## Read data 

```javascript
$.get("database.json", data => {
  console.log(`Namanya adalah ${data.nama}. Tinggalnya di ${data.lokasi}`)
})
```