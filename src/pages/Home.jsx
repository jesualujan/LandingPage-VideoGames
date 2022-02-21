import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Mousewheel , EffectFade, Pagination } from 'swiper'

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
                    1
                </SwiperSlide>
                <SwiperSlide>
                    2
                </SwiperSlide>
            </Swiper>
    </>
  )
}

export default Home