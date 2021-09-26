import './App.scss';

import React from "react";
import {
	Switch,
	Route,
	BrowserRouter
} from "react-router-dom";

import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

function App() {
	return (
		<main className="app">
			<BrowserRouter>
				<Header />
				<section className="app--page">
					<Switch>
						<Route exact path="/">
							<About />
						</Route>
						<Route path="/experience">
							<Experience />
						</Route>
						<Route path="/skills">
							<Skills />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</section>
			</BrowserRouter>
			<Footer />
		</main>
	);
}

export default App;
