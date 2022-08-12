/* eslint-disable quote-props */
import {css} from '@emotion/react';
import bgImage from '@assets/background.png';

export default css({
	body: {
		backgroundImage: `url(${bgImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '1920px',
		width: '1920px',
		height: '1080px',
	},
	'#root': {
		// 左上で固定
		position: 'fixed',
		top: '0',
		left: '0',
		width: '1920px',
		height: '1080px',
	},
});
