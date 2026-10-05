// Function Dasar
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanGrade(nilaiAkhir) {
  if (nilaiAkhir >= 85) return "A";
  else if (nilaiAkhir >= 75) return "B";
  else if (nilaiAkhir >= 65) return "C";
  else if (nilaiAkhir >= 55) return "D";
  return "E";
}

// Menangkap event submit dari form
document
  .getElementById("formNilai")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form mereload halaman

    // Konversi Input ke Number
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Validasi Array dan Loop
    const daftarNilai = [tugas, uts, uas];
    let semuaValid = true;

    for (let i = 0; i < daftarNilai.length; i++) {
      if (daftarNilai[i] < 0 || daftarNilai[i] > 100) {
        semuaValid = false;
      }
    }

    if (!semuaValid) {
      alert("Pastikan semua nilai berada di rentang 0-100!");
      return;
    }

    // Proses Hitung
    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const grade = tentukanGrade(nilaiAkhir);
    const status = nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";

    // Object Hasil
    const mahasiswa = {
      nama: nama,
      tugas: tugas,
      uts: uts,
      uas: uas,
      nilaiAkhir: nilaiAkhir,
      grade: grade,
      status: status,
    };

    console.log("Data hasil perhitungan:", mahasiswa);

    // Template Literal untuk menyisipkan ke string HTML
    const hasil = document.getElementById("hasil");
    hasil.innerHTML = `
    <h2>Hasil Perhitungan</h2>
    <p>Mahasiswa: <strong>${mahasiswa.nama}</strong></p>
    <p class="score">Nilai Akhir: <strong>${mahasiswa.nilaiAkhir.toFixed(1)}</strong></p>
    <p>Status: <span class="statusClass">${mahasiswa.status}</span></p>
  `;
  });
