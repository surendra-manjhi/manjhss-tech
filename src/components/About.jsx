import React from "react";
import Highlight from "./Highlight";

import { redirects } from "../data/data";

function About() {
	return (
		<section
			id="about"
			class="bg-white my-8 rounded-[20px] border-[3px] border-neutral-200 relative"
		>
			<div id="profile-img-view" className="relative">
				<img
					src="https://user-images.githubusercontent.com/63772910/179602695-9c533f5f-cd66-48cb-bc88-381bf8b84e82.png"
					alt="profile-cover-img"
					className="w-full rounded-t-[20px]"
				/>

				<img
					src="https://pbs.twimg.com/profile_images/1707029425551036416/UBrgU5Zt_400x400.jpg"
					alt="profile-user-pic"
					className="w-[120px] aspect-auto rounded-[20px] border-[6px] border-white absolute left-14 bottom-[-60px]"
				/>
			</div>

			<div id="profile-content" className="mt-14 p-8">
				<div
					id="profile-content-headline"
					className="text-black text-5xl font-bold"
				>
					MERN Stack Developer 🍉
				</div>

				<p
					id="profile-content-description"
					className="my-4 text-black text-[32px] font-light break-words"
				>
					Hello, I’m <Highlight>Surendra</Highlight>. I’m a{" "}
					<Highlight>full-stack developer</Highlight> with{" "}
					<Highlight>1 year</Highlight> of experience. I enjoy
					building websites and digital products, based in BHARAT. My
					focus is <Highlight>React (Next.js)</Highlight>.
				</p>

				<div
					id="profile-content-redirects"
					className="mt-8 flex gap-4 items-center flex-wrap"
				>
					<button class="bg-black text-white text-[32px] font-normal py-2 px-10 rounded-full flex gap-2 items-center">
						<span>Resume</span>
						<span class="material-symbols-rounded text-4xl">
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
				</div>
			</div>
		</section>
	);
}

export default About;
