---
title: "Mengatasi Git Merge Conflict"
description: "Pernah mengalami Git Merge Conflict?"
date: "2020-03-30T15:10:37+08:00"
thumbnail: "https://i.stack.imgur.com/7q5j2.png"
categories:
  - "teknologi"
---

Pernah mengalami git merge conflict?

Jadi, git merge conflict ni kisahnya, kamu punya perubahan di local dan kamu juga punya perubahan di local yang lain. Terus, di local kamu ini, kamu belum `update` perubahannya apa aja yang dari local yang lain (local yang lain yang sudah diupload ke Github). Tapi, kamu langsung `upload` aja yang dari local ini. Ya, yang di sana nggak terima dong. Soalnya kan ada perubahan tapi kamu belum `update`. Lalu, jadilah konflik.

## Cara mengatasinya

- Kamu `upload` dulu yang ada di kamu
- Terus kamu `update`
- Terus kan ada keterangan tuh kalau konflik. Kamu exit aja
- Terus kamu `upload` lagi

Untuk cara `upload` dan `update`, kamu bisa baca [Cheatsheet Git](/post/cheatsheet-git/).