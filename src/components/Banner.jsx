import React, { useState } from "react";

function Banner() {
	return (
		<div className="relative">
			<img
				src="https://user-images.githubusercontent.com/63772910/179602695-9c533f5f-cd66-48cb-bc88-381bf8b84e82.png"
				alt="cover-img"
				className="w-full"
			/>
			<button className="material-symbols-rounded absolute top-[50%] right-8 text-4xl text-white bg-gray-500/70 hover:bg-gray-500 w-10 h-10 rounded-full">
				navigate_next
			</button>
		</div>
	);
}

export default Banner;
