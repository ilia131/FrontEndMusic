import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';
import { Navbar , Hero  , Songs , Songs1 , Footer} from './components';
import { Setup  } from './components/utils'
import { useSelector , useDispatch,} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
         <Setup />
        <App />
       <div id="portal" />
      </Router>
    </Provider>
  </React.StrictMode>,
);
