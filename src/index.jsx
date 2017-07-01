import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import store from './store';
import Routes from './routes';

function Index() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;
