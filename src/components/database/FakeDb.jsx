import React from 'react';

const AddToDb = (id) => {
    let cart={};
    let storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
         cart=JSON.parse(storedCart);
    }
    let quantity=cart[id];
    if(quantity){
        quantity=quantity+1;
        cart[id]=quantity;
    }
    else{
        cart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(cart));
};

const getDataFromLocalStorage=()=>{
    let stordeData=localStorage.getItem('shopping-cart');
    stordeData=JSON.parse(stordeData);
    return stordeData;

}

export {AddToDb,getDataFromLocalStorage};