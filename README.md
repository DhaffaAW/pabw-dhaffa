# PABW - Dhaffa Arya Wiguna - 25523187

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 - Halaman profil saya

Topik halaman saya: Pemain Badminton Favorit Saya

- Judul halaman: Pemain Badminton Favorit Saya
- Deskripsi: Menampilkan daftar pemain badminton saya, beserta informasi negara, ranking, usia, dan kategorinya.
- Tautan navigasi: Beranda, Pemain Favorit, Tambah Pemain
- Dua bagian utama: Daftar Pemain Badminton Favorit, Tambah Pemain Badminton
- Kolom tabel: Nama pemain, Negara, Ranking, Usia, Kategori
- Kolom form: Nama pemain, Negara, Ranking, Usia, Kategori
- Gambar: Badminton.jpg

## Catatan Penggunaan AI

Dalam pengerjaan worksheet P3, saya banyak menggunakan AI sebagai alat bantu untuk memahami materi dan alur pengerjaan. AI membantu saya menjelaskan konsep dasar HTML5 semantik, memberikan contoh syntax, membantu memahami instruksi pada worksheet, serta membantu pemeriksaan dan pengujian halaman profil yang telah dibuat.

## Pertemuan 4 - Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1E293B (Biru tua/Navy), warna ini dipilih karena memberikan kesan profesional, modern, dan konsisten dengan tema halaman profil pemain badminton.

### Token yang saya tetapkan

| Token           | Nilai   | Untuk apa                      |
| --------------- | ------- | ------------------------------ |
| --color-primary | #1E293B | tombol, tautan, penanda        |
| --color-fg      | #111827 | warna teks utama               |
| --color-bg      | #F8FAFC | latar halaman                  |
| --color-surface | #FFFFFF | latar kartu dan panel          |
| --color-border  | #D1D5DB | garis pemisah dan tepi kotak   |
| --color-focus   | #2563EB | garis fokus papan ketik        |
| --radius-md     | 0.5rem  | sudut tombol, kartu, dan isian |
| --space-4       | 1rem    | jarak standar antar elemen     |

Kriteria selesai saya:

- Mengubah warna utama melalui token dapat mengubah tampilan tombol, header, dan elemen penting lainnya secara konsisten.
- Layout halaman menggunakan Grid Layout untuk menata tabel dan form.

## Pertemuan 5 - Layout Modern: Flexbox dan Grid

Pada pertemuan 5 ini saya mempelajari dan menerapkan CSS Grid dan Flexbox untuk membuat layout halaman yang responsif.

## Bagian A – Perencanaan Layout

### A.1 Kerangka Halaman

| Bagian Halaman | Peran                              | Nilai yang Saya Pakai |
| -------------- | ---------------------------------- | --------------------- |
| Baris pertama  | Kepala halaman (logo, judul, menu) | auto                  |
| Baris kedua    | Isi utama (sidebar dan konten)     | 1fr                   |
| Baris ketiga   | Kaki halaman                       | auto                  |
| Kolom isi      | Sidebar tetap, konten lentur       | 16rem 1fr             |

### A.2 Sumbu dan Arah

| Komponen                | Arah  | Sumbu Utama | Sumbu Silang |
| ----------------------- | ----- | ----------- | ------------ |
| Navbar                  | Baris | Horizontal  | Vertikal     |
| Baris tombol pada kartu | Baris | Horizontal  | Vertikal     |
| Daftar menu samping     | Kolom | Vertikal    | Horizontal   |

### A.3 Kapan Flex, Kapan Grid

| Bagian                  | Pilihan Saya | Alasan Satu Baris                                          |
| ----------------------- | ------------ | ---------------------------------------------------------- |
| Kepala halaman          | Flex         | Menyusun judul, navigasi, dan tombol tema dalam satu baris |
| Isi dua kolom           | Grid         | Membagi sidebar dan konten utama menjadi dua kolom         |
| Galeri kartu            | Grid         | Jumlah kolom dapat berubah otomatis sesuai ukuran layar    |
| Isi di dalam satu kartu | Flex         | Konten kartu disusun dari atas ke bawah                    |

