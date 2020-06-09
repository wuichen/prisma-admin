import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from 'dashboard/App';
// import "dashboard/index.css";
import dynamic from 'next/dynamic';

const App = dynamic(() => import('dashboard/App'), { ssr: false });
export default function () {
  if (typeof document !== 'undefined') {
    return <App />;
  } else {
    return <div>Loading</div>;
  }
}
