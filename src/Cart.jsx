// Cart.jsx
export const Cart = (props) => {
console.log(props);

    return (
    <div key={props} >
     <h1>Name:{props.prod.name}</h1>
     <h1>ID:{props.prod.id}</h1>
     <h1>Email:{props.prod.email}</h1>
      </div>
    );
  };    