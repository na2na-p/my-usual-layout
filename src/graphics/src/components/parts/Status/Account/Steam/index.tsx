import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSteam} from '@fortawesome/free-brands-svg-icons';

import style from '../style';

type propsType = {
	id: string;
}

export default (props: propsType) => {
	return (
		<div css={style.accountInfoRoot}>
			<FontAwesomeIcon icon={faSteam} color={'white'} fixedWidth={true} css={style.icon} />
			<p css={style.id}>
				{props.id}
			</p>
		</div>
	);
};
