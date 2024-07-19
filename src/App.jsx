import Product from "./pages/components/product";

const App = () => {
    return (
      <>
       	<header>
				<div className="header__navigation_box">
					<div className="wrapper">
						<div className="header__navigation">
							<div className="menu__container">
								<div className="menu__container-inner">
									<a className="header__logo-desk" href="#">
										<div className="italic-header">Recipe Website</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
		</header>

		<main>
			<div className="main__inner">
				<section className="catalog">
					<div className="products__container">
						<Product />
					</div>
				</section>
			</div>
		</main> 

		<footer className="footer">
			<div className="wrapper">
				<div className="top_footer">
					<div className="footer_logo_box">
						<div className="italic-header">Recipe Website</div>
						<p className="description_footer">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						</p>
					</div>
					<div className="f-contact_address">
						<div className="footer_contacts_box">
							<span className="contact_title">
		                        Contacts
		                    </span>
		                    <span className="phone_footer">
		                        <a href="tel:555-555-555555"><i className="fa fa-phone" aria-hidden="true"></i>555-555-5555</a>
		                    </span>
		                    <span className="email_footer">
		                        <a href="mailto:cakeshop@gmail.com">cakeshop@gmail.com</a>
		                    </span>
		                    <span className="website_footer">
		                        <a href="#">https://cakeshop.com</a>
		                    </span>
						</div>
						<div className="footer_address_box">
							<span className="contact_title">
		                        Address
		                    </span>
		                    <span className="address_footer">
		                        XX East XXth Street New York, NY XXXXX
		                    </span>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="icon__link-box">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
					<div className="copyright__box">
						<span className="copyright">Copyright © 2021. All rights reserved.</span>
						<div className="social_footer">
							<a href="#" className="fb_footer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
							<a href="#" className="twi_footer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							<a href="#" className="yout_footer"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
      </>
  )
};
export default App;