import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Mousewheel , EffectFade, Pagination } from 'swiper'
import {Welcome} from '../components/home-section'


SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOperation = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

const Home = () => {
  return (
    <>
            <Swiper {...swiperOperation}>
                <SwiperSlide>
                    {({isActive}) => <Welcome isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    2
                </SwiperSlide>
            </Swiper>
    </>
  )
}

export default Home