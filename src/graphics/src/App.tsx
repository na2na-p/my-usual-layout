import Clock from '@components/parts/Clock';
import Telop from '@components/parts/Telop';
import Status from '@components/parts/Status';
import style from './styles/App';

function App() {
	// ロード完了時にnodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');する
	// window.nodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');

	return (
		<>
		<div css={style.upperLeft}>
			<Clock />
		</div>
		<div css={style.bottomRight}> {/* 右下に来る要素たちの親 */}
			<Status />
			<Telop />
		</div>
		</>
	);
}

export default App;
