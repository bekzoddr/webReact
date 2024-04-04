import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { API_URl } from "../../static";
import { cardImages } from "../../static";
import image from "../../assets/images/card2.jpg";
import image2 from "../../assets/images/card10.jpg";
import image3 from "../../assets/images/card3.jpg";
import image4 from "../../assets/images/card6.png";
import image5 from "../../assets/images/card9.jpg";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URl}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="single__page">
      <div className="product__images">
        <div className="primary__image">
          <div className="ShareIcons">
            <FaRegHeart />
            <IoShareSocial />
          </div>
          <img src={image} alt="" />
        </div>
        <div className="secondary__images">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
      <div className="product__info">
        <div className="product__name">
          <h2>{product?.name}</h2>
          <div className="product__color">
            <button className="gray"></button>
            <button className="milk"></button>
            <button className="milky"></button>
            <button className="white"></button>
            <button className="black"></button>
          </div>
          <div className="product__price">
            <h2>Email:</h2>
            <h3>{product?.email}</h3>
          </div>
          <h2 className="description">{product?.address.city}</h2>
          <div className="credit">
            <h3>3</h3>
            <h3>6</h3>
            <h3>12</h3>
            <h3>16</h3>
            <h3>18</h3>
          </div>
          <button className="cardbtn">+ Add to cart</button>
          <div className="btns">
            <button className="buy">Buy</button>
            <button className="order">Buy in installments</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
