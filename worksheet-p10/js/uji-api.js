import { ambilNotisia } from "./api.js";

const pesanApi = document.querySelector("#pesan-api");

async function ujiApi() {
  try {
    if (pesanApi) {
      pesanApi.textContent = "Sedang memuat data...";
    }

    const data = await ambilNotisia();

    if (pesanApi) {
      pesanApi.textContent = data.length
        ? `Data berhasil dimuat: ${data.length} postingan.`
        : "Belum ada data yang tersedia.";
    }
  } catch (galat) {
    console.error("gagal memuat", galat.message);

    if (pesanApi) {
      pesanApi.textContent =
        "Data gagal dimuat. Periksa koneksi internet atau coba lagi.";
    }
  }
}

ujiApi();
