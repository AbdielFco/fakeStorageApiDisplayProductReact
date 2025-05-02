import './card.css'
import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg'

function Card({ product, count, max, setCount }) {

  // Control para evitar que el índice sea inválido
  const handlePrev = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleNext = () => {
    if (count < max - 1) setCount(count + 1);
  };

  // props.image
  return (
    <div className='card'>
      <div className='image'>
        <img src={product.image || reactLogo} className="image" alt="Image product" height="50px" width="50px" />
      </div>

      <div className="content">
        <h2>This is a <strong>{product.title}</strong></h2>
        <div className="meta">
          <p>Price: <strong>{product.price}</strong></p>
          <p>Category: <strong>{product.category}</strong></p>
        </div>
        <p>Description: <strong>{product.description}</strong></p>
      </div>

      <div className='rating'>
        <p>Rate: <strong>{product.rating?.rate}</strong></p>
        <p>Count: <strong>{product.rating?.count}</strong></p>
      </div>

      <div className="action">
        <p>Index actual {count}</p>
        <div className="buttons">
          <button className='button' onClick={handlePrev} disabled={count === 0}>Anterior</button>
          <button className='button' onClick={handleNext} disabled={count === max - 1}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default Card