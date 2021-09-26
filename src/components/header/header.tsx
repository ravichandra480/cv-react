import Menu from '../menu/menu'
import './header.scss'
import React from 'react';
const lightTheme = {
	"--main-app-bg": "#ffffff",
	"--main-app-text-color": "#282c34",
	"--primary-color": "#282c34",
	"--complimentary-color": "#ffffff",
	"--secondary-color": "#cb3837",
	"--alt-secondary-color": "#cb3837"
};

const darkTheme = {
	"--main-app-bg": "#282c34",
	"--main-app-text-color": "#ffffff",
	"--primary-color": "#ffffff",
	"--complimentary-color": "#282c34",
	"--secondary-color": "#cb3837",
	"--alt-secondary-color": "#663399"
};

class Header extends React.Component {
	state: any;
	constructor(props: any) {
		super(props);
		this.state = {
			selectedTheme: 'dark'
		}
		this.setTheme(this.state.selectedTheme);
	}

	setTheme(nextTheme: "light" | "dark")  {
		this.setState({selectedTheme: nextTheme});
		const theme: {[key: string]: string} = nextTheme === "light" ? lightTheme : darkTheme;
		Object.keys(theme).forEach(key => {
			const value = theme[key];
			document.documentElement.style.setProperty(key, value);
		});
	}

	render() {
		return (
			<header className="app__header">
				<div className="app__header__change-theme">
					<span className={`app__header__change-theme--light ${this.state.selectedTheme === 'light' ? "selected" : "no-selected"}`}
						  onClick={() => this.setTheme("light")} role="button">
						LIGHT
					</span>
					<span className={`app__header__change-theme--dark ${this.state.selectedTheme === 'dark' ? "selected" : "no-selected"}`}
						  onClick={() => this.setTheme("dark")}  role="button">
						DARK
					</span>
				</div>
				<h1 className="app__header__title">RAVI CHANDRA RAVULAPATI</h1>
				<Menu></Menu>
			</header>
		);
	}
}


export default Header;
