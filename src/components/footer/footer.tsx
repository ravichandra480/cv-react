import './footer.scss';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__inner">
				<span className="footer__logo">RC<span className="footer__dot">.</span></span>
				<span className="footer__copy">© {new Date().getFullYear()} Ravi Chandra Ravulapati. All rights reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
