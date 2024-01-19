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

	return (
		<div className="relative">
			<img
				src={slides[currentIndex].url}
				alt="cover-img"
				className="w-full"
			/>

			<button
				onClick={nextSlide}
				className="material-symbols-rounded absolute top-[50%] right-8 text-[calc(26px_+_0.390625vw)] text-white w-10 h-10 rounded-full"
			>
				navigate_next
			</button>
		</div>
	);
}

export default Banner;
