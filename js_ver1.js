const buttonHitung = document.querySelector(".hitung-umur");
const displayUmur = document.querySelector(".display-umur");

buttonHitung.addEventListener('click', hitungUmur)

function hitungUmur() {
    const tahunLahir = document.getElementById("tahun").value;
    const tanggalLahir = document.getElementById("tanggal").value;
    const bulanLahir = document.getElementById("bulan").value;

    const date = new Date();
    const tahun = date.getFullYear()
    const bulan = date.getMonth()
    const tanggal = date.getDate()

    const totalTahun = tahun > tahunLahir ? tahun - tahunLahir : 'Tahun Lahir tidak boleh lebih besar dari tahun sekarang' 

    const totalBulan = bulanLahir != null ? bulanLahir - bulan : 'Bulan Lahir tidak boleh lebih besar dari bulan sekarang'

    const totalTanggal = tanggal < tanggalLahir ? tanggal - tanggalLahir : 'Tanggal berbeda2 setiap bulan, pastikan anda menginputkan tanggal dengan benar'

    displayUmur.textContent = `Umur kamu adalah ${totalTahun} tahun, ${totalBulan} bulan, ${totalTanggal} hari, selamat!!!`
}