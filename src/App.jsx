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
      {/* Фон с затемнением */}
      <div className="background">
        <img src={bg} alt="Фон" className="bg-image" />
        <div className="overlay"></div>
      </div>

      {/* Пустое пространство для скролла */}
      <div className="spacer"></div>

      {/* Животные */}
      <div className="animal" /* TODO: добавить data-aos */>
        <img src={sheep} alt="Овца" />
      </div>

      <div className="animal" /* TODO: добавить data-aos */>
        <img src={caw} alt="Корова" />
      </div>

      <div className="animal" /* TODO: добавить data-aos */>
        <img src={pig} alt="Свинья" />
      </div>

      <div className="animal" /* TODO: добавить data-aos */>
        <img src={frog} alt="Лягушка" />
      </div>
    </div>
  )
}

export default App
