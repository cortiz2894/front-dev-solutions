import Head from 'next/head'
import styles, { globalStyles } from './style'
import Header from '../Header'

export default function AppLayout({ children, pageClass }) {
  return (
    <>
        <div className={pageClass}>
            <Head>
            <title>Front Dev Solutions</title>
            <meta name="description" content="Twitter NextJS" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'main'}>
              {pageClass !== 'login-container' && 
                <Header />
              }
                { children }
            </main>
        </div>
        <style jsx>{styles}</style>
        <style jsx global>{globalStyles}</style>
    </>
  )
}
