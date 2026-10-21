<script setup>
import { ref } from "vue";

const nama = ref("");
const email = ref("");
const pesan = ref("");

function kirimPesan() {
  nama.value = "";
  email.value = "";
  pesan.value = "";
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi Saya</h2>

    <form @submit.prevent="kirimPesan" class="form-kolom">
      <label for="nama-kontak">Nama</label>
      <input
        id="nama-kontak"
        v-model="nama"
        type="text"
        required
        placeholder="Masukkan nama"
      />

      <label for="email-kontak">Email</label>
      <input
        id="email-kontak"
        v-model="email"
        type="email"
        required
        placeholder="nama@example.com"
      />

      <label for="pesan-kontak">Pesan</label>
      <textarea
        id="pesan-kontak"
        v-model="pesan"
        required
        placeholder="Tulis pesan kamu"
        rows="4"
      ></textarea>

      <button type="submit">Kirim Pesan</button>
    </form>
  </section>
</template>
