import React from "react";
import Filter from "./Filter";

import { workFilters } from "../data/data";
import { projects } from "../data/data";
import Card from "./Card";

function Works() {
	return (
		<section className="default">
			<h2 className="heading">Works</h2>

			<div className=" my-4 flex gap-2 flex-wrap">
				{/* {workFilters.map((filter, index) => (
					<Filter key={index} data={filter} />
				))} */}
			</div>

			<div className="grid grid-cols-2 gap-4 items-start mt-8">
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
