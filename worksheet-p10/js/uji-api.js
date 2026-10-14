import { ALAMAT } from "./api.js";

const pesanApi = document.querySelector("#pesan-api");

export async function ambilNotisia() {
  try {
    if (pesanApi) {
      pesanApi.textContent = "Sedang memuat data...";
    }

    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error("status " + respons.status);
    }

    const data = await respons.json();

    if (pesanApi) {
      pesanApi.textContent = data.length
        ? `Data berhasil dimuat: ${data.length} postingan.`
        : "Belum ada data yang tersedia.";
    }

    return data;
  } catch (galat) {
    console.error("gagal memuat", galat.message);

    if (pesanApi) {
      pesanApi.textContent =
        "Data gagal dimuat. Periksa koneksi internet atau coba lagi.";
    }

    throw galat;
  }
}

window.ambilNotisia = ambilNotisia;
