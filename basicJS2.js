let harga = [9000, 20000, 14000, 10000];
let jumlah = [10, 2, 5, 5];
let total = 0;

for (let i = 0; i < harga.length; i++) {
  total += harga[i] * jumlah[i];
}

console.log(`Total yg harus dibayar = Rp${total}`);
