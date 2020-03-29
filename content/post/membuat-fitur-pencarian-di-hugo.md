---
title: "Membuat Fitur Pencarian Di Hugo"
description: "Ini adalah cara membuat pencarian di Hugo"
date: "2020-03-19T22:49:01+08:00"
thumbnail: "https://gohugo.io/img/hugo-logo.png"
categories:
  - "hugo"
---

## config.toml

Letaknya di `/`.

```toml
[outputs]
  home = ['html', 'rss', 'json']
```

## index.json

Letaknya di `/themes/mainroad/layouts/_default/`.

```tcl
{{- $.Scratch.Add "index" slice -}}
{{- range .Site.RegularPages -}}
  {{- $.Scratch.Add "index" (dict "title" .Title "description" .Params.description "date" .Params.date "thumbnail" .Params.thumbnail "content" .Plain "summary" .Summary "permalink" .Permalink) -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

## single.html

Letaknya di `/themes/mainroad/layouts/_default/`.

```tcl
{{- if .Params.cari }}
  <div class="hasil-pencarian"></div>
  <script type="text/javascript">
    yang_dicari = location.search.split('?q=')[1]
    fetch('/index.json').then(res => res.json()).then(data => {
      teks = []
      for (x of data){
        if (x.content.includes(yang_dicari) || x.date.includes(yang_dicari) || x.description.includes(yang_dicari) || x.permalink.includes(yang_dicari) || x.thumbnail.includes(yang_dicari) || x.title.includes(yang_dicari)){
          teks.push(`
            <header class="list__header">
              <h3 class="list__title post__title ">
                <a href="${x.permalink}" rel="bookmark">
                  ${x.title}
                </a>
              </h3>
            </header>
            <div class="content list__excerpt post__content clearfix">
              ${x.summary}
            </div>`)
        }
      }
      document.querySelector('.hasil-pencarian').innerHTML = teks.join('')
    })
  </script>
{{- end }}
```

## cari.md

Letaknya di `/content/page/`.

```yaml
---
title: "Cari"
description: ""
date: "2020-03-19T20:45:32+08:00"
thumbnail: ""
categories:
  - "cari"
tags:
  - "cari"
  - "tools"
  - "fitur"
cari: true
---
```