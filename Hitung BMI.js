let tb = 1.7;
let bb = 90;

let bmi = bb / (tb * tb);
if (bmi < 18.5) {
  console.log(`Status berat : Kurang Gizi`);
}
if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`Status berat : Normal`);
}
if (bmi >= 25.0 && bmi <= 29.9) {
  console.log(`Status berat : Lebih Gizi`);
}
if (bmi >= 30.0) {
  console.log(`Status berat : Obesitas`);
}

// console.log(`Status bb Rhodey = ${}`)
