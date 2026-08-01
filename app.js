let pemasukan = 0;
let pengeluaran = 0;

function tambahPemasukan(jumlah) {
    pemasukan += jumlah;
    hitungSaldo();
}

function tambahPengeluaran(jumlah) {
    pengeluaran += jumlah;
    hitungSaldo();
}

function hitungSaldo() {
    let saldo = pemasukan - pengeluaran;
    console.log("Saldo saat ini: Rp " + saldo);
}