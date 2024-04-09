import { useState, useEffect } from 'react';
import './ListManufacturer.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllManufacturersActions } from '../../../redux/actions/ManufacturerAction/manufacturerAction';
import { getCategoriesByManufacturerAction } from '../../../redux/actions/CategoryAction/categoryAction';

const ListManufacturer = () => {
    const dispatch = useDispatch();
    const listManufacturers = useSelector(state => state.manufacturer.listManufacturers);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        if (!listManufacturers || listManufacturers.length === 0) {
            fetchData();
        }
        else {
            setListData(listManufacturers);
        }
    }, [dispatch, listManufacturers]);

    const fetchData = async () => {
        try {
            await dispatch(getAllManufacturersActions());
            setListData(listManufacturers);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleOnclickManufacruer = async (manufacturer) => {
        await dispatch(getCategoriesByManufacturerAction(manufacturer, +1));
    }

    return (
        <div className='products-manufacturer'>
            {listData && listData.map(manufacturer => (
                <div className='manufacturer-item' key={manufacturer._id}>
                    <span onClick={() => { handleOnclickManufacruer(manufacturer.name) }}>{manufacturer.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ListManufacturer;
