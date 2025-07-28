import React, { useEffect, useState } from 'react';
import './Image.css';

const images = [
    { id: 1, url: "/images/Ballenas 1.png"},
    { id: 2, url: "/images/Ballenas2.png"},
]

const ImagBallena= () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section className= "carusel">
            <div className="image-container">
                <button className="nav-button left" onClick={handlePreviousClick}>
                  <i className="ri-arrow-left-wide-line"></i>
                </button>

                {images.map((image, index) => (
                    <img 
                        src={image.url} 
                        alt="images" 
                        className={ currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id} 
                    />
                ))}

                <button className="nav-button right" onClick={handleNextClick}>
                  <i className="ri-arrow-right-wide-line"></i>
                </button>
            </div>
        </section>
    )
}

export default ImagBallena