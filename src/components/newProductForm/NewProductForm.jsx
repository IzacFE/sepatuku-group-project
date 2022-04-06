import React from "react";
import "./NewProductForm.css";

export default function NewProductForm() {
  return (
    <>
      <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   onSubmit(listTitle.value, listDescription.value);
      //   resetTitle();
      //   resetDescrip();
      // }}
      >
        <input
          type="text"
          // {...listTitle}
          placeholder="Nama Produk"
        />
        <input
          type="text"
          // {...listTitle}
          placeholder="Deskripsi Produk"
        />
        <input
          type="text"
          //   {...listDescription}
          placeholder="Harga Produk"
        />
        <input
          type="text"
          //   {...listDescription}
          placeholder="Stok Produk"
        />
        <input
          type="text"
          //   {...listDescription}
          placeholder="url gambar"
        />
        <input className="todoButton" type="submit" value="Tambah" />
      </form>
    </>
  );
}
