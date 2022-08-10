import {FormControl, NativeSelect} from '@mui/material';
import {useState} from 'react';
import {sx} from './sx';

export default () => {
	// TODO: 初期値をNodeCGから取得
	const [playerSelector, setPlayerSelector] = useState(0);

	// 現在のNativeSelectのvalueを取得する

	return (
		<FormControl fullWidth={true} css={{marginTop: '1rem'}}>
			<b>Account</b>
			{/* 現在のvalueを渡す */}
			<NativeSelect
				sx={sx}
				defaultValue={0}
				onChange={(event: React.ChangeEvent<{value: unknown}>) => {
					setPlayerSelector(event.target.value as number);
				}}>
				<option value={0}>RTA</option>
				<option value={1}>Other</option>
			</NativeSelect>
			{playerSelector}
		</FormControl>
	);
};
