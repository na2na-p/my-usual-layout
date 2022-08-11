import Clock from '@components/parts/Clock';
import Telop from '@components/parts/Telop';

function App() {
	// ロード完了時にnodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');する
	// window.nodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');

	return (
		<>
			<Clock />
			<Telop />
		</>
	);
}

export default App;
