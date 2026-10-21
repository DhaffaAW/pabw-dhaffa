import { reactive, watch } from "vue";
import { daftarProyek } from "./data.js";

const KUNCI = "pabw-p12";
const KATEGORI_BAWAAN = "semua";
const KATEGORI_VALID = ["semua", "web", "data"];

function muatKategori() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));

    if (isi?.versi === 1 && KATEGORI_VALID.includes(isi.kategoriAktif)) {
      return isi.kategoriAktif;
    }
  } catch {
    // Gunakan kategori bawaan jika data tidak valid.
  }

  return KATEGORI_BAWAAN;
}

export const state = reactive({
  daftarProyek: [...daftarProyek],
  kategoriAktif: muatKategori(),
});

watch(
  () => state.kategoriAktif,
  (kategoriAktif) => {
    localStorage.setItem(
      KUNCI,
      JSON.stringify({
        versi: 1,
        kategoriAktif,
      }),
    );
  },
);

export function pilihKategori(nilai) {
  if (!KATEGORI_VALID.includes(nilai)) return;

  state.kategoriAktif = nilai;
}

export function tambahProyek(proyek) {
  state.daftarProyek.push(proyek);
}

export function aturUlangState() {
  state.kategoriAktif = KATEGORI_BAWAAN;
  localStorage.removeItem(KUNCI);
}
