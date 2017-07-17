import { combineReducers } from 'redux'; // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux'; // 将routerReducer一起合并，由redux统一管理状态

// react-router-redux的工作原理是在Redux Store的状态树的routing字段中保存当前路由信息
export default combineReducers({
    routing: routerReducer
});
