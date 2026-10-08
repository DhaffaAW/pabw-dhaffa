import { daftarProyek } from "./app.js";

// Lembar A
const daftarEl = document.querySelector("#daftar");
const filterEl = document.querySelector("#filter");
const pesanKosongEl = document.querySelector("#pesan-kosong");
const formEl = document.querySelector("form");

console.log(daftarEl);
console.log(filterEl);
console.log(pesanKosongEl);
console.log(formEl);

// Lembar B
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

daftarProyek.forEach((proyek) => {
  daftarEl.append(buatKartu(proyek));
});
