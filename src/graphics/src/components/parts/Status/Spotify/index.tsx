import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ICONS} from '@constants/ICONS';
import {faSpotify} from '@fortawesome/free-brands-svg-icons';
import {useState} from 'react';
import style from './style';
import {css} from '@emotion/react';

export default () => {
	const dummyPlayInfo = {
		provider: 'Spotify',
		name: 'Dummy',
		artist: 'Dummy',
	};
	const [newPlayingInfo, setNewPlaying] = useState(dummyPlayInfo);
	return (
		<div css={style.spotifyRoot}>
			<FontAwesomeIcon icon={faSpotify} color={'white'} fixedWidth={true} css={style.icon} />
			<div css={style.infoRoot}>
				<div css={style.infoName}>
					{newPlayingInfo.name}
				</div>
				<div css={style.infoArtist}>
					{newPlayingInfo.artist}
				</div>
			</div>
		</div>
	);
};
