import { FETCH_CATEGORY_BY_MANUFACTURER } from '../../actions/CategoryAction/categoryActionTypes';

const initialState = {
    listCategorisByManu: [],
    totalPagesByManu: 0,
    manuSelected: ''
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_BY_MANUFACTURER:
            return {
                ...state,
                listCategorisByManu: action.payload.categories,
                totalPagesByManu: action.payload.totalPages,
                manuSelected: action.payload.manufacturer
            };
        default:
            return state;
    }
};

export default categoryReducer;
