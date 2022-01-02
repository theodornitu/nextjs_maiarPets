// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import Welcome from '../components/Welcome'

// Styles import
import homeStyles  from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Meta />
      <Nav />
      <title> a</title>
        <div className={homeStyles.container}>
          <main className={homeStyles.main}>
            <Welcome /> 
          </main>
        </div>
    </div>
  )
}

