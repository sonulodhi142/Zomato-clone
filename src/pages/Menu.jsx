import React, { useState } from "react";
import './Menu.css'
import all_product from "../Components/Assets/all_product"
import { Link } from "react-router-dom";


const Menu = ( ) => {

    const [cart , setCart] = useState(all_product)
    
    
    return(
        cart.map((e)=>{
                return <div className="card cartitems-format cartitems-format-main cart" style={{width : '25rem'}}>
                <img className="card-img-top" src={e.image} alt="#"/>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p className="new-price">${e.new_price} <span className="old-price">${e.old_price}</span></p>
                  <button className="cartitems-quantity"><Link style={{textDecoration: 'none', color: "black"}} to='/desciption'>Order Now</Link></button>
                </div>
              </div>
        }
    )
 )
}
export default Menu;