let tanah = 20.5 * 30;
let harga = 1500000;
let total = 0;

let jumlah = tanah * harga;
let ppn = (jumlah * 15) / 100;
jumlah = +ppn;
console.log(`Nominal yg harus dibayar = Rp${jumlah}`);
