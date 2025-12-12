import React from "react";
import "./Front.css";
import pizza from './image/pizza.avif'
import tomato from './image/tomato.avif'
import burgur from './image/burger.avif'
import momo from './image/momo.avif'
import bgvideo from './image/bgVideo.mp4'

const Front = () => {
  return (
    <>
      <section className="main">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>

        <div className="overPlay">
          <h1 className="ZomatoHead">zomato</h1>
          <h1>India's #1</h1>
          <h1>food delivery app</h1>
          <p>Experience fast & easy online ordering</p>
          <p>on the Zomato app</p>

          <div className="googleApple">
            <h1 className="GoogleLogo">Google Play</h1>
            <h1 className="appleLogo">Apple store</h1>
          </div>
        </div>
      </section>

      <section className="bg-white" id="imgs">
        <img className="momo" src={momo} alt="momo" />
        <img className="burger" src={burgur} alt="burger" />
        <img className="tomato1" src={tomato} alt="tomato" />
        <img className="tomato2" src={tomato} alt="tomato" />
        <img className="pizza" id="piz" src={pizza} alt="pizza" />

        <div className="bgWhiteContant">
          <h1>Better food for</h1>
          <h1>more people</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            minus animi ipsam quidem, dolorum eos eum sapiente
          </p>
        </div>
      </section>
    </>
  );
};

export default Front;
