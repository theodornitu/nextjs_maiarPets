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
              I do nap in my humans bed, on their sofa, on pillows, under the bed, in the office, on the floor, on the tiles ... you got the point.
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
      <section className={lightSection}>
        <div className={s.flexContent}>
          <ul className={s.listGroup}>
            <li>
              <img 
                src="/MaiarPet3.png" 
                class = {s.listItem} 
                alt="Riki NFT #3" 
                width={200} 
                height={200}  
                onClick={handleClick}
              />
            </li>
            <li>
              <img 
                src="/MaiarPet5.png" 
                class = {s.listItem}  
                alt="Riki NFT #5" 
                width={200} 
                height={200}  
                onClick={handleClick}
              />
            </li>
            <li>
              <img 
                src="/MaiarPet4.png" 
                class = {s.listItem}  
                alt="Riki NFT #4" 
                width={200} 
                height={200}  
                onClick={handleClick}
              />
            </li>
            <li>
              <img 
                src="/MaiarPet6.png" 
                class = {s.listItem} 
                alt="Riki NFT #6" 
                width={200} 
                height={200}  
                onClick={handleClick}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <div className={s.textcontent2}>
            <p><strong>What is Maiar Pets?</strong></p>
            <p>A community project that aims to donate monthly to help animals in need and offer real-life benefits and rewards for warm-hearted Maiar Pets NFT owners.</p>
            <p>A collection of 2500 algorithmically generated NFTs with laughable traits that were inspired by our beloved pets. 
              The first collection has Riki as the #superstar, our lovely Shiba Inu. You probably already know him, right?
              The wacky Maiar Pets now live on the Elrond Blockchain, the one we truly believe will thrive in the future.</p>
            <p>We aim to bring together Frens from all around the world, share the same love for animals and offer belonging to our community.
              Pet Frens will also get the chance to be the collection #superstar very soon, they only need to have one Maiar Pet in the wallet.
              Isn't this exciting? We can't wait to see your suggestions for the next steps, keep close!</p>
            <p><strong>I want my own Maiar Pet!</strong></p>
            <p>Say no more, we're thrilled to hear that! Adopting a Maiar Pet is now easier than ever, here's how to get yours:</p>
            <ul>
              <li>Mint one on: Coming Soon! - You will receive a random NFT from our collection</li>
              <li>Buy one on secondary market: Coming soon!</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <img 
            src="/RikiPost1.png" 
            class = {s.postItem} 
            alt="Next steps?"  
          />
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <div className={s.textcontent2}>
            <p><strong>Frens Squad</strong> </p>
            <p>Being part of the Frens Squad means having at least one Maiar Pet adopted, which comes with some benefits:</p>
            <p>Governance </p>
            <ul>
              <li>You are part of the limited number of people who have real impact on future projects developed under Maiar Pets.</li>
              <li>You can submit your own pet as #superstar. If you win the community votes, we will create a collection with your pet and you will earn royalties from it's sales.</li>
            </ul>
            <p>Exclusiveness </p>
            <ul>
              <li>Warm hearted - you are one of the few people that really helps the unfortunate animals by contributing to donations we offer to NGOs, animal shelters and hospitals.</li>
              <li>Deals, no bills - Frens Squad will have deals on pet treats, toys and subscriptions. (Currently this will be available in Romania. With the help of Frens we will go worldwide)</li>
              <li>Whitelisting - you take part of new projects developed under Maiar Pets just by being part of Frens Squad. Did we mentioned airdrops?</li>
            </ul>
            <p>Revenues</p>
            <ul>
              <li>Frens Squad will receive passive income from the "Chest of Treats", the Maiar Pet Wallet. The distribution percentage will be announced soon as we develop our economy roadmap.</li>
            </ul>
            <p><strong>What about value?</strong></p>
            <p>We have a unique plan that will be disclosed shortly before the launch. We really like Beni's philosophy "slowly, then suddenly".</p>
            <p><strong>Targets</strong></p>
            <p>Our main target is to build a sustainable, long-term project bridging Elrond NFTs to real-world values in order to fulfill monthly donations to animals in need.</p>
            <p>With this sorted out, we strive to build a large community of animal lovers that can benefit from it. Either it be giveaways, freebies or tips and tricks.</p>
            <p>As future plans, we aim to grow the concept of Maiar Pets Ventures, which will focus mainly on economic growth and investing in visionary projects.</p>
          </div> 
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <img 
            src="/RikiPost2.png" 
            class = {s.postItem} 
            alt="Are you going to be part of it?"  
          />
        </div>
      </section>
    </div>
  )
}

