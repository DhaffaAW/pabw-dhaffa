import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { muat, simpan } from "./storage.js";

const KATEGORI_BAWAAN = "semua";
const KATEGORI_VALID = ["semua", "web", "data"];

const simpanan = muat();

const kategoriTersimpan =
  simpanan &&
  simpanan.versi === 2 &&
  KATEGORI_VALID.includes(simpanan.kategoriAktif)
    ? simpanan.kategoriAktif
    : KATEGORI_BAWAAN;

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: kategoriTersimpan,
};

export function pilihKategori(nilai) {
  if (!KATEGORI_VALID.includes(nilai)) return;

  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}

export function tambahProyek(proyek) {
  state.daftarProyek.push(proyek);
  simpan(state);
  render(state);
}

export function aturUlangState() {
  state.kategoriAktif = KATEGORI_BAWAAN;
  render(state);
}
