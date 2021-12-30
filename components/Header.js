import headerStyles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Welcome to <span>Maiar</span> Pets
      </h1>
      <h3 className={headerStyles.description}>
        The website is currently under construction! 
      </h3>
      <p className={headerStyles.description}>
        Follow us on <Link href = "https://twitter.com/maiar_pets">twitter</Link> to stay up to date with the progress.
      </p>
    </div>
  )
}

export default Header
