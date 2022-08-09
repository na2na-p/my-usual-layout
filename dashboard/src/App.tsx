import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
	<p>
		Hello, I'm one of the panels in your bundle!
		I'm where you put your controls.
	</p>

	<p>To edit me, open "<span id="path" className="monospace"></span>" in your favorite text editor or IDE.</p>

	<p>
		You can use any libraries, frameworks, and tools you want.
		The only limit of panels is that they cannot render outside of their
		<span className="monospace">&lt;iframe&gt;</span>'s bounding box.
	</p>

	<p>Visit <a href="https://nodecg.com" target="_blank" rel="noopener">https://nodecg.com</a> for full documentation.</p>

	<p>You've got this!</p>
	</>
  )
}

export default App
