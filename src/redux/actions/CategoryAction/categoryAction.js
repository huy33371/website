import { FETCH_CATEGORY_BY_MANUFACTURER } from '../../actions/CategoryAction/categoryActionTypes';
import { getCategoriesByManufacturer } from '../../../services/categoryService';
import { toast } from 'react-toastify';

export const getCategoriesByManufacturerAction = (manufacturer, currentPage) => {
    return async (dispatch) => {
        try {
            const response = await getCategoriesByManufacturer(manufacturer, currentPage);
            if(response && response.data.EC === 0) {
                dispatch({ 
                    type: FETCH_CATEGORY_BY_MANUFACTURER, 
                    payload: {
                        categories: response.data.DT.categories,
                        totalPages: response.data.DT.totalPages,
                        manufacturer: manufacturer
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
