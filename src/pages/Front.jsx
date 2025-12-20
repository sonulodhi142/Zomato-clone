import React from "react";
import "./Front.css";
import pizza from "./image/pizza.avif";
import tomato from "./image/tomato.avif";
import burgur from "./image/burger.avif";
import momo from "./image/momo.avif";
import bgvideo from "./image/bgVideo.mp4";
import calender from "./image/calender.avif";

const Front = () => {
  return (
    <>
      <section className="main">
        <video autoPlay muted loop playsInline className="bg-video">
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
      <section className="page-3">
        <div className="page-3-heading">
          <h1>What’s waiting for you </h1>
          <h1>on the app?</h1>
          
        </div>
        <div className="page-3-para">
          <p>Our app is packed with features that </p>
          <p>enable you to experience food</p>
          <p>delivery like never before</p>
        </div>

        <div className="page-3-contant">
          <div className="card-4 page-3-card">
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
          </div>
          <div className="page-3-mobile page-3-card">
            {/* <img src={mobile} alt="" /> */}
            <div className="calender">
              <img src={calender} alt="" />
              <h3>schedule</h3>
              <p>your order</p>
            </div>
          </div>
          <div className="card-4 page-3-card">
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
            <div className="card-4-item">card</div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Front;
