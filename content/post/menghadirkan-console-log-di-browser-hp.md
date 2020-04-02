---
title: "Menghadirkan Console Log Di Browser Hp"
description: "Bingung ya nggak ada console.log() di HP?"
date: "2020-04-02T21:46:51Z"
thumbnail: "https://www.cbronline.com/wp-content/uploads/2017/03/hoodedhacker.jpg"
categories:
  - "website"
---

Pernah nggak kamu mengerjakan suatu proyek website terus kodenya nggak berjalan sesuai keinginan, tapi kan di HP nggak ada `console.log()`. Terus gimana dong?

Caranya adalah dengan menggunakan VConsole.

Pertama, kamu download dulu [VConsole versi terbaru](https://github.com/Tencent/vConsole/releases/tag/v3.3.4) dari Github Releasenya.

Kemudian, setelah kamu download, gunakan kode seperti ini di websitemu:

```html
<script src="vconsole.min.js"></script>
<script>
  new VConsole
</script>
```

Selamat, kamu sudah bisa menggunakan console di HP.