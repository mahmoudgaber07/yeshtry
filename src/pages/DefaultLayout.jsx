import React, { useState,lazy, Suspense } from 'react'
import {Routes, Route, Navigate } from "react-router-dom";
import {Navbar} from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// import { Product } from '../components/Product'
import {NotFound} from '../components/NotFound'
import { Store } from '../components/Store'
const LazyProduct = lazy(async()=> await import("../components/Product"));

export const DefaultLayout = () => {
  const [cartItems,setCartItems] = useState([]);
  const  addToCart = (item) => {
    let productItem = cartItems.find(product => product.id === item.id)
    if(productItem){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
    }else{
      item.quantity = 1;
      setCartItems([...cartItems,item]);
      console.log(cartItems);
    }
  }
  const removeItemCart = (id)=>{
      const newList = cartItems.filter((item) => item.id !== id);
      setCartItems(newList);
    }
  
  return (
    <>
    <Header cartItems={cartItems} removeItemCart={removeItemCart}/>
    <Navbar/>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/store"}/>} />
        <Route path={"/store"} element={<Store addToCart={addToCart} exact/>} />
        <Route path={"store/:id"} element={
        <Suspense fallback={<div>...Loading</div>}>
          <LazyProduct addToCart={addToCart}/>
        </Suspense>
        }/>
        <Route path={"*"} element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}
