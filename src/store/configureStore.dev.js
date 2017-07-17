import { createStore, applyMiddleware, compose } from 'redux'; // 引入redux的相关方法
import thunkMiddleware from 'redux-thunk'; // redux-thunk 支持 dispatch function，可实现异步调用
import { createLogger } from 'redux-logger'; // 利用redux-logger打印日志
import rootReducers from '../reducers'; // 引入reducer

// 生成日志中间件
const loggerMiddleware = createLogger();

// 中间件集
const middlewares = [thunkMiddleware, loggerMiddleware];

const win = window;

// Store Enhancer可以增强Redux Store的dispatch方法，也就是从dispatch函数调用到action对象被reducer处理这个过程中的操作
// 利用compose合并Store Enhancer
const storeEnhancers = compose(
    applyMiddleware(...middlewares), // applyMiddleware()返回Store Enhancer
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f // 其他的Store Enhancer
);

const initialState = {};

// 利用redux的createStore函数创建store
export default createStore(rootReducers, initialState, storeEnhancers);
