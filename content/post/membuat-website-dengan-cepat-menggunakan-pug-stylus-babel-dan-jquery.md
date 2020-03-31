---
title: "Membuat Website Dengan Cepat Menggunakan Pug, Markdown, Stylus, dan Babel"
description: "Masih pakai HTML untuk membuat website? Coba deh cara ini"
date: "2020-03-31T08:32:15+08:00"
thumbnail: "https://stylus-lang.net/Application/Home/View/Public/img/stylus-logo.svg"
categories:
  - "website"
---

Biasanya sih kalau kita bertanya di grup-grup pemrograman tentang apa yang aku pelajari pertama kali di dunia pemrograman, maka orang-orang (terutama mastah) biasanya akan menjawab: Pelajari aja HTML dulu. Tapi, pernah nggak sih kamu merasa, kok HTML ini malah ribet ya? Apa nggak ada yang lebih simpel? Kalau itu pertanyaanmu, selamat deh kamu berada di postingan yang tepat. Karena kali ini kita akan mempelajari cara membuat website dengan lebih cepat.

## Persiapan

Pertama, kamu harus sudah punya Node JS dan NPM dulu ya. Kalau belum, coba digoogling deh cara installnya.

Sekarang kamu siapkan dulu forldernya dengan struktur seperti ini:

```
pug/
```

Eh, kita hanya perlu satu folder? Yap, jadi nanti semua file pug kita letakkan di folder tersebut lalu hasilnya nanti yang berbentuk HTML akan muncul secara otomatis di luar forlder tersebut. Keren kan?

Jawab `iya` aja gitu dong. Hahahaha...

## Install Pug

Sekarang kita install dulu Pugnya:

```bash
sudo npm i -g pug-cli
```

## Membuat Pug

Lalu, di dalam folder `pug/`, kita buat `index.pug` yang isinya:

```javascript
doctype html
html 
	head 
		meta(charset='utf-8')
		meta(name='viewport' content='width=device-width, initial-scale=1, user-scalable=no')
	body 
		h1 Hello world
```

Lalu, kamu arahkan Terminal ke dalam folder `pug/` lalu jalankan perintah berikut:

```bash
pug . -w -o .. -P 
```

Ditunggu sebentar.

Kemudian akan tercipta `index.html` di root dengan isi:

```html
<!DOCTYPE html>
<html> 
  <head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  </head>
  <body> 
    <h1>Hello world</h1>
  </body>
</html>
```

Keren kan? Jadi, kode yang diketik lebih sedikit.

## Menambahkan Markdown

Sekarang, kita tambahkan Markdown supaya ngetiknya lebih singkat lagi.

Jalankan ini di Terminal:

```bash
sudo npm i -g jstransformer-marked
```

Kemudian kita buka lagi file `index.pug` tadi:

```javascript
doctype html
html 
	head 
		meta(charset='utf-8')
		meta(name='viewport' content='width=device-width, initial-scale=1, user-scalable=no')
	body 
		h1 Hello world
```

Lalu kita ubah menjadi:

```javascript
doctype html
html 
	head 
		meta(charset='utf-8')
		meta(name='viewport' content='width=device-width, initial-scale=1, user-scalable=no')
	body 
		:marked
			# Hello world

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			- lorem
			- ipsum
			- dolor

			---

			| satu | dua | tiga |
			|---|---|---|
			| empat | lima | enam |
			| tujuh | delapan | sembilan |
			| sepuluh | sebelas | dua belas |

			[Ini adalah **link**](https://google.com). Dan ini adalah _tulisan miring_.
```

Maka file `index.html` berubah menjadi:

```html
<!DOCTYPE html>
<html> 
  <head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  </head>
  <body>
     <h1 id="hello-world">Hello world</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<ul>
<li>lorem</li>
<li>ipsum</li>
<li>dolor</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th>satu</th>
<th>dua</th>
<th>tiga</th>
</tr>
</thead>
<tbody>
<tr>
<td>empat</td>
<td>lima</td>
<td>enam</td>
</tr>
<tr>
<td>tujuh</td>
<td>delapan</td>
<td>sembilan</td>
</tr>
<tr>
<td>sepuluh</td>
<td>sebelas</td>
<td>dua belas</td>
</tr>
</tbody>
</table>
<p><a href="https://google.com">Ini adalah <strong>link</strong></a>. Dan ini adalah <em>tulisan miring</em>.</p>

  </body>
</html>
```

