import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/count';

const store = configureStore({reducer:countReducer});


export default store;
