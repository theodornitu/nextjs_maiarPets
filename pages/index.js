import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maiar Pets</title>
        <meta name="description" content="Own one of the 1000 NFT-based virtual pets and help the real pet world!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Maiar Pets
        </h1>

        <p className={styles.description}>
          The website is currently under construction! 
          <p>Follow us on <a href = "https://twitter.com/maiar_pets">twitter</a> to stay up to date with the progress.
        </p></p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>The story</h3>
            {/* <p>Find the story behind our project!</p>
            <p>Riki will guide you from here.</p> */}
          </a>

          <a href="#" className={styles.card}>
            <h3>The Plan</h3>
            {/* <p>Interested about the future? </p>
            <p>Here&apos;s the roadmap!</p> */}
          </a>

          <a href="#" className={styles.card}>
            <h3>The rarity</h3>
            {/* <p>See the rarity of your pet, easy!</p> */}
          </a>

          <a href="#" className={styles.card}>
            <h3>The FAQ</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by Riki&apos;s parents 
        </a>
      </footer>
    </div>
  )
}
