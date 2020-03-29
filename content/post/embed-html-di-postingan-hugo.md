---
title: "Embed HTML di Postingan Hugo"
description: "Ini adalah cara embed HTML di postingan Hugo"
date: "2020-03-22T14:07:12Z"
thumbnail: "https://cdn1.iconfinder.com/data/icons/hawcons/32/700034-icon-76-document-file-html-512.png"
categories:
  - "hugo"
---

Buat kode berikut di `/layouts/shortcodes/html.html`:

```tcl 
{{ .Inner }}
```

Untuk menggunakannya, contohnya seperti di bawah ini:

```html 
{{</* html >}}
<details>
  <summary>Spoiler</summary>
  <p>Halo <strong>Zen</strong></p>
</details>
{{< /html */>}}
```

Hasilnya:

{{< html >}}
<details>
  <summary>Spoiler</summary>
  <p>Halo <strong>Zen</strong></p>
</details>
{{< /html >}}