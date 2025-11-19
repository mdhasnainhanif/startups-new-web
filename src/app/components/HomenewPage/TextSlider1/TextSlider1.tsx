"use client";

import React, { useEffect } from "react";
import styles from "./TextSlider1.module.css";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const TextSlider1: React.FC = () => {
  useEffect(() => {
    const scrollingText = gsap.utils.toArray<HTMLElement>(`.${styles.rail} h4`);

    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
      paddingRight: 30,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) factor *= -1;

        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });

    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times: number[] = [],
        widths: number[] = [],
        xPercents: number[] = [],
        curIndex = 0,
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
        )
          .fromTo(
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
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
      }

      return tl;
    }
  }, []);

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.scrollingText}>
        <div className={styles.rail}>
          <h4>Animate Anything...</h4>
          <h4>Delivering silky-smooth performance</h4>
          <h4>so you can focus on the fun stuff.</h4>
          <h4>Hiring a design team in the US would cost: $85,000+ a year</h4>
        </div>
      </div>
    </section>
  );
};

export default TextSlider1;
