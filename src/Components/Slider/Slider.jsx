import React from "react"; 
import './Slider.css'
import new_collections from '../Assets/new_collections'

const Slider = () =>{

    return(
        <div className="carausal">
            {
                new_collections.map((slide => {
                    return <div className="slide">
                        <img src={slide.image} alt="" />
                    </div>
                }))
            }
            
        </div>
    )
}

export default Slider;