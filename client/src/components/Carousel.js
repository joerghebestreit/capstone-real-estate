import "../components/Carousel.css"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import {useState} from "react";

export default function Carousel({images}) {
    const [picture, setPicture] = useState(0)
    const length = images.length

    const nextSlide = () => {
        setPicture((picture +1) % images.length )
    }

    const prevSlide = () => {
        setPicture(picture === 0 ? length -1 : picture - 1)
    }

    if(!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return(
      <div className="carousel">
          <BiChevronLeft className="left-arrow" onClick={prevSlide}/>
          <BiChevronRight className="right-arrow" onClick={nextSlide}/>
        {images.map((images, index) => {
          return(
            <div className={index === picture ? "slideActive" : "slide"} key={index}>
                {index === picture && (<img className="image" src={images} alt=""/>)} 
            </div>
          )
        })}
      </div>
    );
  }
