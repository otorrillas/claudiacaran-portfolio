import './app.css'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
