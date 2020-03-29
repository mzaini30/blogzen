---
title: "Menampilkan Pug Di Dalam Postingan Hugo"
description: "Ini adalah cara untuk menampilkan Pug di dalam postingan blog berbasis Hugo"
date: "2020-03-22T13:07:54Z"
thumbnail: "https://avatars2.githubusercontent.com/u/9338635?v=3&s=280"
categories:
  - "hugo"
---

Pastikan dulu blogmu yang Hugo sudah memanggil jQuery di `<head></head>`.

Lalu, letakkan `pug.js` di `/static/`. Pug JS bisa kamu dapatkan di [/pug.js](/pug.js).

Letakkan kode berikut ini di `/layouts/shortcodes/pug.html`:

```tcl
{{ $acak := index (seq 999 | shuffle) 0 }}

<div class="tes-{{ $acak }}"></div>
<script src="/pug.js"></script>
<script>
  pug = require("pug")
  $(".tes-{{ $acak }}").html(pug.compile("{{ .Inner }}"))
</script>
```

Untuk menggunakannya, kamu tinggal menggunakan tag `{{</* pug >}}{{< /pug */>}}`. Contohnya aja seperti di bawah ini:

```tcl
{{</* pug >}}
details
  summary Spoiler
  p Eits. Kenapa dibuka?
{{< /pug */>}}
```

Hasilnya:

{{< pug >}}
details
  summary Spoiler
  p Eits. Kenapa dibuka?
{{< /pug >}}