"use client";

// Imports
import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      {/* Botón anterior */}
      <button 
        className={btnStyles} 
        onClick={() => swiper.slidePrev()} 
        style={{ opacity: swiper.isBeginning ? 0.5 : 1 }} // Disminuye el color si es la primera diapositiva
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      {/* Botón siguiente */}
      <button 
        className={btnStyles} 
        onClick={() => swiper.slideNext()} 
        style={{ opacity: swiper.isEnd ? 0.5 : 1 }} // Disminuye el color si es la última diapositiva
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns