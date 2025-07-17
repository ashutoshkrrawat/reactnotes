//standard process of making store

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; //we have imported the reducer function and named it to todoReducer

export const store = configureStore({
    reducer:todoReducer
})

//? what is the need for creating a store
/*
✅ With a Redux Store:
You put the data (like user info, todos, etc.) in one global store

Any component can access it directly (using useSelector())

Any component can change it (using useDispatch())

 */