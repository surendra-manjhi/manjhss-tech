import React from "react";

function Filter() {
	return (
		<div className="flex gap-3 py-4">
			<div className="px-4 py-1 bg-black rounded-[50px] border-2 border-black text-white text-center text-2xl font-normal ">
				All
			</div>
			<div className="px-4 py-1 bg-white rounded-[50px] border-2 border-black text-black text-center text-2xl font-normal ">
				Frontend
			</div>
			<div className="px-4 py-1 bg-white rounded-[50px] border-2 border-black text-black text-center text-2xl font-normal ">
				Backend
			</div>
			<div className="px-4 py-1 bg-white rounded-[50px] border-2 border-black text-black text-center text-2xl font-normal ">
				APIs
			</div>
		</div>
	);
}

export default Filter;
