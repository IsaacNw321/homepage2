import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services'
import Contact from './components/contact'
import { LanguageProvider } from './context/LanguageContext'

function App() {

  return (
    <LanguageProvider>
    <main className="flex justify-center flex-col align-middle min-h-screen bg-black text-white">
    <Hero />
    <Skills />
    <Services />
    <Contact />
    <About/>
    </main>
    </LanguageProvider>
  )
}

export default App