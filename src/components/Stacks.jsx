import React from "react";
import Filter from "./Filter";

import { stackFilters, stackIcons } from "../data/data";

function Stacks() {
	return (
		<section
			id="stacks"
			class="bg-white my-8 p-8 rounded-[20px] border-[3px] border-neutral-200"
		>
			<h2 id="heading" class="text-black text-5xl font-medium">
				Stacks
			</h2>

			<Filter data={stackFilters} />

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
