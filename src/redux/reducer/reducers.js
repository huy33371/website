// src/redux/reducers.js
import { combineReducers } from 'redux';
import cartReducer from './CartReducer/cartReducer';
import userReducer from './userReducer/userReducer';
import searchReducer from './SearchReducer/searchReducer';
import manufacturerReducer from './ManufacturerReducer/manufacturerReducer';
import categoryReducer from './CategoryReducer/categoryReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  search: searchReducer,
  manufacturer: manufacturerReducer,
  category: categoryReducer
});

export default rootReducer;
