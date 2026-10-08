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

function render(data) {
  daftarEl.textContent = "";

  data.forEach((proyek) => {
    daftarEl.append(buatKartu(proyek));
  });

  pesanKosongEl.hidden = data.length > 0;
}

// tampil pertama kali
render(daftarProyek);

// Lembar C

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

filterEl.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  const hasilFilter = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );

  render(hasilFilter);
  tandaiTombolAktif(tombol);
});
