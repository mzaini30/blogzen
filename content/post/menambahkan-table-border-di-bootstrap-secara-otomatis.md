---
title: "Menambahkan Table Border Di Bootstrap Secara Otomatis"
description: "Ini adalah cara untuk menambahkan table border secara otomatis"
date: "2020-03-21T23:57:38Z"
thumbnail: "https://cdn.wccftech.com/wp-content/uploads/2016/10/hacker.jpg"
categories:
  - "css"
---

## Kode CSS

Tambahkan kode di bawah ini sebelum `</head>`:

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

## Kode Javascript

Tambahkan kode berikut sebelum `</body>`:

```html
<script>
  $("table").addClass("table").addClass("table-bordered")
</script>
```