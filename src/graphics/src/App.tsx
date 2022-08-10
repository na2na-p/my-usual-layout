// eslint-disable-next-line require-jsdoc
function App() {
	const currentPath = window.location.pathname;
	// ロード完了時にnodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');する
	window.nodecg.log.info('Here\'s an example of using NodeCG\'s logging API!');

	return (
		<>
			<p>
		Hello, I&apos;m one of the panels in your bundle!
		I&apos;m where you put your controls.
			</p>

			<p>To edit me, open &quot;<span id="path" className="monospace">{currentPath}</span>&quot; in your favorite text editor or IDE.</p>

			<p>
		You can use any libraries, frameworks, and tools you want.
		The only limit of panels is that they cannot render outside of their
				<span className="monospace">&lt;iframe&gt;</span>&apos;s bounding box.
			</p>

			<p>Visit <a href="https://nodecg.com" target="_blank" rel="noopener noreferrer">https://nodecg.com</a> for full documentation.</p>

			<p>You&apos;ve got this!</p>
		</>
	);
}

export default App;
