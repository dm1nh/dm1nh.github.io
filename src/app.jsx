import Alliance from './components/alliance'
import Citadel from './components/citadel'
import Hero from './components/hero'
import LoadingScreen from './components/loading-screen'
import TheWall from './components/the-wall'

function App() {
  return (
    <main>
      <Hero />
      <Alliance />
      <Citadel />
      <TheWall />
      <LoadingScreen />
    </main>
  )
}

export default App
