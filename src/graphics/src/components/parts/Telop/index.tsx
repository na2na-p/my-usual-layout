import style from './style';
import Marquee from 'react-fast-marquee';

export default () => {
	return (
		<div css={style.textRoot}>
			<Marquee gradient={false}>aaaaaa</Marquee>
		</div>
	);
};
