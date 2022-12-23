import '../styles/globals.css'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  return <main className='grid lg:grid-cols-9 min-h-screen'>
    <div className='lg:col-span-2 bg-black '>
      <Navbar />
    </div>
    <div className="lg:col-span-6">
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
}
