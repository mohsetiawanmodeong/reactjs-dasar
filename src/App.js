import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" title="Uyo Dora" category="SEPATU" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="sepatu.jpg" alt="sepatu" />
    </div>
  )
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon {discount}% Off</p>
    );
  }
  else if (isDiscount === "coming") {
    return (
      <p>Akan ada diskon...</p>
    );
  }
  else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, title, isDiscount } = props;
  const benefits = ["Tahan lama", "Kuat lama", "Tahan banting", "Tahan air"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li >
  );
  const price = "74.000.000";
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, blanditiis
          adipisci obcaecati tempora reprehenderit corporis repellat? Tempore quisquam
          officiis, optio iure praesentium dolore omnis mollitia. Eos minus minima
          praesentium laboriosam.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(title, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;