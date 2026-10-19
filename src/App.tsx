import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import LaceDivider from './components/LaceDivider/LaceDivider'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LaceDivider />
        <Projects />
      </main>
    </>
  )
}

export default App