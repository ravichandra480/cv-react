import React from "react";
import moment from 'moment';

import './experience.scss'
import morganStanley from '../../images/ms_logo.jpg';

class Experience extends React.Component {
	public state: { [key: string]: any } = {};

	constructor(props: any) {
		super(props);
		const starts = moment('2022-10-14');
		const ends = moment(new Date());
		this.state = {
			experience: moment.duration(ends.diff(starts)),
			tcsLogo: 'https://www.tcs.com/content/dam/tcs/images/Newtcslogo/logo-white1x.png',
			fsLogo: 'https://www.featurespace.com/wp-content/themes/featurespace/dist/assets/full-logo-outlined.svg',
			msLogo: morganStanley
		};
	}

	render() {
		return (
			<ul className="organisations">
				<li className="organisation">
					<div className="organisation__years">Present - October 2022</div>
					<div className="organisation__info">
						<div className="organisation--name">
							<a href="https://www.featurespace.com/" target="_blank" rel="noreferrer">Morgan Stanley</a>
							<img src={this.state.msLogo} alt="Morgan Stanley" />
						</div>
						<div className="organisation--role">
							Role : Vice President | Senior Web Developer | Front End Architect | JavaScript | TypeScript | Angular
						</div>
						<div className="organisation--duration">
							Duration&nbsp;:&nbsp;
							<span className="organisation--duration__length">
								{this.state.experience['_data']['years']} Years {this.state.experience['_data']['months']} Months {this.state.experience['_data']['days']} Days
							</span>
						</div>
						<div className="organisation--location">
							<div>Location: <a href="https://goo.gl/maps/iacbNoBPuC1vAhgd7" target="_blank" rel="noreferrer">25 Cabot Square, London E14 4QA</a></div>
						</div>
					</div>
				</li>
				<li className="organisation">
					<div className="organisation__years">October 2022 - August 2021</div>
					<div className="organisation__info">
						<div className="organisation--name">
							<a href="https://www.featurespace.com/" target="_blank" rel="noreferrer">Featurespace</a>
							<img src={this.state.fsLogo} alt="Featurespace" />
						</div>
						<div className="organisation--role">
							Role : Senior Engineer 2 | <a href="https://elm-lang.org/">Elm</a>
						</div>
						<div className="organisation--duration">
							Duration&nbsp;:&nbsp;
							<span className="organisation--duration__length">1 yr 4 mos</span>
						</div>
						<div className="organisation--location">
						<div>Location: <a href="https://goo.gl/maps/UhzETUBjB8FFJ5cB9" target="_blank" rel="noreferrer">140 Cambridge Science Park, Milton, Cambridge CB4 0GF</a></div>
						</div>
					</div>
				</li>
				<li className="organisation">
					<div className="organisation__years">
						August 2021 - March 2011
					</div>
					<div className="organisation__info">
						<div className="organisation--name">
							<a href="https://www.tcs.com/" target="_blank" rel="noreferrer">Tata Consultancy Services</a>
							<img src={this.state.tcsLogo} alt="TCS" />
						</div>
						<div className="organisation--role">
							Role : Assistant Consultant | Senior Web Developer | Front End Architect | JavaScript | <a href="https://www.typescriptlang.org/">TypeScript</a> | <a href="https://angular.io/">Angular</a>
						</div>
						<div className="organisation--duration">
							Duration&nbsp;:&nbsp;
							<span className="organisation--duration__length">
								10 Years 5 Months
							</span>
						</div>
						<div className="organisation--location">
							Location: London, United Kingdom
						</div>
					</div>
				</li>
			</ul>
		)
	}
}

export default Experience;
