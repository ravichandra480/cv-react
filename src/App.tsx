import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './pages/hero/hero';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import Contact from './pages/contact/contact';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
