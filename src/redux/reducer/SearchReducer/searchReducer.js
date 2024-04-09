import { SEARCH_CUSTOMIZE, SEARCH_NORMAL } from '../../actions/SearchAction/searchActionTypes';

// Trạng thái ban đầu
const initialState = {
    resultSearchCustom: [],
    resultSearchNormal: [],
    totalPagesSearchNormal: 0,
    totalResultSearchNormal: 0,
    keywordNormal: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CUSTOMIZE:
            return {
                ...state,
                resultSearchCustom: action.payload,
            };
        case SEARCH_NORMAL:
            return {
                ...state,
                resultSearchNormal: action.payload.categories,
                totalPagesSearchNormal: action.payload.totalPages,
                totalResultSearchNormal: action.payload.totalResult,
                keywordNormal: action.payload.keyword,
            };
        default:
            return state;
    }
};

export default searchReducer;

