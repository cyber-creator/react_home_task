import React from 'react';

const Footer = () => (
	<footer className="footer">
	  <div className="wrapper">
		<div className="top_footer">
		  <div className="footer_logo_box">
			<h1 className="italic-header">Recipe Website</h1>
			<p className="description_footer">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		  </div>
		  <div className="f-contact_address">
			<div className="footer_contacts_box">
			  <h2 className="contact_title">Contacts</h2>
			  <p className="phone_footer">
				<i className="fa fa-phone" aria-hidden="true"></i> 555-555-5555
			  </p>
			  <p className="email_footer">
				<i className="fa fa-envelope" aria-hidden="true"></i> cakeshop@gmail.com
			  </p>
			  <p className="website_footer">
				<i className="fa fa-globe" aria-hidden="true"></i> <a href="https://cakeshop.com" target="_blank" rel="noopener noreferrer">https://cakeshop.com</a>
			  </p>
			</div>
			<div className="footer_address_box">
			  <h2 className="contact_title">Address</h2>
			  <p className="address_footer">
				XX East XXth Street New York, NY XXXXX
			  </p>
			</div>
		  </div>
		</div>
		<div className="footer__bottom">
		  <div className="icon__link-box">
			Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
		  </div>
		  <div className="copyright__box">
			<p className="copyright">Copyright © 2021. All rights reserved.</p>
			<div className="social_footer">
			  <a href="https://facebook.com" className="fb_footer" aria-label="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
			  <a href="https://twitter.com" className="twi_footer" aria-label="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
			  <a href="https://youtube.com" className="yout_footer" aria-label="YouTube"><i className="fa fa-youtube" aria-hidden="true"></i></a>
			</div>
		  </div>
		</div>
	  </div>
	</footer>
  );
  
  export default Footer;