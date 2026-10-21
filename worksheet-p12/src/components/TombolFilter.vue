<script setup>
import { state, pilihKategori, aturUlangState } from "../state.js";

const kategori = [
  { label: "Semua", nilai: "semua" },
  { label: "Web", nilai: "web" },
  { label: "Data", nilai: "data" },
  { label: "Mobile", nilai: "mobile" },
];
</script>

<template>
  <section>
    <h2>Proyek</h2>

    <div id="filter">
      <button
        v-for="item in kategori"
        :key="item.nilai"
        type="button"
        :class="{ aktif: state.kategoriAktif === item.nilai }"
        :aria-pressed="state.kategoriAktif === item.nilai"
        @click="pilihKategori(item.nilai)"
      >
        {{ item.label }}
      </button>

      <button type="button" @click="aturUlangState">Atur Ulang Pilihan</button>
    </div>
  </section>
</template>
