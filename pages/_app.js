import 'normalize.css'
import 'animate.css'
import '../scss/main.scss'
import Navigation from '../components/Organisms/Navigation'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
