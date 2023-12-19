import { MoonSVG } from './components/MoonSVG.jsx'
import { SunSVG } from './components/SunSVG.jsx'
import { HeaderSection } from './components/HeaderSection.jsx'
import { Projectos } from './components/Projectos.jsx'
import { RedesSociales } from './components/RedesSociales.jsx'
import { Contacto } from './components/Contacto.jsx'

import { theme } from './hooks/theme.js'

import './App.css'

function App() {
  const { darkTheme, handleThemeChange } = theme()

  return (
    <main className="dark:bg-gray-800 bg-zinc-100 m-auto h-full transition">
      <section className='dark:text-zinc-100 text-zinc-700 max-w-4xl px-6 py-12 relative m-auto'>
        <button className="absolute right-0 top-5" onClick={handleThemeChange}>{darkTheme == true ? <SunSVG /> : <MoonSVG />}</button>
        <HeaderSection />
        <hr className='my-16 dark:border-gray-600 border-2 border-gray-300 rounded-xl transition' />
        <Projectos />
        <RedesSociales />
        <Contacto />
      </section>
    </main>
  )
}

export default App
