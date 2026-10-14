import { ALAMAT } from "./api.js";

async function muat() {
  const respons = await fetch(ALAMAT);

  console.log("status", respons.status, "ok", respons.ok);

  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }

  console.log("Content-Type", respons.headers.get("content-type"));

  return respons.json();
}

// Agar bisa dipanggil dari Console browser
window.muat = muat;
