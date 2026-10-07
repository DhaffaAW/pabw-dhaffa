const profil = {
  nama: "Dhaffa Arya Wiguna",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

// Fungsi dari Lembar C
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Lembar D
const daftarPemain = [
  {
    nama: "An Se-young",
    negara: "Korea Selatan",
    ranking: 1,
    favorit: true,
  },
  {
    nama: "Anthony Sinisuka Ginting",
    negara: "Indonesia",
    ranking: 49,
    favorit: true,
  },
  {
    nama: "Kim Won Ho",
    negara: "Korea Selatan",
    ranking: 1,
    favorit: true,
  },
  {
    nama: "Seo Seung Jae",
    negara: "Korea Selatan",
    ranking: 1,
    favorit: true,
  },
  {
    nama: "Alwi Farhan",
    negara: "Indonesia",
    ranking: 10,
    favorit: false,
  },
];

console.table(profil.keahlian);
console.table(daftarPemain);

const favorit = daftarPemain.filter((pemain) => pemain.favorit);

console.table(favorit);

const pemainIndonesia = daftarPemain.find(
  (pemain) => pemain.negara === "Indonesia",
);

console.log(pemainIndonesia);

const namaPemain = daftarPemain.map((pemain) => pemain.nama);

console.table(namaPemain);

// untuk pengujian Console
window.profil = profil;
window.daftarPemain = daftarPemain;
window.buatPerkenalan = buatPerkenalan;
window.formatKeahlian = formatKeahlian;
