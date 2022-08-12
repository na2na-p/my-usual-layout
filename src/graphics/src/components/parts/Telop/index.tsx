import style from './style';
import Marquee from 'react-fast-marquee';
import {useState} from 'react';

export default () => {
	const [text, setText] = useState('下20px 右40px FontSize64px WWWWWWWWWWWWWW');

	return (
		<div css={style.textRoot}>
			<Marquee gradient={false} speed={75}>{text}</Marquee>
		</div>
	);
};
