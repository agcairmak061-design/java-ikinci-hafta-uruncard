import UrunCard from "./UrunCard";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      
      <h1>Ürün Listesi</h1>

      <UrunCard
        ad="Macbook Pro"
        fiyat={65000}
        stokAdedi={5}
        kategori="Laptop"
      />

      <UrunCard
        ad="iPhone 15"
        fiyat={52000}
        stokAdedi={0}
        kategori="Telefon"
      />

      <UrunCard
        ad="Logitech Mouse"
        fiyat={1200}
        stokAdedi={12}
        kategori="Aksesuar"
      />

    </div>
  );
}

export default App;