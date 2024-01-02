import React, { useState } from "react";

function Banner() {
	const slides = [
		{
			url: "https://media.istockphoto.com/id/1059211766/photo/dog-face-cute-happy-pet-puppy-looking-in-the-grass.webp?b=1&s=170667a&w=0&k=20&c=gBDF2yyLJiHVc86xDBy5JIYSuYCm8_-6g3t26rZsRis=",
		},
		{
			url: "https://media.istockphoto.com/id/1189009449/photo/eye-vision-test-with-sight-chart-optometrist-technology.webp?b=1&s=170667a&w=0&k=20&c=jJ2RQxAbTxrw-exwfvrALZHB8OOcXvr3Pe7m4nz1Tbk=",
		},
		{
			url: "https://media.istockphoto.com/id/482745207/photo/message-paper.webp?b=1&s=170667a&w=0&k=20&c=7RoM1YLn2AfaDTAtfweyQ5KbC2UDF3FzxaTqdjposFg=",
		},
		{
			url: "https://media.istockphoto.com/id/672781504/photo/airplane-with-banner.webp?b=1&s=170667a&w=0&k=20&c=3enI5XvygqF61pOhIn4fKulzXDBtAPTNke7j53lvW80=",
		},
	];

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
				className="material-symbols-rounded absolute top-[50%] right-8 text-4xl text-white bg-gray-500/70 hover:bg-gray-500 w-10 h-10 rounded-full"
			>
				navigate_next
			</button>
		</div>
	);
}

export default Banner;
