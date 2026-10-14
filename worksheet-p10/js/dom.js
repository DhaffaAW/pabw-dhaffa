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

  if (data.length === 0) {
    pesanKosongEl.hidden = false;
    return;
  }

  pesanKosongEl.hidden = true;

  data.forEach((proyek) => {
    daftarEl.append(buatKartu(proyek));
  });
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

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = formEl.querySelector("#nama-pemain");
  const negara = formEl.querySelector("#negara");
  const ranking = formEl.querySelector("#ranking");
  const usia = formEl.querySelector("#usia");
  const kategori = formEl.querySelector("#kategori");

  const kolom = [nama, negara, ranking, usia, kategori];

  let sah = true;

  kolom.forEach((input) => {
    if (input.value.trim() === "") {
      input.setAttribute("aria-invalid", "true");
      sah = false;
    } else {
      input.removeAttribute("aria-invalid");
    }
  });

  if (!sah) {
    alert("Semua kolom wajib diisi.");
    kolom.find((input) => input.value.trim() === "")?.focus();
    return;
  }

  alert("Data berhasil diperiksa.");
});
