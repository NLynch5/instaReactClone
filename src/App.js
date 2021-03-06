import React, { useState } from "react";
import "./App.css";
import "./utils/api";

//import icons from images folder
import add from "./components/images/add.png";
import heart from "./components/images/heart.png";
import paperplane from "./components/images/paperplane.png";
import home from "./components/images/home.png";
import magnifyGlass from "./components/images/magnifyGlass.png";
import reels from "./components/images/reels.png";
import shoppingBag from "./components/images/shoppingBag.png";
import filledCircle from "./components/images/filledCircle.png";
import holdingImage from "./components/images/holdingImage.png";

//fetch request for the API to work
const App = () => {
  const [pics, setPics] = useState("");

  return (
    <div className="container">
      <header className="navBar">
        <h1 className="navBarTitle">Instagram</h1>
        <img scr={add} alt="add function"></img>
        <img scr={heart} alt="heart icon"></img>
        <img classname="headImg" src={paperplane} alt="send arrow icon"></img>
      </header>
      <section>?1?</section>
      <section>
        <img scr={holdingImage}></img>
      </section>
      <footer className="footer">
        <img id="footImg" scr={home} alt="homepage house icon" />
        <img scr={magnifyGlass} alt="magnifying glass search icon"></img>
        <img scr={reels} alt="video reels icon"></img>
        <img scr={shoppingBag} alt="shopping bag icon"></img>
        <img scr={filledCircle} alt="circle with profile picture"></img>
      </footer>
    </div>
  );
};

export default App;
