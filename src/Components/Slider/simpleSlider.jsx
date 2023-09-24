import React from 'react'
import MovieCard from '../MovieCard/index'
import './slider.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../Slider/Data'
import Slider from "react-slick";

export const simpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      

      return (
        <div className='max-w-[1350px] mx-auto pl-16'>
        <h1 className='text-[50px] text-blue-600 font-serif text-center my-7'>Saif's Slider</h1>
        <Slider  {...settings}>
          {data.map((movie) => <MovieCard movie={movie}/>)}
        </Slider>

        </div>

        
      )
}

export default simpleSlider