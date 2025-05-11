"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TestMorph() {
	const handapKaLuhur = useRef(null);
	const luhurKaHandap = useRef(null);

	useEffect(() => {
		// Automatic animations for the original div
		const timeline = gsap.timeline();

		const splitHandapKaLuhur = new SplitText(handapKaLuhur.current, {
			type: "chars",
		});
		const splitLuhurKaHandap = new SplitText(luhurKaHandap.current, {
			type: "chars",
		});

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

		// ScrollTrigger animations for additional content
		gsap.fromTo(
			".fade-in",
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power1.out",
				scrollTrigger: {
					trigger: ".fade-in",
					start: "top center", // Trigger when the top of the section reaches the center of the viewport
					end: "bottom center", // End when the bottom of the section reaches the center of the viewport
					toggleActions: "play reverse play reverse", // Repeat animation on scroll
				},
			}
		);

		gsap.fromTo(
			".slide-right",
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".slide-right",
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			}
		);

		gsap.fromTo(
			".slide-left",
			{ x: 100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".slide-left",
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			}
		);

		gsap.fromTo(
			".scale-up",
			{ scale: 0.8, opacity: 0, y: 50 },
			{
				scale: 1,
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "elastic.out(1, 0.3)",
				scrollTrigger: {
					trigger: ".scale-up",
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			}
		);

		return () => {
			splitHandapKaLuhur.revert();
			splitLuhurKaHandap.revert();
		};
	}, []);

	return (
		<div className="overflow-hidden text-stone-900">
			{/* Original Content (Automatic Animation) */}
			{/* <div className="flex flex-col justify-center items-center h-screen">
		<h1 ref={handapKaLuhur} className="text-sm sm:text-4xl font-bold">
		  VOLERHAUT (ANIMASI TI HANDAP KA LUHUR)
		</h1>
		<h1 ref={luhurKaHandap} className="text-sm sm:text-4xl font-bold">
		  VOLERHAUT (ANIMASI TI LUHUR KA HANDAP)
		</h1>
	  </div> */}

			{/* Additional Content (ScrollTrigger Animations) */}
			<section className="h-screen flex flex-col items-center justify-center text-center p-10 fade-in">
				<h2 className="text-4xl sm:text-6xl font-bold mb-6">
					Welcome to Voler Haut
				</h2>
				<p className="text-lg sm:text-xl text-stone-500 max-w-3xl">
					Discover the elegance of premium fashion and accessories. Our curated
					collection is designed to elevate your style and redefine
					sophistication.
				</p>
			</section>

			<section className="h-screen flex flex-col items-center justify-center text-center p-10 slide-right">
				<h2 className="text-4xl sm:text-6xl font-bold mb-6">Why Choose Us?</h2>
				<p className="text-lg sm:text-xl text-stone-500 max-w-3xl">
					At Voler Haut, we prioritize quality, craftsmanship, and timeless
					design. Our products are made to last and leave a lasting impression.
				</p>
			</section>

			<section className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white slide-left">
				<h2 className="text-5xl sm:text-7xl font-extrabold">
					Experience Luxury Like Never Before
				</h2>
			</section>

			<section className="h-screen flex flex-col items-center justify-center p-10 scale-up">
				<h2 className="text-4xl sm:text-6xl font-bold mb-6">
					Browse Our Exclusive Collections
				</h2>
				<p className="text-lg sm:text-xl mb-12 sm:mb-6 sm:text-center">
					Immerse yourself in a world of timeless elegance and unparalleled
					craftsmanship. Explore our curated collections designed to elevate
					your style and leave a lasting impression.
				</p>
				<button className="button-black">Explore Now</button>
			</section>
		</div>
	);
}
