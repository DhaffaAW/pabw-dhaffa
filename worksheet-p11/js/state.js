import { daftarProyek as dataProyek } from "./data.js";

export const state = {
  daftarProyek: [...dataProyek],
  kategoriAktif: "semua",
};

export function ubahKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function tambahProyek(proyek) {
  state.daftarProyek.push(proyek);
}
