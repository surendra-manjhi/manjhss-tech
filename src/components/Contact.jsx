import React from "react";

import { MAIN_LINKS } from "../data/data";

function Contact() {
	const LINKS = [...MAIN_LINKS];

	return (
		<div className="bg-gradient-to-b from-white to-transparent p-1 my-8 rounded-2xl">
			<section className="default">
				<h2 className="heading">Let’s work</h2>

				<div className="mt-4 flex justify-between flex-wrap">
					<div className="input-wrapper">
						<input
							className="w-full pl-6 py-2 text-[32px] font-thin bg-transparent"
							type="email"
							placeholder="example@gmail.com"
						/>
						<span className="material-symbols-rounded text-4xl text-white pr-6 cursor-pointer">
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
		</div>
	);
}

export default Contact;
