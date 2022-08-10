import Button from '@components/general/Button';
import TelopEdit from '@components/general/TelopEdit';
import {FormControl} from '@mui/material';
import style from './style';

export default () => {
	return (
		<FormControl fullWidth={true}>
			<TelopEdit label="Telop" multiline={true} rows={5} />
			<Button variant="contained" css={style.button}>Apply</Button>
		</FormControl>
	);
};
