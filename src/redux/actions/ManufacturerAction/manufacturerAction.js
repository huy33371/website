import { FETCH_ALL_MANUFACTURERS } from '../../actions/ManufacturerAction/manufacturerActionTypes';
import { getAllManufacturers } from '../../../services/manufacturerService';
import { toast } from 'react-toastify';

export const getAllManufacturersActions = () => {
    return async (dispatch) => {
        try {
            const response = await getAllManufacturers();
            if(response && response.data.EC === 0) {
                dispatch({ type: FETCH_ALL_MANUFACTURERS, payload: response.data.DT });
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
