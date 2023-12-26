import React, { useState } from "react";
import Filter from "./Filter";

import { PROJECT_FILTERS, PROJECTS } from "../data/data";
import Card from "./Card";

function Works() {
	const [active, setActive] = useState("all");
	const [projects, setProjects] = useState([...PROJECTS]);

	const filterIcons = (val) => {
		setActive(val);

		if (val == "all") {
			setProjects([...PROJECTS]);
		} else {
			let newProjects = PROJECTS.filter((project) => {
				return project.type == val;
			});

			setProjects(newProjects);
		}
	};

	return (
		<section className="default">
			<h2 className="heading">Works</h2>

			<div className=" my-4 flex gap-2 flex-wrap">
				{PROJECT_FILTERS.map((filter, index) => (
					<Filter
						key={index}
						data={filter}
						handler={filterIcons}
						active={active}
					/>
				))}
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
