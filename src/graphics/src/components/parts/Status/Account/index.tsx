import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faTwitch, faSteam} from '@fortawesome/free-brands-svg-icons';
import Steam from './Steam';
import style from './style';
import {useState} from 'react';

export default () => {
	const [userInfo, setUserInfo] = useState({
		platform: 'steam',
		id: '00000000000',
	});
	return (
		// platform=steamならSteamコンポーネントを表示
		// platform=twitchならTwitchコンポーネントを表示
		// platform=youtubeならYoutubeコンポーネントを表示
		<>
			{userInfo.platform === 'steam' && <Steam id={userInfo.id} />}
			{/* {userInfo.platform === 'twitch' && <Twitch id={userInfo.id} />} */}
			{/* {userInfo.platform === 'youtube' && <Youtube id={userInfo.id} />} */}
		</>
	);
};
