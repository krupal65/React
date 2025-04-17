import { useState } from "react"
import './index.css'

export const Pracfinal = () => {
  const [product, setProduct] = useState([
    { name: "krupal", age: 20 },
    { name: "krul", age: 18 },
  ]);

  return (
    <div className="text-6xl text-green-600 text-5xl font-bold bg-gradient-to-tl">
        
      {product.map((ele, index) => {
        return (
          <ul key={index}>
            <li>{ele.name}</li>
            <li>{ele.age}</li>
          </ul>
        );
      })}
    </div>
  );
};
