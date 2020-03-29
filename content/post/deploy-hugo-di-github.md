---
title: "Deploy Hugo Di Github"
description: "Ini adalah cara deploy Hugo di Github"
date: "2020-03-28T11:59:43+08:00"
thumbnail: "https://png.icons8.com/color/1600/github"
categories:
  - "hugo"
---

Di repositori kita, buat suatu Action.

Kasih nama terserah aja misalnya `hugo.yml`.

Lalu, isinya:

```yaml
name: deploy hugo

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.62.2'
          # extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```