Keren nggak sih? Hehehehe...

## Menambahkan Stylus

Sekarang, install Stylus dengan perintah:

```bash
sudo npm i -g jstransformer-stylus
```

Kemudian kita buat file di `pug/` dengan nama `index.stylus`. Isinya:

```c
*
	word-wrap break-word
	
img 
	max-width 100%
```

Lalu kita modif `index.pug` menjadi:

```javascript
doctype html
html 
	head 
		meta(charset='utf-8')
		meta(name='viewport' content='width=device-width, initial-scale=1, user-scalable=no')
		style 
			include:stylus index.stylus
	body 
		:marked
			# Hello world

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			- lorem
			- ipsum
			- dolor

			---

			| satu | dua | tiga |
			|---|---|---|
			| empat | lima | enam |
			| tujuh | delapan | sembilan |
			| sepuluh | sebelas | dua belas |

			[Ini adalah **link**](https://google.com). Dan ini adalah _tulisan miring_.
```

Hasilnya di `index.html` adalah:

```html
<!DOCTYPE html>
<html> 
  <head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><style>* {
  word-wrap: break-word;
}
img {
  max-width: 100%;
}
</style>
  </head>
  <body>
     <h1 id="hello-world">Hello world</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<ul>
<li>lorem</li>
<li>ipsum</li>
<li>dolor</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th>satu</th>
<th>dua</th>
<th>tiga</th>
</tr>
</thead>
<tbody>
<tr>
<td>empat</td>
<td>lima</td>
<td>enam</td>
</tr>
<tr>
<td>tujuh</td>
<td>delapan</td>
<td>sembilan</td>
</tr>
<tr>
<td>sepuluh</td>
<td>sebelas</td>
<td>dua belas</td>
</tr>
</tbody>
</table>
<p><a href="https://google.com">Ini adalah <strong>link</strong></a>. Dan ini adalah <em>tulisan miring</em>.</p>

  </body>
</html>
```

## Menambahkan Babel

Install dulu Babelnya:

```bash
sudo npm i -g jstransformer-babel babel-preset-env
```

Lalu, kita buat `index.js` yang satu folder sama `index.pug`. Isinya adalah:

```javascript
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var olah_data = () => {
	for (var x of angka){
		console.log(x ** 2)
	}
}

olah_data()
```

Kemudian di `index.pug`, kita modif menjadi:

```javascript
doctype html
html 
	head 
		meta(charset='utf-8')
		meta(name='viewport' content='width=device-width, initial-scale=1, user-scalable=no')
		style 
			include:stylus index.stylus
	body 
		:marked
			# Hello world

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			- lorem
			- ipsum
			- dolor

			---

			| satu | dua | tiga |
			|---|---|---|
			| empat | lima | enam |
			| tujuh | delapan | sembilan |
			| sepuluh | sebelas | dua belas |

			[Ini adalah **link**](https://google.com). Dan ini adalah _tulisan miring_.
		script
			include:babel(presets=['env']) index.js
```

Hasilnya adalah:

```html
<!DOCTYPE html>
<html> 
  <head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <style>
       * {
  word-wrap: break-word;
}
img {
  max-width: 100%;
}

    </style>
  </head>
  <body>
     <h1 id="hello-world">Hello world</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<ul>
<li>lorem</li>
<li>ipsum</li>
<li>dolor</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th>satu</th>
<th>dua</th>
<th>tiga</th>
</tr>
</thead>
<tbody>
<tr>
<td>empat</td>
<td>lima</td>
<td>enam</td>
</tr>
<tr>
<td>tujuh</td>
<td>delapan</td>
<td>sembilan</td>
</tr>
<tr>
<td>sepuluh</td>
<td>sebelas</td>
<td>dua belas</td>
</tr>
</tbody>
</table>
<p><a href="https://google.com">Ini adalah <strong>link</strong></a>. Dan ini adalah <em>tulisan miring</em>.</p>

    <script>"use strict";

angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var olah_data = function olah_data() {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = angka[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;

			console.log(Math.pow(x, 2));
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

olah_data();
    </script>
  </body>
</html>
```

Lihat kan? Ternyata membuat website itu mudah banget.