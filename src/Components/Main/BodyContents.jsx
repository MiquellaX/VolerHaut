'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function TestMorph() {
  const handapKaLuhur = useRef(null);
  const luhurKaHandap = useRef(null);

  useEffect(() => {

    const timeline = gsap.timeline();

    const splitHandapKaLuhur = new SplitText(handapKaLuhur.current, { type: "chars" });

    const splitLuhurKaHandap = new SplitText(luhurKaHandap.current, { type: "chars" });

    timeline.fromTo(
      splitHandapKaLuhur.chars,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
      }
    );

    timeline.fromTo(
      splitLuhurKaHandap.chars,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
      },
      "+=0.1"
    );

    return () => {
      splitHandapKaLuhur.revert();
      splitLuhurKaHandap.revert();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 ref={handapKaLuhur} className="text-sm sm:text-4xl font-bold">
        VOLERHAUT (ANIMASI TI HANDAP KA LUHUR)
      </h1>
      <h1 ref={luhurKaHandap} className="text-sm sm:text-4xl font-bold">
        VOLERHAUT (ANIMASI TI LUHUR KA HANDAP)
      </h1>
    </div>
  );
}