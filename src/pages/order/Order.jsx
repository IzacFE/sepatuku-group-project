import React, { useState } from "react";
import "./Order.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Order() {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [kartu, setKartu] = useState("");
  const [pemilik, setPemilik] = useState("");
  const [nomorKartu, setNomorKartu] = useState("");
  const [ccv, setCcv] = useState("");
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState("");

  console.log('alamat:', alamat);
  console.log('kota:', kota);
  console.log('provinsi:', provinsi);
  console.log('kodepos:', kodePos);
  console.log('kartu:', kartu);
  console.log('pemilik:', pemilik);
  console.log('nomor:', nomorKartu);
  console.log('ccv:', ccv);
  console.log('bulan:', bulan);
  console.log('tahun:', tahun);

  const handlerOrder = async () => {
    await axios
    .post(`/products`, {
      
    })

  }

  return (
    <div className="orderContainer">
      <h4 className="orderTeks">Alamat Pengiriman</h4>
      <div className="orderBox">
            <input type="text" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            <input type="text" placeholder="Kota" value={kota} onChange={(e) => setKota(e.target.value)} />
            <input type="text" placeholder="Provinsi" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} />
            <input type="text" placeholder="kode Pos" value={kodePos} onChange={(e) => setKodePos(e.target.value)} />
      </div>
      <h4 className="orderTeksKartu">Metode Pembayaran</h4>
      <div className="orderBox">
            <div className="orderInputKartu">
            <select className="orderCardOption" value={kartu} onChange={(e) => setKartu(e.target.value)}>
              <option value="visa">Visa</option>
              <option value="mastercard">Master Card</option>
            </select>
            <input type="text" placeholder="Nama Pemilik Kartu" value={pemilik} onChange={(e) => setPemilik(e.target.value)} />
            <input type="text" className="orderNomorKartu" placeholder="Nomor Kartu" value={nomorKartu} onChange={(e) => setNomorKartu(e.target.value)} />
            <input type="text" className="orderKode" placeholder="Kode CVV2" value={ccv} onChange={(e) => setCcv(e.target.value)} />
            <p className="orderTeksExp">Kadaluarsa Kartu</p>
            <input type="text" className="orderBulanExp" placeholder="Bulan" value={bulan} onChange={(e) => setBulan(e.target.value)} />
            <input type="text" className="orderTahunExp" placeholder="Tahun" value={tahun} onChange={(e) => setTahun(e.target.value)} />
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
      <button>Bayar</button>
    </div>
  )
}
