import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeSwitchProvider } from './hooks/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <GlobalStyles />
      <App />
    </ThemeSwitchProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
