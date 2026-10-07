const profil = {
  nama: "Dhaffa Arya Wiguna",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 6,
};

// Fungsi 1: Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi 2: Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Supaya bisa diuji dari Console
window.profil = profil;
window.buatPerkenalan = buatPerkenalan;
window.formatKeahlian = formatKeahlian;
