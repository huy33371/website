import { FETCH_ALL_MANUFACTURERS } from '../../actions/ManufacturerAction/manufacturerActionTypes';

// Trạng thái ban đầu
const initialState = {
    listManufacturers: []
};

const manufacturerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_MANUFACTURERS:
            return {
                ...state,
                listManufacturers: action.payload,
            };
        default:
            return state;
    }
};

export default manufacturerReducer;

