---
title: "Menghubungkan Html Ke Css"
description: "Ini adalah cara menghubungkan HTML ke CSS"
date: "2020-03-31T08:02:27+08:00"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/548px-CSS.3.svg.png"
categories:
  - "website"
---

Misalnya kita punya file:

```
index.html
style.css
```

Bagaimana cara menghubungkannya?

Jadi, di `index.html`, masukkan kode seperti di bawah ini (di antara `<head>` dan `</head>`):

```html
<link rel='stylesheet' href='style.css'>
```