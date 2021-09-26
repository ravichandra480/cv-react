import React from "react";
import moment from 'moment';

import './experience.scss'

class Experience extends React.Component {
	public state: { [key: string]: any } = {};

	constructor(props: any) {
		super(props);
		const starts = moment('2021-08-31');
		const ends = moment(new Date());
		this.state = {
			experience: moment.duration(ends.diff(starts)),
			tcsLogo: 'https://www.tcs.com/content/dam/tcs/images/Newtcslogo/logo-white1x.png',
			fsLogo: 'https://www.featurespace.com/wp-content/themes/featurespace/dist/assets/full-logo-outlined.svg'
		};
	}

	render() {
		return (
			<ul className="organisations">
				<li className="organisation">
					<div className="organisation__years">Present - August 2021</div>
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
							<span className="organisation--duration__length">
								{this.state.experience['_data']['years']} Years {this.state.experience['_data']['months']} Months {this.state.experience['_data']['days']} Days
							</span>
						</div>
						<div className="organisation--location">
							Location: Cambridge, United Kingdom
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
