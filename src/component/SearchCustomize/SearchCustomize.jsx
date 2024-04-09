import React, { useState } from 'react';
import './SearchCustomize.scss';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { searchCustomizeAction } from '../../redux/actions/SearchAction/searchAction';

const SearchCustomize = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        storageCapacity: '',
        ram: '',
        chipset: '',
        display: ''
    });

    // State cho ô input custom
    const [customInputDisplay, setCustomInputDisplay] = useState({
        ram: false,
        storageCapacity: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Nếu người dùng chọn ô input custom
        if (value === 'custom') {
            // Hiển thị ô input custom tương ứng
            setCustomInputDisplay(prevState => ({
                ...prevState,
                [name]: true
            }));
        } else {
            // Nếu không chọn ô input custom, đặt giá trị và ẩn ô input custom
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
            setCustomInputDisplay(prevState => ({
                ...prevState,
                [name]: false
            }));
        }
    };

    // Hàm xử lý sự kiện khi người dùng nhập giá trị vào ô input custom
    const handleCustomInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kiểm tra xem các thông số đã được chọn đủ hay chưa
        if (!formData.ram || !formData.storageCapacity || !formData.chipset || !formData.display) {
            // Hiển thị thông báo nếu chưa chọn đủ thông số
            toast.error('Please select all options.');
            return;
        }

        try {
            await dispatch(searchCustomizeAction(formData));
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="search-customize">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="ram" className="form-label">RAM</label>
                        <div className='input-content'>
                            <div className='item-input'>
                                <input type="radio" id="ram2" name="ram" value="2" onChange={handleChange} />
                                <label htmlFor="ram2">2 GB</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="ram4" name="ram" value="4" onChange={handleChange} />
                                <label htmlFor="ram4">4 GB</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="ram6" name="ram" value="6" onChange={handleChange} />
                                <label htmlFor="ram6">6 GB</label>
                            </div>
                            <div className='item-input item-input-custom'>
                                <input type="radio" id="ramCustom" name="ram" value="custom" onChange={handleChange} />
                                <label htmlFor="ramCustom">Custom</label>
                                {customInputDisplay.ram && (
                                    <input type="number" className="form-control custom-input" name="ram" onChange={handleCustomInputChange} placeholder="RAM" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="storageCapacity" className="form-label">Storage Capacity</label>
                        <div className='input-content'>
                            <div className='item-input'>
                                <input type="radio" id="storage16" name="storageCapacity" value="16" onChange={handleChange} />
                                <label htmlFor="storage16">16 GB</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="storage32" name="storageCapacity" value="32" onChange={handleChange} />
                                <label htmlFor="storage32">32 GB</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="storage64" name="storageCapacity" value="64" onChange={handleChange} />
                                <label htmlFor="storage64">64 GB</label>
                            </div>
                            <div className='item-input item-input-custom'>
                                <input type="radio" id="storageCustom" name="storageCapacity" value="custom" onChange={handleChange} />
                                <label htmlFor="storageCustom">Custom</label>
                                {customInputDisplay.storageCapacity && (
                                    <input type="number" className="form-control custom-input" name="storageCapacity" onChange={handleCustomInputChange} placeholder="Storage" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="chipset" className="form-label">Chipset</label>
                        <div className='input-content'>
                            <div className='item-input'>
                                <input type="radio" id="i2" name="chipset" value="2" onChange={handleChange} />
                                <label htmlFor="i2">i2</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="i3" name="chipset" value="3" onChange={handleChange} />
                                <label htmlFor="i3">i3</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="i5" name="chipset" value="5" onChange={handleChange} />
                                <label htmlFor="i5">i5</label>
                            </div>
                            <div className='item-input'>
                                <input type="radio" id="i7" name="chipset" value="7" onChange={handleChange} />
                                <label htmlFor="i7">i7</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="display" className="form-label">Display</label>
                        <input type="number" className="form-control" id="display" name="display" value={formData.display} onChange={handleChange} placeholder="Display Size" />
                        <button type="submit" className="btn btn-primary btn-search">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchCustomize;
