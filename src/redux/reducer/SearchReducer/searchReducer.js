import { SEARCH_CUSTOMIZE } from '../../actions/SearchAction/searchActionTypes';

// Trạng thái ban đầu
const initialState = {
    resultSearch: []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CUSTOMIZE:
            return {
                ...state,
                resultSearch: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;

