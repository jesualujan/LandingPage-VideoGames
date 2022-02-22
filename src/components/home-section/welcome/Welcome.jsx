import './welcome.scss'
import HomeSection from '../HomeSection'
import {bg1} from '../../../assets/images' 


const Welcome = props => {
  return (
    <HomeSection 
    className={`welcome ${props.isActive ? 'active' :''}`}
    contentClassName="overlay welcome__content"
    bgImage={bg1}
    >
      <div className="welcome__info relative">
          <div className="welcome__info__content">
              <div className="title">
                  <span>Bienvenido</span>
                  <h2 className='main-color'>Grieta del invocador</h2>
              </div>
            <div className="description m-t-4">
            Forma equipo con tus amigos y pon a prueba tus habilidades en combates MOBA 5v5. Explora el universo vivo de Runaterra a través de la historia, los cómics, los juegos y mucho más. Luego, sumérgete en la comunidad de jugadores, cosplayers, músicos y creadores de contenido que están esperando que te unas a ellos.
            </div>
            <div className="btns m-t-4"> 
                <button>Jugar Ahora</button>
                <button>Comenzar</button>
            </div>
          </div>
      </div>
      <div className="welcome__img relative"></div>
    </HomeSection>
  )
}

export default Welcome