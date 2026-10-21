
<script setup>
import { onMounted, watch } from "vue";
import { profil } from "./data.js";
import { state } from "./state.js";
import { muat, simpan, aturUlang } from "./simpanan.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";

onMounted(() => {
  const isi = muat();

  if (isi && ["semua", "web", "data"].includes(isi.kategoriAktif)) {
    state.kategoriAktif = isi.kategoriAktif;
  }
});

watch(
  () => state.kategoriAktif,
  (kategoriAktif) => {
    simpan({ ...state, kategoriAktif });
  },
);

function aturUlangPilihan() {
  aturUlang();
  state.kategoriAktif = "semua";
  simpan(state);
}
</script>

<template>
  <main>
    <KepalaProfil :profil="profil" />
    <TombolFilter @reset="aturUlangPilihan" />
    <DaftarProyek />
    <FormKontak />
  </main>
</template>
