import './app.css'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }) => (
  <AnimatePresence>
    <Component {...pageProps} key={router.route} />
  </AnimatePresence>
)

export default App
