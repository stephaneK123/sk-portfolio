import ReactDOM from 'react-dom/client';
import React from "react";

import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const __DEV__ = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// if (__DEV__) {
//   const RedBox = require('redbox-react').default
//   try {
//     render(
//       <React.StrictMode>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </React.StrictMode>, root)
//   } catch (e) {
//     render(<RedBox error={e} />, root)
//   }
// } else {
//   render(<React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>, root)
// }


