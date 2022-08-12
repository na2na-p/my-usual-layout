import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import style from './style';

import {faMicrophone, faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons';

export default () => {
	const [micStatus, setMicStatus] = useState(faMicrophoneSlash);

	return (
		<div css={style.micIconRoot}>
			{/* <button type='button' onClick={
				() => {
					if (micStatus === faMicrophone) {
						setMicStatus(faMicrophoneSlash);
					} else {
						setMicStatus(faMicrophone);
					}
				}
			}>Change</button> */}
			<FontAwesomeIcon icon={micStatus} color={'white'} fixedWidth={true} css={style.icon} />
		</div>
	);
};
