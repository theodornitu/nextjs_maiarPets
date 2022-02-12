// Components
import Meta    from '../components/Meta';
import Nav     from '../components/Nav';

// Styles
import s       from '../styles/Plan.module.css'

// Icons
import { FcOk, FcClock } from "react-icons/fc";

const plan = () => {
  // Build style groups
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");

  return (
    <div>
      <Meta />
      <Nav />
      <section className={darkSection}>
        <img 
          src="/RoadMap.png" 
          class = {s.image} 
          alt="Riki #1" 
          width={900} 
          height={2000}  
        />
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>On short</strong></p>
            <p>
              <FcOk className={s.icon}/>NFT Art, traits and growth plan <br/>
              <FcOk className={s.icon}/>Launch Twitter, Discord, Website and Dapp <br/>
              <FcClock className={s.icon}/>Maiar Pets frens community build-up  <br/>
              <FcClock className={s.icon}/>Reveal partnerships  <br/>
              <FcClock className={s.icon}/>Mint wave 1: 500 Maiar Pets NFTs @???EGLD  <br/>
              <FcClock className={s.icon}/>Wave 1 perks airdropped/shipped to Frens Squad ($4000+ value)  <br/>
              <FcClock className={s.icon}/>Frens Squad proposal for chosen NGOs   <br/>
              <FcClock className={s.icon}/>Mint wave 2: 2000 Maiar Pets NFTs @???EGLD  <br/>
              <FcClock className={s.icon}/>Start the Maiar Exchange Farming  <br/>
              <FcClock className={s.icon}/>Wave 2 perks airdropped/shipped/paid to Frens Squad  <br/>
              <FcClock className={s.icon}/>Frens Squad votes NGOs  <br/>
              <FcClock className={s.icon}/>Mint wave 3: 500 Maiar Pets NFTs @???EGLD  <br/>
              <FcClock className={s.icon}/>Roll-out of Maiar Pets Dapp upgrades <br/>
              <FcClock className={s.icon}/>Maiar Pets #Superstar competition winner is announced  <br/>
              <FcClock className={s.icon}/>Collections roadmap reveal - new #Superstars <br/>
              <FcClock className={s.icon}/>First donations to community-voted NGOs   <br/>
              <FcClock className={s.icon}/>Distribute weekly token rewards to Frens Squad  <br/>
              <FcClock className={s.icon}/>Maiar Pets Ventures reveal  <br/>
            </p>

            <p>Interested about the detailed plan? Read below:</p>

            <p><strong>Step #1</strong></p>
            <p>We decided to dedicate more time for our website, thus pulled in the Dapp integrations in Step 1, creating a fully functional Dapp for our Minting process. 
               This will ensure a smooth minting and stable connection for our beloved frens, you. 
               On top of this, we already added two team members that will work on API integrations, observer nodes and back-end functionalities. Trust us, you'll love this one!</p>
            <p>Launching the first NFT collection under Maiar Pets, featuring our #superstar Riki is also planned here. <br/>
               This collection has unique body traits that were inspired by our beloved dog, Riki. </p>
            <p>On top of his brilliant appearance, we sprinkled some weird accessories and expressions that will make your #profilepic unique and funny.</p>
            
            <p><strong>Step #2</strong></p>
            <p>Having the website and dapp sorted out, the collection launched and the funds prepared, we will announce the first major partnerships.</p>
            <p>This is an important step as it means that some NGOs, animal hospitals or shelters already embarked with us on this adventure and the best is yet to come. </p>
            <p>This step will focus on collecting the needs of each entity, establish the budgets and align on the steps needed to ensure the needs are met.  <br/>
               Here, the Frens Squad can also suggest NGOs that would need our help, so we can diversify our donation portfolio.
               More than that, the first airdrops and perks for our Frens Squad are planned here, so make some space in your wallet already!</p>

            <p><strong>Step #3</strong></p>
            <p>The moment you'll all be waiting for: Call for Frens! We need #superstars here, so you will need to submit your own lovely pet for the #superstar job.</p>
            <p>The next #superstar will not have to work that hard, just a few pictures to highlight it's beauty and we're finished. Also, more info regarding the economy of #superstars will be announced shortly.</p>
            <p>This call for #superstars will bring to the table a lot of interesting NFTs to be generated, so you guessed it: we need a roadmap! This roadmap will be decided by Frens Squad in the near future and revealed to the public.</p>
            <p>But where will this take place? In Discord? In Twitter? Hmm... maybe the pulling in of the Dapp implementation was worth it.</p>

            <p><strong>Step #4</strong></p>
            <p>We've come so far, yet still much to go. But the end is far from being here, 
               we've built a great community of frens from all over the world, we've helped animals in need, 
               we've conquered the #profilepic challenge with cute pets on social media.</p>
            <p>Maiar Pets Ventures becomes our focus, leveraging a percentage from Chest of Treats to aquire tokens, NFTs from visionary projects built on Elrond Network to further grow. </p>
            <p>This will also be relevant for the Frens Squad, as some of the investments (tokens, NFTs) will come down the ladder to our Frens, the ones that helped us get up. </p>
            <p>During this period, our community will drive the activities, as we put our faith in the hands of Frens. You will be able to come with project ideas or vote for existing ones, having the chance to obtain a booster from Maiar Pets.</p>

            <p><strong>Step #Moon</strong></p>
            <p>Well, well, well. We're already far, but there is more! Will it be Metaverse? Game-Fi? What do you think will come next?</p>
          </text> 
        </div>
      </section>
    </div>
  )
}

export default plan
