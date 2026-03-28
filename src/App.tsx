import { useState, useCallback, useEffect } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './pages/hero/hero';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import Contact from './pages/contact/contact';

function App() {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') return true;
		if (saved === 'light') return false;
		return !window.matchMedia('(prefers-color-scheme: light)').matches;
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	const toggleTheme = useCallback(() => {
		setIsDark(prev => !prev);
	}, []);

	return (
		<div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
			<Header isDark={isDark} onToggleTheme={toggleTheme} />
			<main className="max-w-6xl mx-auto px-6">
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
