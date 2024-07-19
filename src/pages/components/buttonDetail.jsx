import React from 'react';
import SvgCard from './svgCard';

const ButtonDetail = () => {
  return (
	<div className="button_detail-box">
	<a className="btn__loader" href="single.html">
		<span className="button__text">Detail</span>
		<div className="btn__loader-box">
			<SvgCard />

		</div>
	</a>
</div>
  );
};

export default ButtonDetail;