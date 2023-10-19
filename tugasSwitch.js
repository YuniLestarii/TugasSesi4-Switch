let pendapatan = 100000; // Jumlah pendapatan dapat diubah sesuai kebutuhan

let uangJasa, komisi, totalKomisi;

switch (true) {
    case (pendapatan <= 200000):
        uangJasa = 10000;
        komisi = pendapatan * 0.1;
        totalKomisi = uangJasa + komisi;
        console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
        break;
    case (pendapatan > 200000 && pendapatan <= 500000):
        uangJasa = 20000;
        komisi = pendapatan * 0.15;
        totalKomisi = uangJasa + komisi;
        console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
        break;
    case (pendapatan > 500000):
        uangJasa = 30000;
        komisi = pendapatan * 0.2;
        totalKomisi = uangJasa + komisi;
        console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
        break;
    default:
        console.log("Pendapatan tidak valid.");
}