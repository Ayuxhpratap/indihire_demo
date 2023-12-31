import StyleGuide from '@/components/StyleGuide' ;
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Menu2 from '@/components/Menu2';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
    {/* <StyleGuide /> */}
    <Header />
    <Hero />
    <Menu />
    <Menu2 />
    <Reservation />
    <About />
    <Map />
    <Footer />

    {/* <div className="h-[4000px]"></div> */}
  </main>
}
