const daftarEl = document.querySelector("#daftar");
const pesanKosongEl = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif,
  );
}

export function render(state) {
  daftarEl.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    pesanKosongEl.hidden = false;
    return;
  }

  pesanKosongEl.hidden = true;

  tampil.forEach((proyek) => {
    daftarEl.append(buatKartu(proyek));
  });
}
