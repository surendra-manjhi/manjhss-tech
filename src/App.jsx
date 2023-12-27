import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import About from "./components/About";
import Music from "./components/Music";

function App() {
	return (
		<main className="w-[80%] mx-auto relative">
			<Music />
			<About />
			<Stacks />
			<Works />
			<Contact />
		</main>
	);
}

export default App;
