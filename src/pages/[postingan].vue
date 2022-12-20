<script>
import data from "../../tiddlers/published.json";
export default definePageComponent({
  getStaticPaths() {
    return data.map((artikel) => ({
      params: { postingan: artikel.slug },
      props: { artikel },
    }));
  },
});
</script>

<script setup="">
import { stripHtml } from "string-strip-html";
import { gambar } from "../data/default";

defineProps(["artikel"]);

// const { frontmatter } = usePage();
// frontmatter.title = $route.props.artikel.title;
// frontmatter.description = stripHtml($route.props.artikel.excerpt).result;
</script>

<template>
  <Head>
    <title>{{ artikel.title }}</title>
    <meta name="description" :content="stripHtml(artikel.excerpt).result" />

    <meta property="og:type" content="article" />
    <meta property="og:title" :content="artikel.title" />
    <meta property="og:image" :content="artikel.cover_image || gambar" />
    <meta
      property="og:description"
      :content="stripHtml(artikel.excerpt).result"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zenia2020" />
    <meta name="twitter:creator" content="@zenia2020" />
    <meta name="twitter:title" :content="artikel.title" />
    <meta
      name="twitter:description"
      :content="stripHtml(artikel.excerpt).result"
    />
    <meta name="twitter:image" :content="artikel.cover_image || gambar" />
  </Head>
  <div class="bg-white isi-postingan rounded shadow overflow-hidden mt-3">
    <img
      :src="artikel.cover_image || gambar"
      :alt="artikel.title"
      class="w-full object-cover gambarnya"
    />
    <div class="p-5">
      <h1 class="mb-2 font-bold text-center">{{ artikel.title }}</h1>
      <div v-html="artikel.text.replaceAll('/#', '/')" class=""></div>
    </div>
  </div>
</template>

<style scoped="">
.gambarnya {
  aspect-ratio: 16 / 9;
}
</style>

<style>
.isi-postingan a {
  @apply underline;
}
a.tc-tiddlylink.tc-tiddlylink-missing {
  font-style: italic;
  pointer-events: none;
}
a.tc-tiddlylink-external {
  text-decoration: dotted;
  text-decoration-line: underline;
}
</style>
