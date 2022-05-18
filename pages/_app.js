import 'normalize.css'
import 'animate.css'
import '../scss/main.scss'
import Navigation from '../components/Organisms/Navigation'
import { SearchProvider } from '../components/context/searchContext'
function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Navigation />
      <Component {...pageProps} />
    </SearchProvider>
  )
}

export default MyApp
