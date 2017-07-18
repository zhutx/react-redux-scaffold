import devConfigureStore from './configureStore.dev';
import prodConfigureStore from './configureStore.prod';

// 根据环境获取对应的store
const configureStore = process.env.local
    ? devConfigureStore
    : prodConfigureStore;

export default configureStore;
