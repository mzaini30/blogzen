---
title: "Apa Sih Kehebatannya Javascript"
description: "Yuk kita mengupas kehebatannya Javascript"
date: "2020-03-31T05:58:53+08:00"
thumbnail: "https://cdn1.macworld.co.uk/cmsdata/features/3640222/learn_javascript_on_mac_thumb800.jpg"
categories:
  - "website"
---

Hei, apakah kamu sudah mengenal Javascript? Menurutmu, apa sih kehebatannya Javascript? Apakah menurutmu Javascript itu hanya untuk lingkungan browser? Hmmm... mari kita bahas.

Kalau yang kita tau kan Javascript itu di lingkungan browser dengan berbagai cara pemanggilan:

Yang pertama, kita memanggilnya secara langsung di dalam file HTML, bisa di dalam tag `<body/>` atau di dalam tag `<head/>`. Itu sesuai dengan keinginan kita sih. Cuma memang yang paling bagus itu ya di dalam tag `<body/>` di letak yang paling akhir supaya nanti setelah semua halaman dimuat, baru skripnya jalan. Misalnya aja seperti ini:

```html
<script>
	nama = 'Zen'
	console.log(`Hai, namaku adalah ${nama}`)
</script>
```

Atau contoh yang lebih panjang sedikit deh:

```html
<script>
	sekarang = new Date()
	hari = sekarang.getDay()
	bulan = sekarang.getMonth()
	tahun = sekarang.getFullYear()

	list_bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

	sekarang_ini = `${hari} ${list_bulan[bulan]} ${tahun}`
	console.log(sekarang_ini)
</script>
```

Nah, sekarang kita akan mendapatkan waktu saat ini di console browser kita.

Selain menampilkan secara eksplisit kode Javascript kita, kita bisa juga meletakkan kode Javascript di eksternal (file terpisah) lalu memanggilnya di file HTML kita. Kodenya seperti ini:

```html
<script src='app.js'></script>
```

Nah, `app.js` itu adalah file Javascript yang ingin kita panggil di file HTML kita.