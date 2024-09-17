import React, { useState, useEffect } from 'react';
import data from '../utils/data';

import './ImageSlider.css';
import { Link } from 'react-router-dom';

export function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID,  setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 1000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= data.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return data.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  //   flex flex-col justify-center items-center gap-2 text-center
  return (
    <div
      className='container__slider transition-all'
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {data.map((item, index) => (
        <div className='slider' key={index}>
          <img
            src={
              data[
                index - activeIndex >= 0
                  ? index - activeIndex
                  : 5 - Math.abs(index - activeIndex)
              ].imgURL
            }
            alt={
              data[
                index - activeIndex >= 0
                  ? index - activeIndex
                  : 5 - Math.abs(index - activeIndex)
              ].title
            }
          />
          <Link
            href={
              data[
                index - activeIndex >= 0
                  ? index - activeIndex
                  : 5 - Math.abs(index - activeIndex)
              ].link
            }
          >
            <span className='link'>
              {
                data[
                  index - activeIndex >= 0
                    ? index - activeIndex
                    : 5 - Math.abs(index - activeIndex)
                ].title
              }
            </span>
          </Link>
        </div>
      ))}

      <div className='container__slider__links'>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? 'container__slider__links-small container__slider__links-small-active'
                  : 'container__slider__links-small'
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
