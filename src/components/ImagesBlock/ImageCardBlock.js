import React from 'react';
import './ImageCardBlock.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


function ImageCardBlock() {
    return (
        <>
            <container className="images-container">
                <div className="slider-container" id="about">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <figure>
                                <img
                                    src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                                    height="700px" alt="Slider img"/>
                            </figure>
                        </SwiperSlide>

                        <SwiperSlide>
                            <figure>
                                <img
                                    src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                                    height="700px" alt="Slider img"/>
                            </figure>
                        </SwiperSlide>

                        <SwiperSlide>
                            <figure>
                                <img
                                    src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                                    height="700px" alt="Slider img"/>
                            </figure>
                        </SwiperSlide>

                        <SwiperSlide>
                            <figure>
                                <img
                                    src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                                    height="700px" alt="Slider img"/>
                            </figure>
                        </SwiperSlide>

                        <SwiperSlide>
                            <figure>
                                <img
                                    src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                                    height="700px" alt="Slider img"/>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </container>
        </>
    );
}

export default ImageCardBlock;