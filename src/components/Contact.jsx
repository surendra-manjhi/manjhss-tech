import React from "react";

import { redirects } from "../data/data";

function Contact() {
	return (
		<section
			id="contact"
			className="bg-white my-8 p-8 rounded-[20px] border-[3px] border-neutral-200"
		>
			<h2 id="heading" className="text-black text-5xl font-medium">
				Let’s work
			</h2>

			<div className="mt-4 flex justify-between flex-wrap">
				<div className="w-[60%] flex items-center border-2 border-neutral-200 rounded-full overflow-hidden">
					<input
						className="w-full pl-6 py-2 text-[32px] font-thin focus:outline-none"
						type="email"
						placeholder="example@gmail.com"
					/>
					<span className="material-symbols-rounded text-4xl pr-6 cursor-pointer">
						forward_to_inbox
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
