import React, { useState } from "react";
import { styled, keyframes } from "@mui/material";
import { zoomIn } from "react-animations";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://agritimes.ru/wp-content/uploads/2022/07/89258.pszmqo.850.jpg",
      title: "Кой",
      description:
        "Всё больше компаний принимают решения на основе данных. Поэтому на ваши навыки всегда будет спрос — опытный аналитик данных зарабатывает до 350 000 ₽.",
    },
    {
      image: "https://web-zoopark.ru/wp-content/uploads/2018/06/1-261.jpg",
      title: "Бука",
      description:
        "Работа с данными не ограничивается одним направлением. Вы можете помогать фармкомпании продвигать новые лекарства, а если надоест — перейти в музыкальный стриминг и прокачивать их сервис рекомендаций. Ещё тут нет рутины — каждый проект интересен и по-своему уникален.",
    },
    {
      image:
        "https://cs11.livemaster.ru/storage/topicavatar/600x450/bc/d1/18efeebb2019e7271a0f43aae968036fbbc0wc.jpg?h=DoxFg8G2fbrFOdXI_-gkLA",
      title: "Топоз",
      description:
        "Решения дата-аналитика прямо влияют на жизнь компаний и людей. Правильная работа с данными помогает компаниям получать больше прибыли — благодаря этому бизнес может повысить зарплаты сотрудникам или обновить оборудование.",
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
    <SliderContainer className="slider-container">
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
