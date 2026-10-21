<script setup>
import { profil } from "./data.js";
import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";
</script>

<template>
  <main>
    <KepalaProfil :profil="profil" />
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />
  </main>
</template>
