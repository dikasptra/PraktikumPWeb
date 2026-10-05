// INPUT
const daftarUmur = [8, 15, 25, 65, 17];
let jumlahData = daftarUmur.length;

// Syarat Output Console untuk Debugging
console.log("=== Program Penentu Kategori Usia Dimulai ===");
console.log("Jumlah data yang akan diproses: " + jumlahData);

// PROSES & KEPUTUSAN
function tentukanKategori(umur) {
  if (umur <= 12) {
    return "Anak-anak";
  } else if (umur >= 13 && umur <= 17) {
    return "Remaja";
  } else if (umur >= 18 && umur <= 59) {
    return "Dewasa";
  } else {
    return "Lansia";
  }
}

// OUTPUT & LOOP
for (let i = 0; i < jumlahData; i++) {
  const umurSaatIni = daftarUmur[i];
  const hasilKategori = tentukanKategori(umurSaatIni);

  // Menampilkan hasil akhir perulangan
  console.log(
    "Umur " + umurSaatIni + " tahun masuk dalam kategori: " + hasilKategori,
  );
}
