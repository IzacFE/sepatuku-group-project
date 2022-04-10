import React, { useState } from "react";
import "./ProductForm.css";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    resetName: () => {
      setValue("");
    },
    resetDescrip: () => {
      setValue("");
    },
    resetPrice: () => {
      setValue("");
    },
    resetStock: () => {
      setValue("");
    },
    resetPicture: () => {
      setValue("");
    },
  };
};

export default function NewProductForm({ onSubmit }) {
  const { resetName, ...nameProduct } = useInputValue("");
  const { resetDescrip, ...description } = useInputValue("");
  const { resetPrice, ...price } = useInputValue("");
  const { resetStock, ...stock } = useInputValue("");
  const { resetPicture, ...picture } = useInputValue("");

  return (
    <>
      <section className="newFormContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(
              nameProduct.value,
              description.value,
              price.value,
              stock.value,
              picture.value
            );
            resetName();
            resetDescrip();
            resetPrice();
            resetStock();
            resetPicture();
            console.log(e);
          }}
        >
          <input
            className="newProductForm"
            type="text"
            {...nameProduct}
            placeholder="Nama Produk"
          />
          <input
            className="newProductForm"
            type="text"
            {...description}
            placeholder="Deskripsi Produk"
          />
          <input
            className="newProductForm"
            type="number"
            {...price}
            placeholder="Harga Produk"
          />
          <input
            className="newProductForm"
            type="number"
            {...stock}
            placeholder="Stok Produk"
          />
          <input
            className="newProductForm"
            type="text"
            {...picture}
            placeholder="url gambar"
          />
          <input className="newProductButton" type="submit" value="Ajukan" />
        </form>
      </section>
    </>
  );
}
