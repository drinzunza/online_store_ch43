import './quantityPicker.css';
import { useState } from 'react';

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function decrease() {
    if (quantity === 1) return;
    let value = quantity - 1;

    props.onChange(value);
    setQuantity(value);
  }

  function increase() {
    props.onChange(quantity + 1);
    setQuantity(quantity + 1);
  }

  return (
    <div className="qty-picker">
      <button className="btn btn-sm btn-outline-success" disabled={quantity === 1} onClick={decrease}>
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-outline-success" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
