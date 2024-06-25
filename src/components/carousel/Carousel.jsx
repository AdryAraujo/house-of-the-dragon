import './Carousel.css'
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function Carousel() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/data.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className='container-carousel'>
            <button 
            className='carousel-button'
            onClick={handleLeftClick}>
                <FaChevronLeft style={{ width: "32px", height: "32px" }} />
            </button>
            <div className='content-carousel' ref={carousel}>
                {data.map((item) => {
                    const { name, image } = item
                    return (
                        <div className="carousel-item" key={name}>
                            <img src={image} alt="" />
                            {/* <button>{name}</button> */}
                        </div>
                    )
                })}
                
            </div>
            <button id='seta-right' className='carousel-button'
            onClick={handleRightClick}>
                <FaChevronRight  style={{ width: "32px", height: "32px" }} />
            </button>
        </div>
    )
}