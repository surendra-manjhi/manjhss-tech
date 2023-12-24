import React from "react";

function Tags({ data }) {
	return (
		<div className="flex gap-2 mt-2 flex-wrap">
			{data?.map((item, index) => (
				<div
					key={index}
					className="px-4 py-1 bg-black rounded-full border-black text-white text-2xl font-normal"
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Tags;
