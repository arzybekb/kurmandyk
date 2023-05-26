import React from "react";
import styles from "./Main.module.css";
import Carousel from "../UI/Carousel/Carousel";

const Main = () => {
  return (
    <div className={styles.container}>
      <Carousel />
    </div>
  );
};
export default Main;
