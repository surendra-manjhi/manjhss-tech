import React from "react";

function Filter({ data }) {
	return (
		<div className="flex gap-2 my-4 flex-wrap">
			{data?.map((item, index) => (
				<div
					key={index}
					className="px-4 py-1 bg-white text-black  rounded-full border-2 border-black hover:bg-black hover:text-white text-2xl font-normal"
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Filter;
