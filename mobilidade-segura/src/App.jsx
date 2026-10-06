import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Indicators from "./components/Indicators"
import QuickActions from "./components/QuickActions"
import MapPreview from "./components/MapPreview"
import Participation from "./components/Participation"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Indicators />
        <QuickActions />
        <MapPreview />
        <Participation />
      </main>
      <Footer />
    </>
  )
}

export default App