---
title: "Contoh Penggunaan localStorage, Dexie JS, Dan sessionStorage"
description: "Ini adalah berbagai penyimpanan local di browser"
date: "2020-04-02T04:51:18Z"
thumbnail: "http://www.essentialsql.com/wp-content/uploads/2014/05/database-parts.jpg"
categories:
  - "website"
---

Kalau kita berbicara tentang localStorage, sessionStorage, dan Dexie JS (library untuk Indexed DB), berarti kita sedang membahas tentang storage atau penyimpanan. Namun, karena ini berjalan di sisi client, itu artinya, ini adalah penyimpanan di sisi client (browser). Oke, langsung aja kita bahas.

## localStorage

localStorage digunakan untuk penyimpanan satu value untuk satu key. Jadi, dia itu mirip dengan val, let, atau const. Ya, mirip-miripin lah kalau nggak mirip. Hehehhe...

### Create dan Update pada localStorage

```javascript
localStorage.setItem("nama", "Zen")
```

### Read pada localStorage

```javascript
localStorage.nama 
```

### Delete pada localStorage

```javascript
localStorage.removeItem("nama")
```

## sessionStorage

sessionStorage ini sesungguhnya sama sifatnya dan sintaksnya seperti localStorage. Hanya saja, kita nggak perlu menghapus sessionStorage. Soalnya, setelah dimuat sekali, dia akan langsung hilang setelah direload. Jadi ya mirip-mirip lah sama flashdata di Codeigniter.

## Dexie JS 

Jadi, Dexie JS ini mirip dengan database-database yang kita kenal. Sebelum menggunakan sintaks-sintaks yang akan aku jabarkan di bawah, include dulu [file Dexie JSnya](https://dexie.org/).

> Catatan: Dexie JS mendukung callback dengan .then()

### Create database 

```javascript
// di bawah ini aku menuliskan db_santri dan database santri 
// soalnya, harus dibedakan namanya
var db_santri = new Dexie("database santri")

db_santri.version(1).stores({
  data: "++id, nama, kelas, jumlah_hafalan"
})
```

### Add new data 

```javascript
db_santri.data.add({
  nama: "Zen",
  kelas: "Tamhidi",
  jumlah_hafalan: "5"
}).then(() => /* callback */)
```

### Read data 

```javascript
db_santri.data.orderBy("jumlah_hafalan").reverse().each(x => console.log(x.nama)).then()
```

### Update data 

```javascript
db_santri.data.where({
  id: 10
}).modify({
  kelas: "2"
}).then()
```

### Delete data 

```javascript
db_santri.data.where({
  id: 3
}).delete().then()
```