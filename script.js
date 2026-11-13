const judul = document.getElementById("judul");
const menuItems = document.querySelectorAll(".menu-item");

// kartu yang bisa berubah warna
const kartu = {
  statistik: document.getElementById("statistik"),
  progres:   document.getElementById("progres"),
  aktifitas: document.getElementById("aktifitas"),
  lampiran:  document.getElementById("lampiran"),
};

// hapus semua highlight merah
function resetMerah() {
  Object.values(kartu).forEach((el) => el.classList.remove("merah"));
}

// aksi untuk tiap menu
const aksi = {
  home() {
    judul.textContent = "Selamat Datang";
  },
  mahasiswa() {
    judul.textContent = "Rini Syafitri";
  },
  kelas() {
    judul.textContent = "Rini Syafitri Kelas SI-3C";
  },
  aktifitas() {
    // Aktifitas Selanjutnya + Progres Kelas
    kartu.aktifitas.classList.add("merah");
    kartu.progres.classList.add("merah");
  },
  statistik() {
    kartu.statistik.classList.add("merah");
  },
  dokumen() {
    kartu.lampiran.classList.add("merah");
  },
};

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = item.dataset.menu;
    if (!aksi[menu]) return; // settings & sign out: tidak ada aksi

    // tandai menu aktif
    menuItems.forEach((m) => m.classList.remove("active"));
    item.classList.add("active");

    // bersihkan warna merah sebelumnya, lalu jalankan aksi menu ini
    resetMerah();
    aksi[menu]();
  });
});