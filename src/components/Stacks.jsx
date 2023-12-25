import React from "react";
import Filter from "./Filter";

import { stackFilters, stackIcons } from "../data/data";

function Stacks() {
	return (
		<section className="default">
			<h2 className="heading">Stacks</h2>

			<div className=" my-4 flex gap-2 flex-wrap">
				{stackFilters.map((filter) => (
					<Filter key={filter} data={filter} />
				))}
			</div>

			<div className="mt-8 flex items-center gap-5 flex-wrap">
				{stackIcons?.map((icon, index) => (
					<div key={index} className="w-[80px]">
						<img src={icon} alt={icon} />
					</div>
				))}
			</div>
		</section>
	);
}

export default Stacks;
