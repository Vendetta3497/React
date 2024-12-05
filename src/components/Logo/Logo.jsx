import { memo } from 'react';

function Logo({  image }) {

	return (
		<div className="logo"><img src={image} alt="logo" /></div>
	);
}
 
export default memo(Logo);