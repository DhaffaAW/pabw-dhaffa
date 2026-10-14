const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function ambilNotisia() {
  const respons = await fetch(ALAMAT);

  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }

  const data = await respons.json();

  return data;
}
