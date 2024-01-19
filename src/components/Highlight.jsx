import React from "react";

function Highlight({ children }) {
	return (
		<span className="text-[calc(24px_+_0.390625vw)] text-white font-medium underline">
			{children}
		</span>
	);
}

export default Highlight;
