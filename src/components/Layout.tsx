import Head              from 'next/head'
import { FC, ReactNode } from 'react'
import Footer            from './Footer'
import Navbar            from './Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Bitss best store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout

