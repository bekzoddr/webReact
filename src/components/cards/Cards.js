import React, { useEffect, useState } from "react";
import { API_URl } from "../../static";
import image from "../../assets/images/image.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { cardImages } from "../../static";
function Cards() {
  const cardImgs = cardImages?.map((el, image) => {
    <img src={image} alt="card_img" />;
  });

  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URl)
      .then((res) => SetData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const products = data?.map((el) => (
    <div key={el.id} className="card">
      <Link to={`/singlePage/${el.id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="card__content">
        <h2>{el.name}</h2>
        <button>+Add to card</button>
      </div>
      <h3>{el.username}</h3>
      <h2>{el.email}</h2>
      <div className="card__buttons">
        <button className="blue"></button>
        <button className="green"></button>
        <button className="yellow"></button>
        <button className="red"></button>
      </div>
    </div>
  ));
  return <div className="product__cards container">{products}</div>;
}

export default Cards;
