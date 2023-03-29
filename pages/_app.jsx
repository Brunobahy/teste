import { NotasProvider } from '@/common/NotasContext'
import { UsuarioProvider } from '@/common/UsuarioContext'
import MovimentosProvider from '@/components/movimentos'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <AnimatePresence>
        <UsuarioProvider>
          <NotasProvider>
            <MovimentosProvider>
              <Component {...pageProps} />
            </MovimentosProvider>
          </NotasProvider>
        </UsuarioProvider>
      </AnimatePresence>
    </>
  )
}
