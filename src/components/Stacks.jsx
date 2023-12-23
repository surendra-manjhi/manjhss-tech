import React from "react";
import Filter from "./Filter";

function Stacks() {
	return (
		<section
			id="stacks"
			class="bg-white my-8 p-6 rounded-[20px] border-[3px] border-neutral-200"
		>
			<div id="heading" class="text-black text-5xl font-medium ">
				Stacks
			</div>

			<Filter />
		</section>
	);
}

export default Stacks;
