import React, { useState, useEffect } from 'react';

import slide1Image from '../../../assets/slidehomepage/slide1.webp';
import slide2Image from '../../../assets/slidehomepage/slide2.png';
import slide3Image from '../../../assets/slidehomepage/slide3.webp';
import slide4Image from '../../../assets/slidehomepage/slide4.webp';
import slide5Image from '../../../assets/slidehomepage/slide5.webp';
import slide6Image from '../../../assets/slidehomepage/slide6.webp';


const HomeSlider = () => {

  const slides = [
    {
      id: 1,
      image: slide1Image,
      title: 'Slide 1',
      description: 'Description for Slide 1'
    },
    {
      id: 2,
      image: slide2Image,
      title: 'Slide 2',
      description: 'Description for Slide 2'
    },
    {
      id: 3,
      image: slide3Image,
      title: 'Slide 3',
      description: 'Description for Slide 3'
    },
    {
        id: 4,
        image: slide4Image,
        title: 'Slide 4',
        description: 'Description for Slide 4'
    },
    {
      id: 5,
      image: slide5Image,
      title: 'Slide 5',
      description: 'Description for Slide 5'
    },
    {
      id: 6,
      image: slide6Image,
      title: 'Slide 6',
      description: 'Description for Slide 6'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Đặt thời gian trượt

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
      <div className="carousel slide my-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} className="d-block w-100" alt={slide.title} style={{ maxHeight: '250px' }} /> {/* Điều chỉnh kích thước của ảnh */}
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default HomeSlider;
