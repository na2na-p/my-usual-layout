// import {useState} from 'react';
import dayjs from 'dayjs';
import style from './style';
import useTime from '@/hooks/useTime';

export default () => {
	const time = useTime(1000);


	return (
		<div css={style.timeRoot}>
			{dayjs(time).format('YYYY/MM/DD')}
			<br />
			<div>
			{dayjs(time).format('HH')}
			<span>
				:
			</span>
			{dayjs(time).format('mm')}
			</div>
		</div>
	);
};
