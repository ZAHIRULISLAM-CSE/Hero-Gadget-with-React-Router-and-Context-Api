import React from "react";
import { getDataFromLocalStorage } from "../database/FakeDb";
import { useLoaderData } from "react-router-dom";
import CartItem from "../Cards/CartItem";

const SavedCart = () => {
  const AllProduct = useLoaderData();
  // console.log(AllProduct)
  const savedArr = [];
  const savedToLocal = () => {
    let savedProduct = getDataFromLocalStorage();
    for (const id in savedProduct) {
      const saved = AllProduct.find((pd) => pd.id == id);
      saved.quantity = savedProduct[id];
      savedArr.push(saved);
    }
  };
  savedToLocal();
  const length=savedArr.length;
  let total=0;
  for(const singleItem of savedArr){
    total=total+singleItem.price * singleItem.quantity ;
  }
  return (
    <div>
      <div className="flex justify-center">
        {
            length >0 ?<h1 className="text-2xl">Reviwe Cart Items</h1>:<h1 className="text-2xl">Cart is Empty</h1>
        } 
      </div>
      <div>
        <div className="flex flex-col items-center">
          {savedArr.map((singleProduct) => (
            <CartItem product={singleProduct} key={singleProduct.id}></CartItem>
          ))}
        </div>
      </div>
      <div>
             <h1 className="text-center">Total Amount:{total}</h1>
      </div>
    </div>
  );
};

export default SavedCart;
