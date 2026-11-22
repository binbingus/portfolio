import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Education />
      </main>
      <Contact />
    </>
  )
}
