import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import RoutesIndex from './routes';
import reducers from './store/reducers';
import 'react-toastify/dist/ReactToastify.css'; // css untuk toastify
// import 'gridjs/dist/theme/mermaid.css'; // css untuk gridjs
import 'react-datepicker/dist/react-datepicker.css'; // css untuk datepicker

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        // theme="colored" // styles theme colored kadang terambil kadang tidak di toast.update
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RoutesIndex />
    </Provider>
  </React.StrictMode>
);
