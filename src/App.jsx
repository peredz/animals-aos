import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import bg from '/pics/bg.jpg'
import sheep from '/pics/sheep.png'
import caw from '/pics/caw.png'
import pig from '/pics/pig.png'
import frog from '/pics/frog.png'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="app">
      <div className="background">
        <img src={bg} alt="Фон" className="bg-image" />
        <div className="overlay"></div>
      </div>

      <div className="spacer"></div>

      <div className="animal">
        <img src={sheep} alt="Овца" />
      </div>

      <div className="animal">
        <img src={caw} alt="Корова" />
      </div>

      <div className="animal">
        <img src={pig} alt="Свинья" />
      </div>

      <div className="animal">
        <img src={frog} alt="Лягушка" />
      </div>
    </div>
  )
}

export default App
