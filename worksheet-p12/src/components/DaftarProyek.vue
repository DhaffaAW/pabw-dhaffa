<script setup>
import { computed } from "vue";
import { state } from "../state.js";

const proyekTersaring = computed(() => {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif,
  );
});
</script>

<template>
  <section id="daftar-proyek">
    <h2>Daftar Proyek</h2>

    <p v-if="proyekTersaring.length === 0">
      Belum ada proyek dalam kategori ini.
    </p>

    <div v-else class="daftar-proyek">
      <article
        v-for="proyek in proyekTersaring"
        :key="proyek.id"
        class="kartu-proyek"
      >
        <h3>{{ proyek.judul }}</h3>

        <p>Kategori: {{ proyek.kategori }}</p>

        <p>
          Status:
          {{ proyek.selesai ? "Selesai" : "Sedang dikerjakan" }}
        </p>
      </article>
    </div>
  </section>
</template>
