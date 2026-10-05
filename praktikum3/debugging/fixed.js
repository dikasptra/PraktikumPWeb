// PERBAIKAN 1: Deklarasi variabel dan pemanggilannya dibuat konsisten
const namaMahasiswa = "Raka";
console.log("Nama mahasiswa:", namaMahasiswa);

// PERBAIKAN 2: Menggunakan fungsi Number() agar teks berubah menjadi angka sebelum dijumlahkan
const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai:", total);

// PERBAIKAN 3: Memanggil nama function yang tepat
function hitungRataRata(a, b) {
  return (a + b) / 2;
}

console.log("Rata-rata:", hitungRataRata(nilaiTugas, nilaiUts));
