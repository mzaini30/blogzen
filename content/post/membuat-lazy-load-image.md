---
title: "Membuat Lazy Load Image"
description: "Punya banyak gambar dalam satu halaman website? Ini caranya"
date: "2020-04-02T20:52:44+08:00"
thumbnail: "https://improveomatic.files.wordpress.com/2015/02/lazy.jpg"
categories:
  - "website"
---

Berikut ini kode HTML untuk gambarnya:

```html
<img class="lazyload" src="http://situs.com/gambar-yang-dimuat-pertama-kali.jpg" data-src="http://situs.com/gambar-yang-sebenarnya-ingin-ditunjukkan.jpg" loading="lazy" />
```

Lalu, ini kode Javascriptnya:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll(".lazyload"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          if (lazyImage.dataset.src != undefined)
            lazyImage.src = lazyImage.dataset.src;
          if (lazyImage.dataset.srcset != undefined)
            lazyImage.srcset = lazyImage.dataset.srcset;

          lazyImage.classList.add("lazyloaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
    console.log("Browser Not supported, please upgrade!");
  }
});
```