import 'normalize.css'
import 'animate.css'
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
