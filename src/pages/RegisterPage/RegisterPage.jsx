import React, { useState } from 'react';
import './RegisterPage.scss';
import { registerNewUser } from '../../services/userService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullname: '',
        address: '',
        sex: '',
        phone: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kiểm tra xem các trường thông tin đã được nhập đầy đủ chưa
        const errors = {};
        if (!formData.email) {
            errors.email = 'Email is required.';
        }
        if (!formData.password) {
            errors.password = 'Password is required.';
        }
        if (!formData.fullname) {
            errors.fullname = 'Full name is required.';
        }
        // Cập nhật state lỗi
        setFormErrors(errors);
        
        // Nếu có lỗi, không thực hiện đăng ký
        if (Object.keys(errors).length === 0) {
            try {
                const response = await registerNewUser(formData);
                if(response && response.data.EC === 0) {
                    toast.success(response.data.EM);
                    navigate('/login');
                }
                if(response && response.data.EC !== 0) {
                    toast.error(response.data.EM);
                }
            } catch (error) {
                toast.error("Error at client!");
            }
        } else {
            toast.error('Please fill in all required fields.');
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className={`form-control ${formErrors.email && 'is-invalid'}`} id="email" name="email" value={formData.email} onChange={handleChange} required />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className={`form-control ${formErrors.password && 'is-invalid'}`} id="password" name="password" value={formData.password} onChange={handleChange} required />
                                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">Full Name</label>
                                    <input type="text" className={`form-control ${formErrors.fullname && 'is-invalid'}`} id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
                                    {formErrors.fullname && <div className="invalid-feedback">{formErrors.fullname}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sex" className="form-label">Sex</label>
                                    <select className="form-select" id="sex" name="sex" value={formData.sex} onChange={handleChange}>
                                        <option value="">Select Sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
