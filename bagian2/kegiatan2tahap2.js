class Bank {
  #saldo;

  constructor(saldoAwal) {
    this.#saldo = saldoAwal;
  }

  setor(jumlah) {
    this.#saldo += jumlah;
  }

  tarik(jumlah) {
    if (jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
    } else {
      console.log("Saldo tidak mencukupi");
    }
  }

  lihatSaldo() {
    return this.#saldo;
  }
}

const rekening = new Bank(1000000);

rekening.setor(500000);
rekening.tarik();

console.log("Saldo terakir: Rp" + rekening.lihatSaldo());


