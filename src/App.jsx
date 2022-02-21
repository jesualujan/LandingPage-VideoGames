import Header from './components/header/Header'
import Home from './pages/Home'
import Section from './components/section/Section'

import './App.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'



function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <Section />
    </div>
  )
}

export default App
