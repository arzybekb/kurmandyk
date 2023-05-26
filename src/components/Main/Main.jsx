import React from "react";
import styles from "./Main.module.css";
import Carousel from "../UI/Carousel/Carousel";

const Main = ({ refOf }) => {
  return (
    <div ref={refOf} className={styles.container}>
      <Carousel />
    </div>
  );
};
export default Main;
