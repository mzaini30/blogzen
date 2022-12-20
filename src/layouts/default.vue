<script setup="">
import data from "../../tiddlers/published.json";
import { gambar as gambarDefault, judul, deskripsi } from "../data/default";
import { stripHtml } from "string-strip-html";
import { acak } from "kumpulan-tools";

const tulisanAcak = acak([...data]).splice(0, 5);
const tulisanAcak2 = acak([...data]).splice(0, 5);
</script>

<template>
  <div class="bg-zinc-200 min-h-screen">
    <div class="max-w-250 pb-3 <sm:px-3 mx-auto gap-4 grid sm:grid-cols-4">
      <div class="col-span-1">
        <div class="sticky top-3 <sm:text-center">
          <router-link
            to="/"
            class="block font-bold hover:uppercase text-2xl mt-3"
            >{{ judul }}</router-link
          >
          <div class="text-sm">{{ deskripsi }}</div>
          <router-link
            class="inline-block mt-5 rounded-[30px] p-1 px-4 hover:(bg-black text-white) font-bold text-sm uppercase border border-3 border-black"
            to="/semua"
            >Semua Artikel</router-link
          >
        </div>
      </div>
      <div class="col-span-2 <sm:col-span-1">
        <slot></slot>
      </div>
      <div class="col-span-1">
        <div class="sticky top-3">
          <div class="font-bold my-2 text-center">Yuk Baca Juga</div>
          <div class="rounded shadow bg-white">
            <template v-for="x in tulisanAcak">
              <router-link
                :to="`/${x.slug}`"
                class="block px-3 pb-3 first:pt-3 text-sm"
                >{{ x.title }}</router-link
              ></template
            >
          </div>
          <div class="font-bold my-2 text-center">Ini Juga Bagus</div>
          <div class="rounded shadow bg-white">
            <template v-for="x in tulisanAcak2">
              <router-link
                :to="`/${x.slug}`"
                class="block px-3 pb-3 first:pt-3 text-sm"
                >{{ x.title }}</router-link
              ></template
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
