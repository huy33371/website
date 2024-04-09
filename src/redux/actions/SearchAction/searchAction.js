import { SEARCH_CUSTOMIZE, SEARCH_NORMAL } from '../../actions/SearchAction/searchActionTypes';
import { searchCustomize, searchCategoriesNormal } from '../../../services/searchService';
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

export const searchCategoriesNormalAction = (keyword, currentPage) => {
    return async (dispatch) => {
        try {
            const response = await searchCategoriesNormal(keyword, currentPage);
            if(response && response.data.EC === 0) {
                dispatch({ 
                    type: SEARCH_NORMAL, 
                    payload: {
                        categories: response.data.DT.categories,
                        totalPages: response.data.DT.totalPages,
                        totalResult: response.data.DT.totalCategories,
                        keyword: keyword
                    }
                });
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
