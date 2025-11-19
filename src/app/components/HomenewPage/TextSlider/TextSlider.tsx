"use client";

import React, { useEffect } from "react";
import styles from "./TextSlider.module.css";
import gsap from "gsap";

type SliderItem = {
  text: string;
  highlight: string;
  price: string;
};

interface TextSlider1Props {
  data: SliderItem[];
}

const TextSlider1: React.FC<TextSlider1Props> = ({ data }) => {
  useEffect(() => {
    const scrollingText = gsap.utils.toArray<HTMLElement>(`.${styles.rail} h4`);

    horizontalLoop(scrollingText, {
      repeat: -1,
      speed: 0.4,
      paddingRight: 30,
    });

    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: false,
          defaults: { ease: "none" },
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times: number[] = [],
        widths: number[] = [],
        xPercents: number[] = [],
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false
            ? (v: number) => v
            : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;

      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(
            gsap.getProperty(el, "width", "px") as string
          ));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
              (gsap.getProperty(el, "xPercent") as number)
          );
          return xPercents[i];
        },
      });

      gsap.set(items, { x: 0 });

      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          (gsap.getProperty(items[length - 1], "scaleX") as number) +
        (parseFloat(config.paddingRight) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart +
          widths[i] * (gsap.getProperty(item, "scaleX") as number);

        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        ).fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        );
      }

      return tl;
    }
  }, [data]);

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.scrollingText}>
        <div className={styles.rail}>
          {data.map((item, idx) => (
            <h4 key={idx}>
              {item.text}
              <span className="text-[#0fdac2]">{item.highlight}</span> in the US would cost: {item.price}
            </h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSlider1;
