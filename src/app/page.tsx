import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Fruits from '@/components/Fruits'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Fruits />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}