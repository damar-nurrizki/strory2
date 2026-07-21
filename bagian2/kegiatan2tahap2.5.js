class component {
    constructor(props ={}) {
        this.props = props;
    }
    render() {
        throw new Error("Method render() harus diimplementasikan");
    }
} 
class produk extends component {
    #nama;
    #harga
    constructor(props) {
        super(props);
        this.#nama = props.nama;
        this.#harga = props.harga;    
    }
    render() {
        return `Nama produk: ${this.#nama},Rp- ${this.#harga}`;
    }
}
const produk1 = new produk({ 
    nama: "Laptop",
    harga: 110000000 
});
console.log(produk1.render());
 
const produk2 = new produk({
    nama: "Smartphone",
    harga: 15000000
});
console.log(produk2.render());