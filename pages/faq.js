// Components
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

// Reactjs & Nextjs
import Link    from 'next/link'
import { FaTwitterSquare, FaDiscord, FaInstagram } from 'react-icons/fa';

// Config & Helpers
import { navPages } from '../routes';

// Styles
import s  from '../styles/Faq.module.css'

const faq = () => {
  // Build style groups
    const darkSection = [s.section, s.dark].join(" ");
    const lightSection = [s.section, s.light].join(" ");

  return (
    <div>
      <Meta />
      <Nav />
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>Who is Riki?</strong> </p>
            <p>Riki is the first #superstar of the Maiar Pets NFT collection. </p>
            <p><strong>What does "Frens" mean?</strong> </p>
            <p>Frens is the plural form of a member of our community of people and their beloved pets or someone who simply share the same love for animals. </p>
          </text>
        </div>
      </section>

      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>What is Maiar Pets?</strong></p>
            <p>Maiar Pets is a community project that aims to donate monthly to help animals in need and offer real-life benefits and rewards for warm-hearted Maiar Pets NFT owners.</p>
            <p>The first NFT collection of 3500 algorithmically generated NFTs is inspired by our first #superstar, Riki. It lives on Elrond Blockchain and fits perfectly your #profilepic.</p>
            <p><strong>How can I adopt a Maiar Pet?</strong></p>
            <ul>
              <li>Mint one on our dapp, you will receive a random NFT from our collection.</li>
                <div className={s.dappButton}>
                  <div className={s.dappContainer}>
                    <div className={s.dappLink}>
                      <Link href={navPages.home}> Maiar Pets Dapp (soon) </Link>
                    </div>
                  </div>
                </div>
              <li>Buy one on secondary market:</li>
              <div className={s.dappButtonTMarket}>
                <div className={s.dappContainer}>
                  <div className={s.dappLink}>
                    <a target="_blank" href={navPages.trustmarket}> Trust Market (soon) </a>
                  </div>
                </div>
              </div>
              <div className={s.dappButtonDRare}>
                <div className={s.dappContainer}>
                  <div className={s.dappLink}>
                    <a target="_blank"nk href={navPages.deadrare}> Dead Rare (soon) </a>
                  </div>
                </div>
              </div>
              <div className={s.dappButtonIsengard}>
                <div className={s.dappContainer}>
                  <div className={s.dappLink}>
                    <a target="_blank" href={navPages.isengard}> Isengard Market (soon) </a>
                  </div>
                </div>
              </div>
            </ul>
          </text>
        </div>
      </section>

      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>How many Maiar Pets can be adopted?</strong></p>
            <p>3000 NFTs can be adopted by minting, the additional 500 NFTs will be used for community giveaways, partnerships and airdrops. </p>
            <p><strong>What is the price for one Maiar Pet?</strong></p>
            <p>Price coming soon.</p>
          </text>
        </div>
      </section>

      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>When will adopting start?</strong></p>
            <p className={s.link}>Launch date is scheduled for February-March timeframe, follow our <a target="_blank" href='https://twitter.com/maiar_pets'>twitter</a> to be up to date.</p>
            <p><strong>What do I get for owning a Maiar Pet?</strong></p>
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
          </text>
        </div>
      </section>
     
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>What other collections will Maiar Pets have?</strong></p>
            <p>Maiar Pets will have additional collections featuring community-voted #superstars.<br/>
            We aim to showcase different breeds of dogs, cats and other pets owned by Frens Squad members.<br/>
            Each collection will have specific traits inspired by the collection #superstar.</p>
            <p><strong>Why Elrond?</strong></p>
            <p>Fast, cheap, reliable. We're based in Romania and we love Elrond's work, that's why we chose them.</p>
          </text>
        </div>
      </section>

      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>What is the use of funds?</strong></p>
            <p>Sales</p>
            <ul>
              <li>25% - Monthly donations to community-voted NGOs distributed over a minimum period of 12 months to ensure sustainability.</li>
              <li>25% - Chest of Treats - Farming for the Frens Squad members - token rewards, paid weekly. Farming and payments will start when the collection is sold out. </li>
              <li>25% - Maiar Pets Ventures</li>
              <li>25% - #superstar royalties, business expenses, team</li>
            </ul>
            <p>Secondary market royalties</p>
            <ul>
              <li>During public minting - all the royalties go to Chest of Treats, providing more value for Frens Squad</li>
              <li>Collection sold out - half of the royalties go to Maiar Pets Ventures, the rest to monthly donations to NGOs. </li>
            </ul>
            <p><strong>What is the project future?</strong></p>
            <p>Maiar Pets is currently focusing on building a powerfull community united to sustain a monthly contribution of money to animals in need. </p>
            <p>Besides the civic advantages that this proves, the project aims to reward Frens Squad with diverse benefits for pets and owners, such as deals on pet goods, gifts and gift cards. </p>
            <p>Building on top of the good will of animal lovers, we will grow outside the boundaries of a NFT project and create Maiar Pets Ventures, a concept
            dedicated to the community of warm-hearted people that trust the Elrond project. </p>
            <p>Maiar Pets Ventures will provide liquidity for visionary projects that have real-life impact on our economic system, either 
            by tokenizing diverse economic activities or by changing the world to a sustainable one. A part of the economic growth provided by Maiar Pets Ventures will be allocated back to Chest of Treats,
            having the goal of filling the 25% of the initial funds used for creating it.</p>
          </text>
        </div>
      </section>

      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p><strong>What is a #superstar?</strong></p>
            <p>A #superstar is the main character that inspires a NFT collection for Maiar Pets. For instance Riki, our dog, was the first #superstar of Maiar Pets NFT.</p>
            <p><strong>What is my question?</strong></p>
            <p>
              We truly believe the sky is the limit, so we sure did not cover all the questions.
              Now, it's your turn, you have the following ways to get in touch with us: 
            </p>
          </text> 
          <div className={s.socials}>
            <li>
              <a target="_blank" href='https://twitter.com/maiar_pets'>
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a target="_blank" href='https://discord.gg/zCDqHrVEWK'>
                <FaDiscord />
              </a>
            </li>
            <li>
              <a target="_blank" href='https://www.instagram.com/riki.shibainu/'>
                <FaInstagram />
              </a>
            </li>
          </div>
        </div>
      </section>
    </div>
  )
}

export default faq
