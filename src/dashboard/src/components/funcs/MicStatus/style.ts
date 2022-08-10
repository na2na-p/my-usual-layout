import {css, Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

export default {
	root: css({
		marginTop: '1rem',
	}),
	status: css({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}),
	sx: {
		'.MuiSwitch-thumb': {
			backgroundColor: '#C239B3',
		},
	} as SxProps<Theme>,
};
