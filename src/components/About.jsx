import React from "react";
import Medium from "./Medium";

function About() {
	return (
		<section
			id="about"
			class="bg-white my-8 rounded-[20px] border-[3px] border-neutral-200 relative"
		>
			<div id="cover" className="">
				<img
					src="https://user-images.githubusercontent.com/63772910/179602695-9c533f5f-cd66-48cb-bc88-381bf8b84e82.png"
					alt=""
					className="w-full object-cover"
				/>
			</div>

			<div id="content" className="p-6">
				<div
					id="headline"
					className="my-4 text-black text-5xl font-bold"
				>
					MERN Stack Developer 🍉
				</div>

				<p
					id="about"
					className="text-black text-[32px] font-light break-words"
				>
					Hello, I’m <Medium>Surendra</Medium>. I’m a{" "}
					<Medium>full-stack developer</Medium> with{" "}
					<Medium>1 year</Medium> of experience. I enjoy building
					websites and digital products, based in BHARAT. My focus is{" "}
					<Medium>React (Next.js)</Medium>.
				</p>

				<div id="redirects" className="mt-10 flex gap-3 items-center">
					<a id="resume" href="">
						<div className="px-10 py-3 bg-black rounded-[50px] border-black text-center text-white text-[32px] font-normal">
							<div className="flex gap-3 items-center justify-center">
								<span className="">Resume</span>
								<span class="material-symbols-rounded text-4xl">
									download
								</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
