// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

// Styles import
import s  from '../styles/Plan.module.css'

const plan = () => {
  //Relevant styles
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
            <p>
              <strong>Step #1</strong> 
            </p>
            <p>
              We aim to integrate the Elrond dApp API directly on our website, but as we learn we will enable more features
              for the website. Currently the launch will take place on an existing NFT marketplace which is yet to be decided.
              Future collections will be directly minted from our website, using your wallet connect feature.
            </p>
            <p>
              <strong>Step #2</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>Step #3</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
            <p>
              <strong>Step #4</strong> 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
            </p>
          </text> 
        </div>
      </section>
    </div>
  )
}

export default plan
