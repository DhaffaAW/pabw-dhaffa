
import { reactive } from "vue";
import { daftarProyek } from "./data.js";

const KATEGORI_BAWAAN = "semua";
const KATEGORI_VALID = ["semua", "web", "data"];

export const state = reactive({
  daftarProyek: [...daftarProyek],
  kategoriAktif: KATEGORI_BAWAAN,
});

export function pilihKategori(nilai) {
  if (!KATEGORI_VALID.includes(nilai)) return;

  state.kategoriAktif = nilai;
}

export function tambahProyek(proyek) {
  state.daftarProyek.push(proyek);
}

export function aturUlangState() {
  state.kategoriAktif = KATEGORI_BAWAAN;
}
