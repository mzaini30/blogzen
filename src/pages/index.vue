<script setup="">
import data from "../../tiddlers/published.json";
import { gambar as gambarDefault, judul, deskripsi } from "../data/default";
import { stripHtml } from "string-strip-html";

const { frontmatter } = usePage();
frontmatter.title = judul;
frontmatter.description = deskripsi;
</script>

<template>
  <Head>
    <meta property="og:image" :content="gambarDefault" />
    <meta name="twitter:image" :content="gambarDefault" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zenia2020" />
    <meta name="twitter:creator" content="@zenia2020" />
  </Head>
  <div class="col-span-2">
    <div class="font-bold my-2">Headline</div>
    <template v-for="(x, n) in data">
      <router-link
        v-if="n == 0"
        :to="`/${x.slug}`"
        class="rounded shadow flex bg-white gap-2"
      >
        <img
          class="gambar w-[40%] object-cover flex-grow-0 flex-shrink-0"
          :src="x.cover_image || gambarDefault"
          :alt="x.title"
        />
        <div class="p-2">
          <div class="font-bold pb-2">{{ x.title }}</div>
          <div class="text-sm">{{ stripHtml(x.excerpt).result }}</div>
        </div>
      </router-link></template
    >
    <div class="font-bold my-2">Tulisan Terbaru</div>
    <div class="grid grid-cols-2 gap-3">
      <template v-for="(x, n) in data">
        <router-link
          v-if="n > 0 && n < 11"
          class="rounded shadow overflow-hidden bg-white"
          :to="`/${x.slug}`"
        >
          <img
            :src="x.cover_image || gambarDefault"
            class="w-full gambar object-cover"
            :alt="x.title"
          />
          <div class="p-2 text-sm">{{ x.title }}</div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<style scoped="">
.gambar {
  aspect-ratio: 9 / 6;
}
</style>
