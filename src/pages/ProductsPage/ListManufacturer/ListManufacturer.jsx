import { useState, useEffect } from 'react';
import './ListManufacturer.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllManufacturersActions } from '../../../redux/actions/ManufacturerAction/manufacturerAction';
import { getCategoriesByManufacturerAction } from '../../../redux/actions/CategoryAction/categoryAction';
import { toast } from 'react-toastify';

const ListManufacturer = () => {
    const dispatch = useDispatch();
    const listManufacturers = useSelector(state => state.manufacturer.listManufacturers);

    useEffect(() => {
        if (!listManufacturers || listManufacturers.length === 0) {
            fetchData();
        }
    }, [dispatch, listManufacturers]);

    const fetchData = async () => {
        try {
            await dispatch(getAllManufacturersActions());
        } catch (error) {
            toast.error("Error!");
        }
    };

    const handleOnclickManufacruer = async (manufacturer) => {
        await dispatch(getCategoriesByManufacturerAction(manufacturer, +1));
    }

    return (
        <div className='products-manufacturer'>
            {listManufacturers && listManufacturers.map(manufacturer => (
                <div className='manufacturer-item' key={manufacturer._id}>
                    <span onClick={() => { handleOnclickManufacruer(manufacturer.name) }}>{manufacturer.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ListManufacturer;
