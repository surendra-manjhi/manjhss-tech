import React from "react";
import Filter from "./Filter";

import {workFilters} from "../data/data"

function Works() {
	return (
		<section
			id="works"
			class="bg-white my-8 p-6 rounded-[20px] border-[3px] border-neutral-200"
		>
			<div id="heading" class="text-black text-5xl font-medium">
				Works
			</div>

			<Filter data={workFilters} />
		</section>
	);
}

export default Works;
