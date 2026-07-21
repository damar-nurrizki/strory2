class mahasiswa { 
    nama;Damar
    jurusan;Teknik_Informatika
    constructor(nama, jurusan) {
        this.nama = nama;
        this.jurusan = jurusan;
    }


belajar() {
    console.log(this.nama + " sedang bongkar robot");
}
}
const mahasiswa1 = new mahasiswa("Damar", "Teknik Informatika");
console.log(mahasiswa1.nama);
mahasiswa1.belajar();