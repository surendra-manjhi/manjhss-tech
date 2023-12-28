import React, { useState, useEffect } from "react";

function Theme() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		theme == "dark"
			? document.querySelector("html").classList.add("dark")
			: document.querySelector("html").classList.remove("dark");
	}, [theme]);

	function handleThemeSwitch() {
		setTheme(theme == "dark" ? "light" : "dark");
	}
	return (
		<button
			onClick={handleThemeSwitch}
			class="material-symbols-rounded text-4xl fixed right-14 bottom-12 text-black dark:text-white"
		>
			{theme == "light" ? "dark_mode" : "light_mode"}
		</button>
	);
}

export default Theme;
