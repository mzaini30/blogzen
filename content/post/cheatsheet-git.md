---
title: "Cheatsheet Git"
description: "Berikut ini adalah kumpulan kode Git yang berguna"
date: "2020-03-30T05:55:09Z"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"
categories:
  - "teknologi"
---

Sebelum bermain dengan Git, kita siapkan dulu akun Git kita di laptop:

```bash
git config --global user.name usernamemu
git config --global user.email emailmu
```

Jadi, kita di sini bermain Path. Path adalah semua file yang berada di `~/bin/`. Jadi, di bawah ini aku tunjukkan nama filenya, isi filenya, dan cara memanggilnya.

## Clone Github kita sendiri

Nama file: `github`

Isi:

```bash
git clone --depth=1 https://usernamemu@passwordmu:github.com/usernamemu/$1
```

Cara memanggilnya: `github sepeda`

## Upload Git 

Nama file: `upload`

Isinya:

```bash 
git status
git add -A .
git commit -m "upload"
git push 
```

Cara memanggilnya: `upload`

## Update repositori local 

Nama file: `update`

Isinya:

```bash
git update 
```

Cara memanggilnya: `update`

## Clone Github orang lain

Nama file: `clone`

Isi filenya:

```bash 
git clone --depth=1 $1
```

Contoh cara manggilnya: `clone https://github.com/mzaini30/autopug`