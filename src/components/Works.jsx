import React from "react";
import Filter from "./Filter";

import { workFilters } from "../data/data";
import { projects } from "../data/data";
import Card from "./Card";

function Works() {
	return (
		<section
			id="works"
			className="bg-white my-8 p-8 rounded-[20px] border-[3px] border-neutral-200"
		>
			<h2 id="heading" className="text-black text-5xl font-medium">
				Works
			</h2>

			<Filter data={workFilters} />

			<div
				id="projects"
				className="grid grid-cols-2 gap-4 items-start mt-8"
			>
				{projects.map((el, index) => (
					<Card
						key={index}
						codeUrl={el.codeUrl}
						previewUrl={el.previewUrl}
						imgUrl={el.imgUrl}
						title={el.title}
						desc={el.desc}
						tags={el.tags}
					/>
				))}
			</div>
		</section>
	);
}

export default Works;
