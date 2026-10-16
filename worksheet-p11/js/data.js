export const profil = {
  nama: "Dhaffa Arya Wiguna",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  {
    judul: "Halaman Profil",
    kategori: "web",
    selesai: true,
  },
  {
    judul: "Website Badminton",
    kategori: "web",
    selesai: true,
  },
  {
    judul: "Analisis Ranking BWF",
    kategori: "data",
    selesai: false,
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}
