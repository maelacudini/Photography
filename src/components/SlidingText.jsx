import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "../css/slidingtext.module.css";

const SlidingText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className={style.main}>
      <div className={style.sliderContainer}>
        <h1>Reviews</h1>
        <div ref={slider} className={style.slider}>
          <div ref={firstText} className={style.pcont}>
            <h1>
              <i>Great job!</i> - Event organizer
            </h1>
            <h1>
              <i>I'm impressed.</i> - Interior design studio
            </h1>
            <h1>
              <i>I enjoyed every part of the project.</i> - Art museum
            </h1>
            <h1>
              <i>Best photographer ever.</i> - Architectural designer
            </h1>
          </div>
          <div ref={secondText} className={style.pcont}>
            <h1>
              <i>Great job!</i> - Event organizer
            </h1>
            <h1>
              <i>I'm impressed.</i> - Interior design studio
            </h1>
            <h1>
              <i>I enjoyed every part of the project.</i> - Art museum
            </h1>
            <h1>
              <i>Best photographer ever.</i> - Architectural designer
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SlidingText;
