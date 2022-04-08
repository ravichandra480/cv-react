import './menu.scss'

import {NavLink} from "react-router-dom";

function Menu() {

	return (
		<nav>
			<ul className="app-menu">
				<li><NavLink to="/" activeClassName='is-active'>About</NavLink></li>
				<li><NavLink to="/experience" activeClassName='is-active'>Experience</NavLink></li>
				<li><NavLink to="/skills" activeClassName='is-active'>Skills</NavLink></li>
				<li><NavLink to="/projects" activeClassName='is-active'>Projects</NavLink></li>
				<li><NavLink to="/contact" activeClassName='is-active'>Connect</NavLink></li>
			</ul>
		</nav>
	)
}

export default Menu;
