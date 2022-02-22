import {useEffect} from 'react'
import './welcome.scss'
import HomeSection from '../HomeSection'
import Button from '../../button/Button'
import hoverEffect from 'hover-effect'

import {
    bg1,champGaren,champAshe,champAhri,distortion
} from '../../../assets/images' 

const champImage=[champGaren,champAshe,champAhri]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates=[]
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute
            ('src')
            let animation= new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2:  nextImg,
                displacementImage: distortion,
                hover:false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e=>e.remove())
        let currentItem=0;
        const autoImageSlide = () => {
            let previousItem = currentItem
            currentItem = (currentItem + 1) % animates.length
            if(!document.hidden){
                animates[previousItem].next()
            }
            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
               animates[previousItem].previous() 
            },10000)
        }
        setInterval(autoImageSlide, 10000)
    }, [])
    // https://www.youtube.com/watch?v=6sp_a1fnkjE minuto 53:50

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
                <Button className="btn-main">Jugar Ahora</Button>
                <Button className="btn-second">Comenzar</Button>
            </div>
          </div>
      </div>
      <div className="welcome__img relative">
          <div className="welcome__img__slide"  id="welcome__img__slide">
              {
                  champImage.map((item, index) => 
                 <img src={item} key={index}/>)
              }
          </div>
      </div>
    </HomeSection>
  )
}

export default Welcome