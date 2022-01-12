// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import Link    from 'next/link'

// Icons import
import { FaTwitterSquare, FaDiscord, FaInstagram } from 'react-icons/fa';

// Styles import
import s  from '../styles/Faq.module.css'

const faq = () => {
    //Relevant styles
    const darkSection = [s.section, s.dark].join(" ");
    const lightSection = [s.section, s.light].join(" ");

  return (
    <div>
      <Meta />
      <Nav />
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>Who is Riki?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>What does "Frens" mean?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>What is Maiar Pets?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>How can I adopt a Maiar Pet?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>How many Maiar Pets can be adopted?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>What is the price for one Maiar Pet?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>When will adopting start?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>What do I get for owning a Maiar Pet?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>What other collections will Maiar Pets have?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>Why Elrond?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={darkSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>What is the use of funds?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>What is the project future?</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text>
        </div>
      </section>
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <p>
              <strong>What is my question?</strong> 
            </p>
            <p>
              We truly believe the sky is the limit, so we sure did not cover all the questions.
              Now, it's your turn, you have the following ways to get in touch with us: 
            </p>
          </text> 
          <div className={s.socials}>
            <li>
              <Link href='https://twitter.com/maiar_pets'>
                <FaTwitterSquare />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <FaDiscord />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/riki.shibainu/'>
                <FaInstagram />
              </Link>
            </li>
          </div>
        </div>
      </section>
    </div>
  )
}

export default faq
