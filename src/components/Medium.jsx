import React from "react";

function Hightlight({ children }) {
	return (
		<span className="text-black text-[32px] font-medium">{children}</span>
	);
}

export default Hightlight;
