import React from "react";

function Tags({ data }) {
	return (
		<div className="px-4 py-1 bg-white text-[calc(16px_+_0.390625vw)] text-zinc-900 rounded-full">
			{`#${data}`}
		</div>
	);
}

export default Tags;
