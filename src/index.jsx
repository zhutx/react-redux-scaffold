import React from 'react'; // 引入React
import ReactDOM from 'react-dom'; // 引入ReactDOM
import { Provider } from 'react-redux'; // Provider作为最外层组件，可以把store传递给所有子组件
import 'normalize.css'; // 重置元素浏览器默认样式
import store from './store'; // 引入Store
import Routes from './routes'; // 引入路由配置

function Index() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
}

// 渲染
ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;
