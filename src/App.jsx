import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import About from "./components/About";
import Theme from "./components/Theme";

function App() {
	return (
		<main className="w-[80%] mx-auto relative">
			<Theme />
			<About />
			<Stacks />
			<Works />
			<Contact />
		</main>
	);
}

export default App;
