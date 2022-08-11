import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {faMicrophone, faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons';

type ICONS_Type = {
	[key: string]: FontAwesomeIconProps['icon'];
}

export const ICONS: ICONS_Type = {
	twitch: 'twitch',
	youtube: 'youtube',
	steam: 'steam',
	spotify: 'spotify',
	microphone: faMicrophone,
	microphoneSlash: faMicrophoneSlash,
};
