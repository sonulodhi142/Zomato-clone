import React from "react"; 
import './Slider.css'
import new_collections from '../Assets/new_collections'

const Slider = () =>{

    return(
        <div className="c">
            {
                new_collections.map((slide => {
                    return <div className="c-item">
                        <img src={slide.image} alt="" className="c-img" />
                    </div>
                }))
            }
            
        </div>
    )
}

export default Slider;