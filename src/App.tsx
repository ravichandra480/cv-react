import './App.scss';

import {
	Switch,
	Route,
	BrowserRouter,
	Redirect,
	useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import { useEffect, useState } from 'react';

function App() {
	return (
		<main className="app">
			<BrowserRouter>
				<Header />
				<Content />
			</BrowserRouter>
			<Footer />
		</main>
	);
}

function Content() {
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) {
			setTransistionStage("fadeOut");
		}
	}, [displayLocation, location]);

	return (
		<div
			className={`${transitionStage}`}
			onAnimationEnd={() => {
				if (transitionStage === "fadeOut") {
					setTransistionStage("fadeIn");
					setDisplayLocation(location);
				}
			}}>
			<section className="app--page">
				<TransitionGroup component={null}>
					<CSSTransition key={location.key} 
						classNames="fade" timeout={300}>
						<Switch>
							<Route exact path="/">
								<Redirect to="/about" />
							</Route>
							<Route exact path="/about">
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
					</CSSTransition>
				</TransitionGroup>
			</section>
		</div>
	);
}

export default App;
