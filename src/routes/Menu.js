import React from 'react';
import Header from '../components/Header';
import MenuLitil from '../components/MenuLitil';

const Menu = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign: "center", paddingTop: "15%"}}>Menu</h1>
      <MenuLitil />
    </div>
  )
}

export default Menu
