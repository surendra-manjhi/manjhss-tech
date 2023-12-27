import React from "react";

import { MAIN_LINKS, OPTIONAL_LINKS } from "../data/data";

function Contact() {
	const LINKS = [...MAIN_LINKS, ...OPTIONAL_LINKS];

	return (
		<section className="default">
			<h2 className="heading">Let’s work</h2>

			<div className="mt-4 flex justify-between flex-wrap">
				<div className="input-wrapper">
					<input
						className="w-full pl-6 py-2 text-[32px] font-thin focus:outline-none dark:bg-zinc-900"
						type="email"
						placeholder="example@gmail.com"
					/>
					<span className="material-symbols-rounded text-4xl pr-6 cursor-pointer">
						forward_to_inbox
					</span>
				</div>

				<div className="flex gap-4 items-center flex-wrap">
					{LINKS?.map((data, index) => (
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
	);
}

export default Contact;
