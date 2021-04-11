import { IProjectImage } from "interfaces/project";
import React, { useState, useCallback, useEffect } from "react";
import classes from "./Carousel.module.css";

interface IProps {
  images: IProjectImage[];
}

const Carousel: React.FC<IProps> = ({ images }) => {
  const [coverImageIndex, setCoverImageIndex] = useState(0);
  const imagesLength = images.length;

  const moveImageBy = useCallback(
    (value) => {
      let currentIndex = coverImageIndex;
      currentIndex += value;
      if (currentIndex >= imagesLength) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = imagesLength - 1;
      }
      setCoverImageIndex(currentIndex);
    },
    [coverImageIndex, imagesLength]
  );

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      moveImageBy(1);
    }, 5000);
    return () => {
      clearInterval(carouselInterval);
    };
  }, [moveImageBy]);

  return (
    <div className={classes.Carousel}>
      <div
        onClick={() => moveImageBy(-1)}
        className={classes.Slider + " " + classes.LeftSlider}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className={classes.CarouselContent}>
        <img
          className={
            coverImageIndex % 2 === 0
              ? classes.SlideImageLeft
              : classes.SlideImageRight
          }
          src={images[coverImageIndex].image}
          alt="People"
        />
      </div>
      <div
        onClick={() => moveImageBy(+1)}
        className={classes.Slider + " " + classes.RightSlider}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousel;
