---
title: "Tools Yang Membantu Banget Buat Penata Letak Buku"
description: "Cobain deh tools ini. Bagus banget"
date: "2020-04-01T21:57:02+08:00"
thumbnail: "https://2.bp.blogspot.com/-DvyY25whiTQ/Ts3xhzlOVLI/AAAAAAAAD8s/M4KI1Drn-qg/s640/hindi+layout.JPG"
categories:
  - "teknologi"
---

Aku agak bingung juga ya mau kasih nama tools ini apa. Tapi, deskripsinya itu seperti ini:

Tools ini kepakai jika:

- Ada dua naskah yang isinya sama
- Naskah yang pertama itu jadi satu file (entah PDF atau Word)
- Naskah yang satunya lagi, itu jadi dua file atau lebih (entah PDF atau Word)

Nah, biasanya, permasalahan yang muncul adalah, di naskah yang satu, halamannya 11, tapi di naskah satunya, malah masih 1. Kok bisa? Itu karena di naskah yang satunya, isinya dipecah jadi dua. Dan awal naskahnya adalah halaman 11 di naskah yang pertama. 

Bingung? Aku juga bingung gimana buat docsnya. Hehehehe...

Jadinya seperti ini programnya:

```
Bagaimana kondisi PDFnya?
1. Berupa gabungan halaman (seperti angka romawi + angka biasa)
2. Berupa pecahan halaman (misalnya, halaman pertama halaman dimulai dari halaman 11)
> 2
Nomor halaman pertama: 7
Halaman yang dicari: 9
Cari 3
Halaman yang dicari: 11
Cari 5
Halaman yang dicari: 12
Cari 6
Halaman yang dicari: 
```

Ini kodenya:

```python
#!/usr/bin/python3.6

print("""Bagaimana kondisi PDFnya?
1. Berupa gabungan halaman (seperti angka romawi + angka biasa)
2. Berupa pecahan halaman (misalnya, halaman pertama halaman dimulai dari halaman 11)""")

jawaban = int(input("> "))

if jawaban == 1:
    halaman = int(input("Halaman pertama: "))

    while True:
        cari = int(input("Halaman yang dicari: "))
        print(f"Cari {cari + halaman - 1}")

elif jawaban == 2:
    halaman = int(input("Nomor halaman pertama: "))

    while True:
        cari = int(input("Halaman yang dicari: "))
        print(f"Cari {cari - halaman + 1}")
```

Nah, file itu kamu taro di `~/bin/` biar gampang diaksesnya karena itu Pathnya Linux.