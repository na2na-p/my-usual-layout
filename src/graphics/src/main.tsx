import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Global} from '@emotion/react';
import GlobalStyle from './styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		{/* 背景画像をセット */}
		<Global styles={GlobalStyle} />
			<App />
  </React.StrictMode>,
);
