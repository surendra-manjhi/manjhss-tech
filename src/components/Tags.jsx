import React from "react";

function Tags({ data }) {
	return (
		<div className="px-4 py-1 bg-white text-2xl text-zinc-900 rounded-full">
			{`#${data}`}
		</div>
	);
}

export default Tags;
