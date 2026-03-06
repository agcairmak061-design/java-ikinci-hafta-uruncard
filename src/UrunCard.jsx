function UrunCard({ ad, fiyat, stokAdedi, kategori }) {

  const stokVarMi = stokAdedi > 0;

  const kartStili = {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    backgroundColor: stokVarMi ? "#ffffff" : "#eeeeee"
  };

  return (
    <div style={kartStili}>

      <h2>{ad}</h2>

      <p>
        Kategori: <strong>{kategori}</strong>
      </p>

      {/* Eğer stok varsa fiyat göster */}
      {stokVarMi ? (
        <p>
          Fiyat: <strong>{fiyat} ₺</strong>
        </p>
      ) : (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          BU ÜRÜN TÜKENDİ
        </p>
      )}

      {/* Stok bilgisi */}
      {stokVarMi && (
        <p>
          Stok Adedi: <strong>{stokAdedi}</strong>
        </p>
      )}

    </div>
  );
}

export default UrunCard;