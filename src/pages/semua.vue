<page>
  title: Semua Artikel
  description: Semua artikel yang aku tulis, ada di sini, supaya mudah mencarinya
</page>

<script setup="">
import data from "../../tiddlers/published.json";
import { stripHtml } from "string-strip-html";
import { gambar } from "../data/default";
</script>

<template>
  <Head>
    <meta property="og:image" :content="gambar" />
    <meta name="twitter:image" :content="gambar" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zenia2020" />
    <meta name="twitter:creator" content="@zenia2020" />
  </Head>
  <div class="grid gap-4 pt-3">
    <template v-for="x in data">
      <router-link class="bg-white p-5 rounded shadow" :to="`/${x.slug}`"
        ><h2 class="font-bold mb-3">{{ x.title }}</h2>
        <div class="text-sm">
          {{ stripHtml(x.excerpt).result }}
        </div></router-link
      ></template
    >
  </div>
</template>
