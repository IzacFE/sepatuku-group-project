import React, { useState } from "react";
import "./NewProductForm.css";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    resetTitle: () => {
      setValue("");
    },
    resetDescrip: () => {
      setValue("");
    },
  };
};

export default function NewProductForm({ onSubmit }) {
  const { resetTitle, ...listTitle } = useInputValue("");
  const { resetDescrip, ...listDescription } = useInputValue("");

  return (
    <>
      <section className="newFormContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(listTitle.value, listDescription.value);
            resetTitle();
            resetDescrip();
          }}
        >
          <input
            className="newProductForm"
            type="text"
            // {...listTitle}
            placeholder="Nama Produk"
          />
          <input
            className="newProductForm"
            type="text"
            // {...listTitle}
            placeholder="Deskripsi Produk"
          />
          <input
            className="newProductForm"
            type="text"
            //   {...listDescription}
            placeholder="Harga Produk"
          />
          <input
            className="newProductForm"
            type="text"
            //   {...listDescription}
            placeholder="Stok Produk"
          />
          <input
            className="newProductForm"
            type="text"
            //   {...listDescription}
            placeholder="url gambar"
          />
          <input className="newProductButton" type="submit" value="Tambah" />
        </form>
      </section>
    </>
  );
}
