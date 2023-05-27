import React, { useState } from "react";
import { styled, keyframes } from "@mui/material";
import { zoomIn } from "react-animations";
import image1 from "../../assets/images/koi.jpg";
import image2 from "../../assets/images/byk.jpg";
import image3 from "../../assets/images/koi2.jpeg";

const Slider = ({ refOf }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image3,
      title: "1. Үлүшүңүзү бизге тапшырасыз",
      description: "Союу, бука тандоо, касап акысы, ушунун ичинде.",
    },
    //Ө ө
    {
      image: image2,
      title: "2. Шариат",
      description: "Шариаттын шаттарына ылайык союп, бөлүп, таратабыз.",
    },
    {
      image: image1,
      title: "3. Өз үлүшүңүздү",
      description:
        "Өз үлүшүңүздү алып кетесиз жана калгандары муктаждарга бөлүнөт",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <SliderContainer ref={refOf} className="slider-container">
      <h2>Биз менен курмандык сойсонор</h2>

      <div className="slide">
        <ImageSlide
          className="image"
          image={slides[currentSlide].image}
          alt="Изображение слайда"
          current={currentSlide}
        />

        <div className="slide-left-section">
          <div>
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="container-buttons">
            <button disabled={currentSlide === 0} onClick={prevSlide}>
              {"<"}
            </button>
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
            <button
              disabled={currentSlide === slides.length - 1}
              onClick={nextSlide}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </SliderContainer>
  );
};

export default Slider;

const bounceAnimation = keyframes`${zoomIn}`;

const SliderContainer = styled("div")`
  /* background-image: url("https://png.pngtree.com/background/20220723/original/pngtree-ramadan-kareem-islamic-background-banner-with-ramadhan-lantern-mosque-eid-mubarak-picture-image_1720785.jpg"); */
  background-size: cover;
  padding: var(--layout-padding);
  h2 {
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  .slide {
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem 0;
    transition: opacity 0.5s ease;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
    }
  }

  .slide-left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    font-weight: 600;
    margin-top: 10px;

    h3,
    p {
      transition: 0.3s;
    }
  }

  button {
    background: none;
    border-radius: 50%;
    width: 30px;
    border: 1px solid gray;
  }
  span {
    margin: 10px;
  }
`;

const ImageSlide = styled("div")`
  min-width: 35vw;
  min-height: 40vh;
  border-radius: 15px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    width: 75vw;
    min-height: 25vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
