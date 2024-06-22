import './Carousel.css'
import daemon from '../../assets/daemon.jpg';
import { useEffect, useState } from 'react';

export function Carousel() {

    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/static/data.json')
        .then((response) => response.json())
        .then(setData);
    },[]);

    return (
        <div className='container-carousel'>
            {data.map((item) =>{
                const {name, image} = item
                return(
                    <div className="carousel-item" key={name}>
                    <img src={image} alt="" />
                    {/* <button>{name}</button> */}
                </div>
                )
            })}
        </div>

    )
}