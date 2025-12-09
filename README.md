# Urbansolv Smart Building Dashboard

Frontend test case untuk Urbansolv. Aplikasi ini menampilkan monitoring sederhana untuk gedung pintar (smart building).

## Fitur

- Header: judul "Urbansolv Smart Building Dashboard" dan nama gedung (Gedung A).
- KPI cards:
  - Total konsumsi energi hari ini (kWh).
  - Rata-rata suhu ruangan (°C).
  - Rata-rata CO2 (ppm).
- Tabel daftar ruangan:
  - Kolom: Nama Ruang, Lantai, Suhu (°C), CO2 (ppm), Status.
  - Badge warna status: hijau (Normal), kuning (Warning), merah (Alert).
  - Dropdown filter lantai.
- Grafik tren:
  - Line chart konsumsi energi 24 jam terakhir menggunakan Recharts.
- Data dummy diambil dari `lib/data.ts` (tanpa backend).

## Tech Stack

- Next.js (App Router) + TypeScript.
- Tailwind CSS untuk styling.
- Recharts untuk grafik.

## Cara Menjalankan

1. Clone repository ini.

2. Masuk ke folder frontend:
cd frontend

3. Install dependencies:
npm install

4. Jalankan aplikasi:
npm run dev

5. Buka `http://localhost:3000` di browser.

## Fitur 3D Map

- Halaman `/map` yang menampilkan box 3D sederhana sebagai representasi gedung.
- Dibangun dengan Three.js melalui @react-three/fiber dan @react-three/drei.
