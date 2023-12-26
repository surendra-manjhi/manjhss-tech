import React from "react";

function Filter({ data, handler, active }) {
	console.log(active);
	return (
		<button
			onClick={(e) => {
				handler(e.target.innerText.toLowerCase());
			}}
			className={`filter ${active == data ? "active" : "inactive"}`}
		>
			{data}
		</button>
	);
}

export default Filter;
