import { state, ubahKategori } from "./state.js";
import { render } from "./dom.js";

export function pasangPendengar() {
  const filterEl = document.querySelector("#filter");
  const formEl = document.querySelector("form");

  filterEl.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    ubahKategori(tombol.dataset.kategori);

    const hasilFilter = state.daftarProyek.filter(
      (proyek) =>
        state.kategoriAktif === "semua" ||
        proyek.kategori === state.kategoriAktif,
    );

    render(hasilFilter);

    filterEl.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("aktif", item === tombol);
    });
  });

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const kolom = [
      formEl.querySelector("#nama-pemain"),
      formEl.querySelector("#negara"),
      formEl.querySelector("#ranking"),
      formEl.querySelector("#usia"),
      formEl.querySelector("#kategori"),
    ];

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
}