---

## Bagian C – Grid Responsif

### C.3 Yang Dipakai untuk Lebar

| Nilai                 | Artinya                                          | Dipakai Untuk |
| --------------------- | ------------------------------------------------ | ------------- |
| 1fr                   | Membagi ruang sisa setelah ukuran tetap dihitung | Kolom konten  |
| 16rem                 | Lebar tetap yang ikut ukuran huruf akar          | Sidebar       |
| minmax(16rem, 1fr)    | Batas bawah dan batas atas satu jalur            | Galeri        |
| repeat(auto-fit, ...) | Jumlah jalur mengikuti ruang yang tersedia       | Galeri        |

---

## Bagian D – Penempatan Grid

### D.3 Pilihan Penempatan Saya

| Blok              | Cara         | Potongan Kode                     |
| ----------------- | ------------ | --------------------------------- |
| Kartu An Se-young | Span         | .sorotan { grid-column: span 2; } |
| Sidebar           | Area bernama | .sidebar { grid-area: sisi; }     |

---

## Bagian E – Penyelesaian Masalah Layout

### E.3 Item Meluber Keluar Kotak

| Gejala                                             | Penyebab yang Paling Sering                             | Perbaikan                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Kotak melewati tepi kanan layar pada ukuran 360 px | Lebar minimum item lebih besar dari ruang yang tersedia | Mengecilkan nilai `minmax()` pada galeri atau mengubah jumlah kolom menjadi satu pada layar kecil |
| Tinggi baris melompat                              | `align-items: stretch` meregangkan item terpendek       | `align-items: flex-start`                                                                         |
| Baris turun tak diinginkan                         | Lebar minimum item lebih besar dari sisa ruang          | Batas bawah `minmax()` dikecilkan                                                                 |

---

## Bagian F – Evaluasi

### F.1 Hasil Pengujian

| Periksa                   | Hasil |
| ------------------------- | ----- |
| Kerangka halaman          | ✔     |
| Jarak memakai gap         | ✔     |
| Lebar memakai fr atau rem | ✔     |
| Galeri adaptif            | ✔     |
| Tidak meluber             | ✔     |
| Tema gelap Pertemuan 4    | ✔     |

### F.2 Potongan Kode yang Paling Sering Dipakai

| Potongan Kode                        | Dipakai Pada                  |
| ------------------------------------ | ----------------------------- |
| repeat(auto-fit, minmax(16rem, 1fr)) | Galeri kartu pemain badminton |

## F.4 Tiket Keluar

| Pertanyaan                                                         | Jawaban                                                                                                                                                                                                     |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bagian halaman mana yang memakai flex, dan mengapa flex yang cocok | Bagian navbar, karena elemen-elemen di dalamnya disusun dalam satu baris secara horizontal sehingga lebih mudah diatur menggunakan Flexbox.                                                                 |
| Bagian halaman mana yang memakai grid, dan mengapa grid yang cocok | Bagian galeri kartu pemain, karena Grid memudahkan pengaturan banyak kartu dalam beberapa kolom yang responsif sesuai ukuran layar.                                                                         |
| Satu kasus meluber yang Anda temui hari ini, dan perbaikannya      | Kartu pemain meluber pada lebar 360 px karena ukuran minimum kolom terlalu besar. Perbaikannya menggunakan media query dan pengaturan Grid yang lebih fleksibel agar kartu dapat menyesuaikan ukuran layar. |

### F.5 Catatan untuk Pengampu

| Keterangan                         | Isi                                                         |
| ---------------------------------- | ----------------------------------------------------------- |
| Bagian yang paling sulit           | Mengatur tampilan responsif pada layar kecil                |
| Bagian yang ingin dibahas di kelas | Grid Area, Span, dan Responsive Layout menggunakan CSS Grid |
