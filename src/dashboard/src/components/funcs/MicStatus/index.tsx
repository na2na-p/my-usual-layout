import {FormControl, Switch} from '@mui/material';
import {useState} from 'react';
import style from './style';

export default () => {
	// TODO: 初期値をNodeCGから取得
	const [micIsEnabled, setMicIsEnabled] = useState(true);
	return (
		<div css={style.root}>
			<FormControl>
				<b>Mic Status</b>
				<Switch checked={micIsEnabled} onChange={() => setMicIsEnabled(!micIsEnabled)} sx={style.sx} color='secondary' />
				{/* Switchの横に並ぶようにする */}
				<div css={style.status}>
					{micIsEnabled ? 'Enabled' : 'Disabled'}
				</div>
			</FormControl>
		</div>
	);
};
