import React, { useState } from "react";
import Highlight from "./Highlight";
import Banner from "./Banner";

import { MAIN_LINKS, OPTIONAL_LINKS } from "../data/data";

function About() {
	const [links, setLinks] = useState([...MAIN_LINKS]);
	const [isDisplay, setIsDisplay] = useState(false);

	function handleClick() {
		isDisplay
			? setLinks([...MAIN_LINKS])
			: setLinks([...MAIN_LINKS, ...OPTIONAL_LINKS]);
		setIsDisplay(!isDisplay);
	}

	return (
		<section className="about">
			<div className="relative">
				<Banner />

				<div className="profile-pic-wrapper overflow-hidden">
					<img
						src="https://pbs.twimg.com/profile_images/1707029425551036416/UBrgU5Zt_400x400.jpg"
						alt="profile-pic"
						className="w-full"
					/>
				</div>
			</div>

			<div className="mt-14 p-8">
				<h1 className="text-5xl text-black dark:text-white font-bold">
					MERN Stack Developer 🍉
				</h1>

				<p className="my-4 text-[32px] text-black dark:text-white font-light break-words">
					Hello, I’m <Highlight>Surendra</Highlight>. I’m a{" "}
					<Highlight>full-stack developer</Highlight> with{" "}
					<Highlight>1 year</Highlight> of experience. I enjoy
					building websites and digital products, based in BHARAT. My
					focus is <Highlight>React (Next.js)</Highlight>.
				</p>

				<div className="mt-8 flex gap-4 items-center flex-wrap">
					<button className="resume">
						Resume
						<span className="material-symbols-rounded text-4xl">
							download
						</span>
					</button>

					{links?.map((data, index) => (
						<a key={index} href={data.href} target="_blank">
							<img
								src={data.src}
								alt={data.src}
								className="w-[52px] aspect-auto rounded-md"
							/>
						</a>
					))}

					<button
						onClick={handleClick}
						class="material-symbols-rounded more"
					>
						more_horiz
					</button>
				</div>
			</div>
		</section>
	);
}

export default About;
