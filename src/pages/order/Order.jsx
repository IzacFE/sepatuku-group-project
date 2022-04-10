import React, { useEffect, useState } from "react";
import "./Order.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Order() {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [kartu, setKartu] = useState("");
  const [pemilik, setPemilik] = useState("");
  const [nomorKartu, setNomorKartu] = useState("");
  const [cvv, setCvv] = useState("");
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState("");
  const [alertError, setAlertError] = useState();

  useEffect(() =>{
    if(!localStorage.getItem("token")){
      navigate("/signin");
    }
  },[navigate])

  // console.log('alamat:', alamat);
  // console.log('kota:', kota);
  // console.log('provinsi:', provinsi);
  // console.log('kodepos:', kodePos);
  // console.log('kartu:', kartu);
  // console.log('pemilik:', pemilik);
  // console.log('nomor:', nomorKartu);
  // console.log('cvv:', cvv);
  // console.log('bulan:', bulan);
  // console.log('tahun:', tahun);

  const handleOrder = async (e) => {
    await axios
    .post("products", {
      street: alamat,
      city: kota,
      province: provinsi,
      zip_code: kodePos,
      card_type: kartu,
      card_name: pemilik,
      card_number: nomorKartu,
      cvv: cvv,
      expired_month: bulan,
      expired_year: tahun,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then((response) => {
      // console.log(response.data);
      // alert("order  berhasil");
      if(response){
        if(response.data){
          setAlamat("");
          setKota("");
          setProvinsi("");
          setKodePos("");
          setKartu("");
          setPemilik("");
          setNomorKartu("");
          setCvv("");
          setBulan("");
          setTahun("");
          Swal.fire({
            icon: 'success',
            title: response.data.message,
            confirmButtonText: 'OK',
          }).then((result) => {
            if(result.isConfirmed){
              navigate("/history")
            }
          })
        }
      }
    })
    .catch((err) => {
      setAlertError(err.response.data.message);
        setTimeout(() => {
          setAlertError("")
        },1500)
    })
  }


  return (
    <div className="orderContainer">
      {
            alertError && (
              <div className="signinAlert">
            <p>{alertError}</p>
          </div>
            )
          }
      <h4 className="orderTeks">Alamat Pengiriman</h4>
      <div className="orderBox">
            <input type="text" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            <input type="text" placeholder="Kota" value={kota} onChange={(e) => setKota(e.target.value)} />
            <input type="text" placeholder="Provinsi" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} />
            <input type="text" placeholder="Kode Pos" value={kodePos} onChange={(e) => setKodePos(e.target.value)} />
      </div>
      <h4 className="orderTeksKartu">Metode Pembayaran</h4>
      <div className="orderBox">
            <div className="orderInputKartu">
            <select className="orderCardOption" value={kartu} onChange={(e) => setKartu(e.target.value)}>
              <option value="default" selected hidden>Pilih Kartu</option>
              <option value="visa">Visa</option>
              <option value="mastercard">Master Card</option>
            </select>
            <input type="text" placeholder="Nama Pemilik Kartu" value={pemilik} onChange={(e) => setPemilik(e.target.value)} />
            <input type="text" className="orderNomorKartu" placeholder="Nomor Kartu" value={nomorKartu} onChange={(e) => setNomorKartu(e.target.value)} />
            <input type="text" className="orderKodeCvv" placeholder="Kode CVV2" value={cvv} onChange={(e) => setCvv(e.target.value)} />
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
      <button type="button" onClick={(e) => handleOrder(e)}>Bayar</button>
    </div>
  )
}