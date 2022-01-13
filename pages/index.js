// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import Welcome from '../components/Welcome'

import React, { useState } from 'react';
import {IoPawOutline} from 'react-icons/io5';

// Styles import
import s  from '../styles/Home.module.css'

export default function Home() {
  //Relevant styles
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <Meta />
      <Nav />
      <section className={lightSection}>
        <div className={s.grid}>
          <div>
            <h1 className={s.title}>
              Wof, woof! Riki here!
            </h1>
            <p className={s.paragraph}>
              The Chief Executive Frens Maker at Maiar Pets
            </p>
            <p className={s.caption}>
              Learn more about the story behind my project, let's be worldwide frens!
            </p>
          </div>
          <div className={s.titleGridComp}>
          <img 
              src="/MaiarPet2.png" 
              class = {click ? s.image2show : s.image2} 
              alt="Riki NFT #1" 
              width={200} 
              height={200}  
              onClick={handleClick}
            />
            <img 
              src="/Riki_1.jpg" 
              class = {click ? s.imageshow : s.image} 
              alt="Riki #1" 
              width={200} 
              height={200}  
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <div className={s.textContent}>
            <Welcome />
          </div> 
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>Henlo frens!</strong> 
            </p>
            <p>
              Let me tell you about me    
              <IoPawOutline className={s.faPaw} />   
              <IoPawOutline className={s.faPaw2} />
            </p>
            <p>
              My favorite time of the day is nap time. 
              I do nap in my humans bed, on their coach, on pillows, under the bed, in the office, on the floor, on the tiles ... you got the point.
              You already know a lot about me, but what don't you know? I'm full of energy and joy, that's why everyone likes me, young people, old people, teenagers, dogs. 
              I have a lot of frens as I am a very well socialized boy, my humas took care of that. 
            </p>
            <p>
              I can't control my feelings when I see my fav peps, so usually I just jump and give them all my affection. 
              It's not in my nature to obey, but I often listen to my humans and, from time to time, I consider what they say is best for me. 
            </p>
            <p>  
              Usually, when people see me, they say "look at this gorgeous fox"... but they don't know that I'm "half cat, half wolf". 
              I am pretty obssesed to be clean all the time. I spend a lot of time grooming myself. So, no dirty toys or dogs around me when I am playing, please!
            </p>
          </text> 
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <div className={s.textContent}>
            {/* <Welcome /> */}
          </div> 
        </div>
      </section>
    </div>
  )
}

