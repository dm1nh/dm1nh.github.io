import Alliance from './components/alliance'
import Blog from './components/blog'
import Citadel from './components/citadel'
import Header from './components/header'
import Hero from './components/hero'
import Letter from './components/letter'
import LoadingScreen from './components/loading-screen'
import TheWall from './components/the-wall'

function App() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <main>
        <Hero />
        <Alliance />
        <Citadel />
        <TheWall />
        <Blog />
        <Letter />
      </main>
      <LoadingScreen />
    </div>
  )
}

export default App
