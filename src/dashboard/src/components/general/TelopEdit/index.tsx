import {TextField, TextFieldProps} from '@mui/material';
import {sx} from './sx';
export default ({
	...props
}: TextFieldProps) => {
	return (
		<TextField {...props} sx={sx} />
	);
};
