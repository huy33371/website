import React from 'react';
import './ProductCard.scss'; // Import file SCSS

const ProductCard = ({ image, name, description, originalPrice, salePrice }) => {
  return (
    <div className="card product-card">
      <img src={image} className="card-img-top product-card__image" alt={name} />
      <div className="card-body">
        <h5 className="card-title product-card__name">{name}</h5>
        <p className="card-text product-card__description">{description}</p>
        <p className="card-text product-card__price">
          <span className="product-card__original-price">{originalPrice}</span>
          <span className="product-card__sale-price">{salePrice}</span>
        </p>
        <button className="btn btn-primary product-card__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
