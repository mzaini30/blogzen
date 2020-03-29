---
title: "Pengalaman Menggunakan Hugo"
description: "Kisahnya ni pengalaman ketika menggunakan sebuah static site generator bernama Hugo"
date: "2020-03-19T22:14:29Z"
thumbnail: "https://gohugo.io/images/gohugoio-card.png"
categories:
  - "hugo"
---

## Lebih cepat

Sebagaimana yang dikatakan oleh para blogger SSG, Hugo adalah SSG yang cepat. Ya, tak coba sih kayaknya benar. Ini lebih cepat dari Jekyll. Dan juga, ada fitur Livereloadnya sehingga blog kita akan reload otomatis setiap ada perubahan.

## Template engine

Namun, yang paling nggak nyaman adalah karena dia menggunakan TCL untuk layoutingnya. Contoh sintaksnya ada di postinganku tentang [membuat fitur pencarian di Hugo](/post/membuat-fitur-pencarian-di-hugo/).

Sangat nggak nyaman banget kan?

Berbeda dengan Jekyll yang menggunakan Liquid. Kalau Liquid ini, sintaksnya mudah dipahami:

```tcl
{% if page.image %}
  <img src="{{ page.image }}">
{% endif %}
{{ content }}
```

Pernyataanku ini juga didukung sama salah satu [postingan di blog Forestry](https://forestry.io/blog/hugo-and-jekyll-compared/) yang mengatakan bahwa Jekyll tu simpel banget.

## Kaya fitur 

Di Hugo ini, ada beberapa tools yang sudah tersedia dan tinggal dipanggil seperti Disqus, Facebook Open Graph, dan Twitter Card. Dan juga, di bagian tags dan categories, bisa pagination.