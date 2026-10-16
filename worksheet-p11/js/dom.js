const daftarEl = document.querySelector("#daftar");
const pesanKosongEl = document.querySelector("#pesan-kosong");

export function render(data) {
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

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}
