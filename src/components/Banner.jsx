import React, { useState } from "react";

function Banner() {
	const covers = [
		"https://cultivatedculture.com/wp-content/uploads/2020/06/LinkedIn-Banner-Image-Example-of-Someone-Hiking-In-The-Mountains.png",
		"https://business.linkedin.com/content/dam/me/business/en-us/marketing-solutions/events/2017/images/banners/vertical-trust-services-event-dsk-2x.jpg",
		"https://cdn.wallpapersafari.com/89/8/PhTjr9.jpg",
	];

	const [count, setCount] = useState(2);
	const [next, setNext] = useState(covers[count]);

	function handleClick() {}
	return (
		<div className="relative">
			<img src={next} alt="cover-img" className="w-full" />
			<button
				onClick={handleClick}
				className="material-symbols-rounded absolute top-[50%] right-8 text-4xl text-white bg-gray-500/70 hover:bg-gray-500 w-10 h-10 rounded-full"
			>
				navigate_next
			</button>
		</div>
	);
}

export default Banner;
