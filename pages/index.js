// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import Welcome from '../components/Welcome'

// Styles import
import s  from '../styles/Home.module.css'

// React stuff import
import Image from 'next/image'

export default function Home() {
  //Relevant styles
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");

  return (
    <div>
      <Meta />
      <Nav />
      <section className={lightSection}>
        <div className={s.grid}>
          <div>
            <h1 className={s.title}>
              Woof, woof! Riki here!
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
              src="/Riki_1.jpg" 
              class = {s.image} 
              alt="Riki #1" 
              width={200} 
              height={200}  
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
              <strong>Lorem Ipsum</strong> dolor sit amet, consectetur adipiscing elit. Vivamus et diam tellus. 
            </p>
            <p>
              Maecenas ultrices lectus varius, vulputate quam vel, malesuada leo. 
              Mauris nunc nisl, auctor vel suscipit commodo, porttitor eget erat. 
              Mauris consequat orci non egestas finibus. Aenean dapibus eget libero at vehicula. 
              Fusce a elit posuere, lobortis lacus nec, blandit eros. Praesent sed ullamcorper diam. 
            </p>
            <p>
              Donec arcu nisl, interdum vel tellus et, semper lobortis enim. In a luctus magna. 
              Duis consequat mi imperdiet, pulvinar velit congue, hendrerit justo. 
              Donec vulputate consequat accumsan. Morbi nisi mauris, vulputate id odio non, molestie scelerisque sem. 
              Aliquam consectetur magna justo, ut mattis diam molestie sed. Vestibulum sit amet quam quam.
            </p>
            <p>
              Cras placerat ex vitae egestas rhoncus. Nullam et ipsum tortor. Aenean ut mauris sem. 
              Praesent rutrum felis nec dapibus ultrices. 
              In imperdiet, ex sollicitudin imperdiet hendrerit, ipsum turpis maximus mi, eget pharetra massa metus vitae sapien. 
              Aliquam imperdiet consequat leo, vitae sagittis nisi fringilla eu. Nulla facilisi.
            </p>
          </text> 
        </div>
      </section>
    </div>
  )
}

