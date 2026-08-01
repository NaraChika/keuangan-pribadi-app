let pemasukan = Number(localStorage.getItem("pemasukan")) || 0;
let pengeluaran = Number(localStorage.getItem("pengeluaran")) || 0;

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
        return;
    }

    localStorage.setItem("pemasukan", pemasukan);
    localStorage.setItem("pengeluaran", pengeluaran);

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

updateTampilan();
let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

function tambahTransaksi() {

    let jenis = prompt("Masukkan jenis: pemasukan / pengeluaran");
    let jumlah = Number(prompt("Masukkan jumlah uang"));

    if (jenis !== "pemasukan" && jenis !== "pengeluaran") {
        alert("Jenis tidak sesuai");
        return;
    }

    let transaksi = {
        jenis: jenis,
        jumlah: jumlah,
        tanggal: new Date().toLocaleDateString()
    };

    riwayat.push(transaksi);

    localStorage.setItem("riwayat", JSON.stringify(riwayat));

    if (jenis === "pemasukan") {
        pemasukan += jumlah;
    } else {
        pengeluaran += jumlah;
    }

    localStorage.setItem("pemasukan", pemasukan);
    localStorage.setItem("pengeluaran", pengeluaran);

    updateTampilan();
    tampilkanRiwayat();
}

function tampilkanRiwayat(){

    let daftar = document.getElementById("riwayat");
    daftar.innerHTML = "";
    let grafik;

function buatGrafik(){

    let ctx = document.getElementById("grafik");

    grafik = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Pemasukan", "Pengeluaran"],
            datasets: [{
                label: "Keuangan",
                data: [pemasukan, pengeluaran]
            }]
        }
    });
}

buatGrafik();

    riwayat.forEach(item => {

        daftar.innerHTML += `
        <li>
        ${item.tanggal} -
        ${item.jenis} :
        Rp ${item.jumlah.toLocaleString()}
        </li>
        `;

    });
}

tampilkanRiwayat();
let installPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    installPrompt = e;

    document.getElementById("installBtn").style.display = "block";

});


document.getElementById("installBtn").addEventListener("click", async () => {

    if (installPrompt) {

        installPrompt.prompt();

        installPrompt = null;

    }

});
