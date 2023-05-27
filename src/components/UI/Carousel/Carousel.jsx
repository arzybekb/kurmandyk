import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import image1 from "../../../assets/images/slide-1.jpg";
import image2 from "../../../assets/images/slide-2.jpg";
import image3 from "../../../assets/images/slide-3.jpg";
import styles from "./Carousel.module.css";
import { useTranslation } from "react-i18next";

const OPTIONS = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
];

export default function Carousel() {
  const { t } = useTranslation();
  return (
    <MDBCarousel showControls showIndicators>
      {OPTIONS.map((option) => (
        <div key={option.id}>
          <MDBCarouselItem
            captionClassName={`${styles["carousel-caption"]}`}
            className={`w-100 d-block ${styles["carousel-image"]}`}
            itemId={option.id}
            src={option.src}
            alt="..."
          >
            <div className={`${styles["text-wrap"]}`}>
              <h1 className={styles.title}>Курман айт!</h1>
              <p className={styles.description}>{t("main")}</p>
            </div>
          </MDBCarouselItem>
        </div>
      ))}
    </MDBCarousel>
  );
}
