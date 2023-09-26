import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth  hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h2
            initial={{y:"2rem",opacity:0}}
            animate={[{ y:'0', opacity:1},]}
            transition={{
              duration:2,
              type:"spring"
            }}
            >
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </motion.h2>
            <div className="orange-circle"></div>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">kajejiw lewieji lweijiwel ijewelwe iekjlejjiej leijwl</span>
            <span className="secondaryText">kajejiw lewieji lweijiwel ijewelwe iekjlejjiej leijwl</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text"/>
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9900} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premimum Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1200} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Gold Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={500} end={700} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Silver Products</span>
            </div>
          </div>
        

        </div>
        <div className="hero-right">
          <motion.div 
          initial={{x:'7rem',opacity:0}}
          animate={{x:0,opacity:"1"}}
          transition={{
            duration:"2",
            type:"spring"
          }}
          className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
