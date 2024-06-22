import './Carousel.css'
import daemon from '../../assets/daemon.jpg';

export function Carousel() {
    return (
        <div className='container-carousel'>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
            <div className="carousel-item">
                <img src={daemon} alt="" />
                <button></button>
            </div>
        </div>

    )
}