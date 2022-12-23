import '../styles/globals.css'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <main className='md:grid md:grid-cols-9 min-h-screen flex flex-col w-full'>
      <div className='hidden md:block md:col-span-2 bg-black '>
        <Navbar />
      </div>
      <div className='md:hidden'>
        <MobileNav />
      </div>
      <div className="md:col-span-6">
        <Component {...pageProps} />

        {/* body
               
               
              */}
        {/*
        
        **footer 
        ***footer banner ***
        ***footer copyright ***
        ***footer navigation ***
       
        */}
      </div>
    </main>
  )
}
