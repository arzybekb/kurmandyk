import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import image1 from "../../../assets/images/slide-1.jpg";
import image2 from "../../../assets/images/slide-2.jpg";
import image3 from "../../../assets/images/slide-3.jpg";
import styles from "./Carousel.module.css";

const OPTIONS = [
  {
    id: 1,
    title: "Курман айт",
    description: "бардык мусулмандардын берекелүү майрамы!",
    src: image1,
  },
  {
    id: 2,
    title: "Курман айт!",
    description: "Бул жерде текст болот",
    src: image2,
  },
  {
    id: 3,
    title: "3-чу слайд",
    description: "Бул жерде текст болот",
    src: image3,
  },
];

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      {OPTIONS.map((option) => (
        <MDBCarouselItem
          className={`w-100 d-block ${styles["carousel-image"]}`}
          itemId={option.id}
          key={option.id}
          src={option.src}
          alt="..."
        >
          <div
            className={`carousel-caption d-none d-md-block ${styles["text-wrap"]}`}
          >
            <h1 className={styles.title}>{option.title}</h1>
            <p className={styles.description}>{option.description}</p>
          </div>
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
}
