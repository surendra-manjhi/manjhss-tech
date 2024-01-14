import React from "react";
import Highlight from "./Highlight";
import Banner from "./Banner";

import { MAIN_LINKS } from "../data/data";

function About() {
	return (
		<div className="bg-gradient-to-b from-white to-transparent p-1 my-8 rounded-2xl">
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
					<h1 className="text-5xl text-white font-bold">
						MERN Stack Developer 🍉
					</h1>

					<p className="my-4 text-[32px] text-white font-light break-words">
						Hello, I’m <Highlight>Surendra</Highlight>. I’m a{" "}
						<Highlight>full-stack developer</Highlight> with{" "}
						<Highlight>1 year</Highlight> of experience. I enjoy
						building websites and digital products, based in BHARAT.
						My focus is <Highlight>React (Next.js)</Highlight>.
					</p>

					<div className="mt-8 flex gap-4 items-center flex-wrap">
						<button className="resume">
							Resume
							<span className="material-symbols-rounded text-4xl">
								download
							</span>
						</button>

						{[...MAIN_LINKS]?.map((data, index) => (
							<a key={index} href={data.href} target="_blank">
								<img
									src={data.src}
									alt={data.src}
									className="w-[52px] aspect-auto rounded-md"
								/>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
