import React from "react";
import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<main className="w-[80%] mx-auto">
			<About />
			<Stacks />
			<Works />
			<Contact />
		</main>
	);
}

export default App;
