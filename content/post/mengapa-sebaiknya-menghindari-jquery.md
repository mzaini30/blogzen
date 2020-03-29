---
title: "Mengapa Sebaiknya Menghindari Jquery?"
description: "Kenapa ya? Padahal kan enak banget kalau pakai jQuery"
date: "2020-03-22T21:36:58Z"
thumbnail: "https://www.exuberantsolutions.com/course_logo/jquery-icon.png"
categories:
  - "teknologi"
---

Nggak bisa dipungkiri memang, kehadiran jQuery memudahkan umat programmer dalam membuat behavior website dengan lebih cepat. Misalnya aja, kita ingin membuat element click. Kalau di Javascript biasa, atau biasa disebut dengan Vanilla JS, kodenya seperti ini:

```javascript 
document.querySelectorAll(".halo").forEach(x => x.addEventListener("click", function(){
  console.log(this.innerHTML)
}))
```

Nah, sekarang coba bandingkan sama jQuery:

```javascript 
$(".halo").click(function(){
  console.log($(this).html())
})
```

Terus, kenapa sih kita baiknya menghindari menggunakan jQuery?

## Masalah dalam memuat jQuery 

Ketika ingin menggunakan jQuery, tentu saja kita harus memuat `jquery.min.js` terlebih dahulu. Ukurannya sih memang nggak terlalu besar. Cuma 94 kb. Namun, ketika kita ingin membuat website yang nantinya diakses untuk daerah pelosok, tentu kita harus membuat website kita itu seringan mungkin supaya cepat diloadnya.

## Tidak semuanya kita pakai

Di jQuery ada banyak perintah yang kita pakai. Nah, kalau misalnya kita ingin menggunakan `.click()` aja, tentunya yang lain nggak terpakai, seperti `.show()`, `.hide()`, `.addClass()`, dan lain-lainnya.