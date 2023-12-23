import React, { Children } from "react";

function Medium({ children }) {
	return (
		<span className="text-black text-[32px] font-medium">{children}</span>
	);
}

export default Medium;
