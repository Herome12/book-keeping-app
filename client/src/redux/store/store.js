import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userAuthReducer';
import userProfileReducer from '../reducers/userProfileReducer';
import userUpdateReducer from '../reducers/userUpdateReducer';
import createdBookReducer from '../reducers/books/createdBookReducer';
import booksListReducer from '../reducers/books/booksListReducer';
import bookDetailReducer from '../reducers/books/bookDetailsReducer';
import usersListReducer from '../reducers/usersListReducer';

// Initialize the Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    userLogin: userReducer,
    userProfile: userProfileReducer,
    updatedUser: userUpdateReducer,
    bookCreated: createdBookReducer,
    booksList: booksListReducer,
    bookDetails: bookDetailReducer,
    usersList: usersListReducer,
  },
  // Define the initial state
  preloadedState: {
    userLogin: {
      userInfo: localStorage.getItem('userAuthData')
        ? JSON.parse(localStorage.getItem('userAuthData'))
        : null,
    },
  },
});

export default store;
