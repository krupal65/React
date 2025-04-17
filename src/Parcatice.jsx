// Parcatice.jsx
import products from './api/product.json';
import { Cart } from './Cart';

export const Parcatice = () => {
  return (
    <div>
      {products.map((prod) => (
        <Cart key={prod.id} prod={prod}/>
      ))}
    </div>
  );
};
