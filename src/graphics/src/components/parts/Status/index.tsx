import Mic from './Mic';
import Spotify from './Spotify';
import Account from './Account';
import style from './style';

export default () => {
	return (
		<div css={style.statusRoot}>
			<Mic />
			<Spotify />
			<Account />
		</div>
	);
};
