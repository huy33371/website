import { SEARCH_CUSTOMIZE } from '../../actions/SearchAction/searchActionTypes';
import { searchCustomize } from '../../../services/searchService';
import { toast } from 'react-toastify';

export const searchCustomizeAction = (dataSearch) => {
    return async (dispatch) => {
        try {
            const response = await searchCustomize(dataSearch);
            if(response && response.data.EC === 0) {
                dispatch({ type: SEARCH_CUSTOMIZE, payload: response.data.DT });
            }
            else {
                toast.error(response.data.EM);
            }
            
        } catch (error) {
            console.log(error);
            toast.error("Error at client!");
        }
    };
};
