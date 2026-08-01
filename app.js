let pemasukan = 0;
let pengeluaran = 0;

function tambahTransaksi() {

    let jenis = prompt("Masukkan jenis: pemasukan / pengeluaran");
    let jumlah = Number(prompt("Masukkan jumlah uang"));

    if (jenis === "pemasukan") {
        pemasukan += jumlah;
    } 
    else if (jenis === "pengeluaran") {
        pengeluaran += jumlah;
    } 
    else {
        alert("Jenis tidak sesuai");
    }

    updateTampilan();
}

function updateTampilan() {

    let saldo = pemasukan - pengeluaran;

    document.getElementById("saldo").innerHTML =
        "Rp " + saldo.toLocaleString();

    document.getElementById("pemasukan").innerHTML =
        "Rp " + pemasukan.toLocaleString();

    document.getElementById("pengeluaran").innerHTML =
        "Rp " + pengeluaran.toLocaleString();
}