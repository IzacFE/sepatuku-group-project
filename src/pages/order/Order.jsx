import React from "react";
import "./Order.css"

import { useNavigate } from "react-router-dom";
export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="orderContainer">
      <h4 className="orderTeks">Alamat Pengiriman</h4>
      <div className="orderBox">
            <input type="text" placeholder="Alamat" />
            <input type="text" placeholder="Kota" />
            <input type="text" placeholder="Provinsi" />
            <input type="text" placeholder="kode Pos" />
      </div>
      <h4 className="orderTeksKartu">Metode Pembayaran</h4>
      <div className="orderBox">
            <div className="orderInputKartu">
            <select className="orderCardOption">
              <option value="visa">Visa</option>
              <option value="mastercard">Master Card</option>
            </select>
            <input type="text" placeholder="Nama Pemilik Kartu" />
            <input type="text" className="orderNomorKartu" placeholder="Nomor Kartu" />
            <input type="text" className="orderKode" placeholder="Kode CVV2" />
            <p className="orderTeksExp">Kadaluarsa Kartu</p>
            <input type="text" className="orderBulanExp" placeholder="Bulan" />
            <input type="text" className="orderTahunExp" placeholder="Tahun" />
            </div>
      </div>
      <h4 className="orderTeksPembayaran">Lihat Pembelian </h4>
      <div className="orderBox">
            <div className="orderLihatPembayaran">
            <p>Total Barang :</p> <p>2</p> <br />
            <p>Ongkos Kirim :</p> <p>Ongkir Gratis</p> <br />
            <p>Total Harga :</p> <p>Rp.3.000.000</p>
            </div>
      </div>
      <button onClick={() => navigate("/history")}>Bayar</button>
    </div>
  )
}
