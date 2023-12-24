import React from "react";

import { redirects } from "../data/data";

function Contact() {
	return (
		<section
			id="contact"
			class="bg-white my-8 p-6 rounded-[20px] border-[3px] border-neutral-200"
		>
			<div id="heading" class="text-black text-5xl font-medium">
				Let’s work
			</div>

			<div className="mt-4 flex justify-between flex-wrap">
				<div className="w-[60%] flex items-center border-[3px] border-neutral-200 rounded-full overflow-hidden">
					<input
						className="w-full pl-6 py-2 text-[32px] font-thin focus:outline-none"
						type="text"
						placeholder="example@gmail.com"
					/>
					<span class="material-symbols-rounded text-5xl pr-2 cursor-pointer">
						send
					</span>
				</div>

				<div className="flex gap-4 items-center flex-wrap">
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

export default Contact;
