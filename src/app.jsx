import Alliance from './components/alliance'
import Blog from './components/blog'
import Citadel from './components/citadel'
import Hero from './components/hero'
import LoadingScreen from './components/loading-screen'
import TheWall from './components/the-wall'

function App() {
  return (
    <>
      <main>
        <Hero />
        <Alliance />
        <Citadel />
        <Blog />
        <TheWall />
      </main>
      <LoadingScreen />
    </>
  )
}

export default App
