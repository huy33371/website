import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCategoriesByPaginate } from '../../../services/categoryService';
import { toast } from 'react-toastify';
import './ManageCategory.scss';

const ManageCategory = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, [currentPage]);

    const fetchCategories = async () => {
        try {
            const response = await getCategoriesByPaginate(currentPage);
            if(response && response.data.EC === 0) {
                setCategories(response.data.DT.categories);
                setTotalPages(response.data.DT.totalPages);
            }
            else if (response && response.data.EC === -1) {
                toast.error(response.data.EM);
            }
            
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            await axios.delete(`/api/categories/${categoryId}`);
            // Refresh category list
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleEditCategory = (categoryId) => {
        navigate(`/admin/edit-category/${categoryId}`);
    }

    return (
        <div className="container my-3 manage-category-container">
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <h4>Danh sách danh mục</h4>
                <button className="btn btn-primary" onClick={() => navigate('/admin/add-category')}>Thêm mới danh mục</button>
            </div>
            <table className="table table-striped table-manage-category">
                <thead>
                    <tr>
                        <th className='col-name' scope="col">Tên</th>
                        <th className='col-img' scope="col">Ảnh</th>
                        <th className='col-des' scope="col">Mô tả</th>
                        <th className='col-storage' scope="col">Dung lượng</th>
                        <th className='col-ram' scope="col">RAM</th>
                        <th className='col-chip' scope="col">Chip</th>
                        <th className='col-display' scope="col">Màn hình</th>
                        <th className='col-price' scope="col">Giá</th>
                        <th className='col-discount' scope="col">Khuyến mãi</th>
                        <th className='col-manu' scope="col">Hãng</th>
                        <th className='col-special' scope="col">Đặc biệt</th>
                        <th className='col-action' scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category._id}>
                            <td className='col-name'>{category.name}</td>
                            <td className='col-img'>{category.image && <img src={category.image} alt="category image" style={{ maxWidth: '50px' }} />}</td>
                            <td className='col-des'>{category.description}</td>
                            <td className='col-storage'>{category.storageCapacity}</td>
                            <td className='col-ram'>{category.ram}</td>
                            <td className='col-chip'>{category.chipset}</td>
                            <td className='col-display'>{category.display}</td>
                            <td className='col-price'>{category.price}</td>
                            <td className='col-discount'>{category.discountPrice}</td>
                            <td className='col-manu'>{category.manufacturer}</td>
                            <td className='col-special'>{category.specialProduct ? 'Có' : 'Không'}</td>
                            <td className='col-action'>
                                <button className="btn btn-warning me-2" onClick={() => handleEditCategory(category._id)}>Sửa</button>
                                <button className="btn btn-danger" onClick={() => handleDeleteCategory(category._id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages).keys()].map(page => (
                        <li className={`page-item ${page + 1 === currentPage ? 'active' : ''}`} key={page}>
                            <button className="page-link" onClick={() => setCurrentPage(page + 1)}>{page + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ManageCategory;
