class stokmakanan {
  constructor(stok) {
    this.saldo = stok;
  }

  // Getter
  get stok() {
    return this.saldo;
  }

  // Setter
  set stok(jumlah) {
    if (jumlah >= 0) {
      this.saldo = jumlah;
    } else {
      console.log("Stok tidak boleh kosong!");
    }
  }
}

const stokMakanan = new stokmakanan(500000);

console.log(stokMakanan.stok); 

stokMakanan.stok = 750000;
console.log(stokMakanan.stok); 

stokMakanan.stok = 1000; 