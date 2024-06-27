import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PersonagensList() {

    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/data.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    return (
        <div>
            <div className='container-list' ref={carousel}>
                {data.map((item) => {
                    const { name, image, descricion } = item
                    return (
                        <div className="list-item" key={name}>
                            <img src={image} alt="" />
                            <div className='list-text'>
                                <h2>{name}</h2>
                                <p>{descricion}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}