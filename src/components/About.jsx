import React from "react";
import Highlight from "./Highlight";

import { redirects } from "../data/data";

function About() {
	return (
		<section className="about">
			<div className="relative">
				<div>
					<img
						src="https://user-images.githubusercontent.com/63772910/179602695-9c533f5f-cd66-48cb-bc88-381bf8b84e82.png"
						alt="cover-img"
						className="w-full"
					/>
				</div>

				<div className="profile-pic-wrapper">
					<img
						src="https://pbs.twimg.com/profile_images/1707029425551036416/UBrgU5Zt_400x400.jpg"
						alt="profile-pic"
						className="w-full rounded-[20px]"
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

					{redirects?.map((data, index) => (
						<a key={index} href={data.href} target="_blank">
							<img
								src={data.src}
								alt={data.src}
								className="w-[52px] aspect-auto"
							/>
						</a>
					))}

					<span class="material-symbols-rounded more">
						more_horiz
					</span>
				</div>
			</div>
		</section>
	);
}

export default About;
