import React from "react";

function Tags({ data }) {
	return (
		<div className="px-4 py-1 bg-black dark:bg-white text-2xl text-white dark:text-black rounded-full">
			{`#${data}`}
		</div>
	);
}

export default Tags;
