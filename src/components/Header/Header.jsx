import React from "react";
import styleHeader from './Header.module.css'
import ph1 from '../../assets/img1.jpg'
import ph2 from '../../assets/img2.jpg'
import ph3 from '../../assets/img3.jpg'
import ph4 from '../../assets/img4.jpg'

import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <div className={`${styleHeader.header}`}>
        <div className={styleHeader.box}><img src={ph1} alt="" /></div>
        <div className={styleHeader.box}><img src={ph2} alt="" /></div>
        <div className={styleHeader.box}><img src={ph3} alt="" /></div>
        {/* <div className={styleHeader.box}><img src={ph4} alt="" /></div> */}

        <Cart 
         cart_img={ph4}
         cart_title='The Dandy chair'
         cart_price={`${125}$`}

        />
    </div>
  )
}

export default Header;