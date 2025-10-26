import './contact.scss'

function Contact() {
	return (
		<ul className="connect-social">
			<li>
				<a href="https://www.linkedin.com/in/ravichandrar/" target="_blank" rel="noreferrer">
					<svg width="50" height="50" viewBox="0 0 80 70">
						<path className="linkdin"
							  d="M1165,274.515a1.2,1.2,0,0,0,1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025,1.291,2.029h.724l-1.389-2.1Zm-.783-.472h-.785V272.45h.995c.514,0,1.1.084,1.1.757,0,.774-.593.836-1.314.836"
							  transform="translate(-1092.136 -213.406)"
							  fill="#0a66c2"/>
						<path className="linkdin"
							  d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
							  transform="translate(-903.776 -57.355)"
							  fill="#0a66c2"/>
						<path className="linkdin"
							  d="M1156.525,264.22a4.418,4.418,0,1,0,.085,0h-.085m0,8.33a3.874,3.874,0,1,1,3.809-3.938c0,.022,0,.043,0,.065a3.791,3.791,0,0,1-3.708,3.871h-.1"
							  transform="translate(-1084.362 -207.809)"
							  fill="#0a66c2"/>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://github.com/ravichandra480" target="_blank" rel="noreferrer">
					<svg version="1.1" className="github"
						 width="50" height="50" viewBox="0 0 16 16">
						<path className="github"
							  fill="#000"
							  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
						</path>
					</svg>
				</a>
			</li>
			<li className="connect-social__npm">
				<a href="https://www.npmjs.com/~ravichandrar" target="_blank" rel="noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6"
						 width="80" height="50" className="npm">
						<path className="npm-border" fill="#CB3837"
							  d="M0,0v6h5v1h4v-1h9v-6"/>
						<path className="npm-body" fill="#FFF"
							  d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"/>
					</svg>
				</a>
			</li>
		</ul>
	)
}

export default Contact;
