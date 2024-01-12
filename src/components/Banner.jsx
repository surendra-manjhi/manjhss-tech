import React, { useState } from "react";

import { COVER_IMG } from "../data/data";

function Banner() {
	const slides = [...COVER_IMG];
	const [currentIndex, setCurrentIndex] = useState(0);

	function nextSlide() {
		const isLastSlide = currentIndex == slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	function goToSlide(slideIndex) {
		setCurrentIndex(slideIndex);
	}

	return (
		<div className="relative">
			<img
				src={slides[currentIndex].url}
				alt="cover-img"
				className="w-full"
			/>

			<button
				onClick={nextSlide}
				className="material-symbols-rounded absolute top-[50%] right-8 text-4xl text-white bg-gradient-to-b from-gray-700 to-zinc-900 w-10 h-10 rounded-full"
			>
				navigate_next
			</button>
		</div>
	);
}

export default Banner;
