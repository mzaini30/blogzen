---
title: "Perbaikan Situs Arsilogi"
description: "Detail-detail yang diubah untuk memperbaiki situs Arsilogi"
date: "2020-03-20T21:43:27+08:00"
thumbnail: "https://i.ytimg.com/vi/BrNQ0XixAw0/hqdefault.jpg"
categories:
  - "website"
---

## Kode CSS

Letakkan sebelum (di atasnya) `</head>`:

```html
<style>
  nav ul li:hover > ul {
    display: none;
  }
</style>
```

## Kode Javascript

Letakkan sebelum (di atasnya) `</body>`:

```html
<script>
  $('nav ul li').click(function(){
    $('nav ul li').not(this).find('ul').hide()
    $(this).find('ul').toggle()
  })
</script>
```