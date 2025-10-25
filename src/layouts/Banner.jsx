import React from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from 'swiper/modules'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay]}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-20 h-full">
                                {/* Left */}
                                <div className="flex-1 lg:flex-[0_0_50%] text-center lg:text-left space-y-5 z-10 flex flex-col justify-center">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        Keep Your Pet Cozy This Winter 🐾
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                                        Explore warm clothing, grooming, and health services to protect your furry friends from the cold.
                                    </p>
                                    <div className="mt-4">
                                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md">
                                            Explore Services
                                        </button>
                                    </div>
                                </div>
                                {/* Right Image */}
                                <div className="flex-none w-full lg:w-[50%] flex items-center justify-center relative z-0">
                                    <div className="w-full max-w-[520px]">
                                        <img src={banner1} alt="Pet winter banner" className="w-full h-auto object-contain object-center drop-shadow-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* arrows for slide1: prev -> slide4, next -> slide2 */}
                            <div className="absolute inset-x-0 top-1/2 flex justify-between px-5 transform -translate-y-1/2 z-20">
                                <a href="#slide4" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❮</a>
                                <a href="#slide2" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative w-full h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-20 h-full">
                                <div className="flex-1 lg:flex-[0_0_50%] text-center lg:text-left space-y-5 z-10 flex flex-col justify-center">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        Fun & Safe Winter Adventures for Your Pets ❄️🐶
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                                        Let your pets enjoy snow and outdoor fun safely! From anti-slip paw treatments to guided snow walks, we ensure every winter adventure is cozy, healthy, and full of joy.
                                    </p>
                                    <div className="mt-4">
                                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md">
                                            Explore Services
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-none w-full lg:w-[50%] flex items-center justify-center relative z-0">
                                    <div className="w-full max-w-[520px]">
                                        <img src={banner2} alt="Pet winter banner 2" className="w-full h-auto object-contain object-center drop-shadow-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* arrows for slide2: prev -> slide1, next -> slide3 */}
                            <div className="absolute inset-x-0 top-1/2 flex justify-between px-5 transform -translate-y-1/2 z-20">
                                <a href="#slide1" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❮</a>
                                <a href="#slide3" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative w-full h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-20 h-full">
                                <div className="flex-1 lg:flex-[0_0_50%] text-center lg:text-left space-y-5 z-10 flex flex-col justify-center">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        Health and Comfort in Every Snowy Step ❄️
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                                        Ensure your pet’s joints, skin, and coat stay strong during winter. From wellness check-ups to heated beds, we care for every little detail.
                                    </p>
                                    <div className="mt-4">
                                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md">
                                            Explore Services
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-none w-full lg:w-[50%] flex items-center justify-center relative z-0">
                                    <div className="w-full max-w-[520px]">
                                        <img src={banner3} alt="Pet winter banner 3" className="w-full h-auto object-contain object-center drop-shadow-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* arrows for slide3: prev -> slide2, next -> slide4 */}
                            <div className="absolute inset-x-0 top-1/2 flex justify-between px-5 transform -translate-y-1/2 z-20">
                                <a href="#slide2" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❮</a>
                                <a href="#slide4" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative w-full h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-20 h-full">
                                <div className="flex-1 lg:flex-[0_0_50%] text-center lg:text-left space-y-5 z-10 flex flex-col justify-center">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        Dress Warm. Stay Cool. Pet Fashion Made for Winter 🧣
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                                        Discover trendy winter coats and accessories made to keep your pets warm while looking absolutely adorable.
                                    </p>
                                    <div className="mt-4">
                                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md">
                                            Explore Packages
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-none w-full lg:w-[50%] flex items-center justify-center relative z-0">
                                    <div className="w-full max-w-[520px]">
                                        <img src={banner4} alt="Pet winter banner 4" className="w-full h-auto object-contain object-center drop-shadow-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* arrows for slide4: prev -> slide3, next -> slide1 */}
                            <div className="absolute inset-x-0 top-1/2 flex justify-between px-5 transform -translate-y-1/2 z-20">
                                <a href="#slide3" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❮</a>
                                <a href="#slide1" className="btn btn-circle bg-white/80 hover:bg-white text-gray-700 border-none shadow">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default Banner
