import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/CartActioin/cartActions';
import './ProductCard.scss';
import { FiSmartphone, FiCpu  } from 'react-icons/fi';
import { FaHdd, FaMemory  } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Kiểm tra nếu product không tồn tại, return null để không render component
  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card-container">
      <div className='product-img'>
        <img src={product.image} className="card-image" alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-title">{product.name}</p>
        <div className="product-price">
          <span className="sale-price">{product.discountPrice}$</span>
        </div>
        <div className='product-param-container'>
          <span className='product-paramter'>
              <span className='param'>
                <FaHdd className='param-icon'/>
                <p>{product.storageCapacity}</p>
              </span>
              <span className='param'>
                <FaMemory className='param-icon'/>
                <p>{product.ram}</p>
              </span>
              <span className='param'>
                <FiCpu className='param-icon'/>
                <p>{product.chipset}</p>
              </span>
          </span>
          <span className='product-paramter'>
            <span className='param'>
                <FiSmartphone className='param-icon'/>
                <p>{product.display}</p>
              </span>
          </span>
        </div>
      </div>
      <div className='product-btn'>
          <button onClick={handleAddToCart} className="btn-add-cart">Mua ngay</button>
          <button className="btn-compare">So sánh</button>
        </div>
    </div>
  );
};

export default ProductCard;
