import { useEffect, useState } from 'react'
import '../styles/globals.scss'
import Footer from './components/Footer'
import Loading from './components/Loading'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  // const [loadin, setLoading] = useState(true)
  // useEffect(() => {
  //   window.addEventListener('load', stopLoading);
  //   window.addEventListener('beforeunload', startLoading);

  //   return () => {
  //     window.removeEventListener('load', stopLoading);
  //     window.removeEventListener('beforeunload', startLoading);
  //   };
  // }, [loadin]);

  // const startLoading = () => {
  //   setLoading(true);
  // };

  // const stopLoading = () => {
  //   setLoading(false);
  // };

  return (
    <>
      {/* {
        loadin ? <Loading />
          : */}
      <main className='md:grid md:grid-cols-9 h-screen flex flex-col w-full overflow-hidden'>
        <div className='hidden h-screen md:block md:col-span-2 bg-black '>
          <Navbar />
        </div>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className="md:col-span-7 overflow-scroll">
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>

      {/* } */}
    </>
  )
}
