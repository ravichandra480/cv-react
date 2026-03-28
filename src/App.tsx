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
		if (saved === 'light') return false;
		return true; // default to dark (terminal mode)
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	const toggleTheme = useCallback(() => {
		setIsDark(prev => !prev);
	}, []);

	return (
		<div className="scanline-overlay relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
			{/* Animated scanline beam */}
			<div className="pointer-events-none fixed inset-0 z-[998] overflow-hidden">
				<div className="absolute w-full h-[1px] bg-accent/10 dark:bg-accent/20 animate-scanline" />
			</div>
			{/* Vignette */}
			<div
				className="pointer-events-none fixed inset-0 z-[997]"
				style={{ background: 'radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.18) 100%)' }}
			/>
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
