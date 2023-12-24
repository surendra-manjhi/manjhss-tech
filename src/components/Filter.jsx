import React from "react";

function Filter({ data }) {
	return (
		<div className="flex gap-2 py-4 flex-wrap">
			{data?.map((item, index) => (
				<div
					key={index}
					className="px-4 py-1 bg-white hover:bg-black rounded-[50px] border-2 border-black text-black hover:text-white text-center text-2xl font-normal"
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Filter;
