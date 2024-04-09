import React, { useEffect, useState } from 'react';
import { createANewCategory, getCategoryById, updateCategory } from '../../../services/categoryService'; 
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllManufacturersActions } from '../../../redux/actions/ManufacturerAction/manufacturerAction';

const AddEditCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [isEditing, setIsEditing] = useState(!!categoryId);

    const [categoryData, setCategoryData] = useState({
        name: '',
        image: '',
        description: '',
        storageCapacity: '',
        ram: '',
        chipset: '',
        display: '',
        price: '',
        discountPrice: '',
        specialProduct: false,
        manufacturer: '',
    });
    const [ listManufacturers, setListManufacturers ] = useState([]);
    const [imagePreview, setImagePreview] = useState('');
    const manufacturers = useSelector(state => state.manufacturer.listManufacturers);

    useEffect(() => {
        console.log("dddddd")
        if (!manufacturers || manufacturers.length === 0) {
            fetchManufacturers();
        }
        else {
            setListManufacturers(manufacturers);
        }
    }, [dispatch, manufacturers]);

    const fetchManufacturers = async() => {
        await dispatch(getAllManufacturersActions());
        setListManufacturers(manufacturers);
    }

    useEffect(() => {
        // Nếu có categoryId được truyền vào, gọi API để lấy chi tiết danh mục
        if (categoryId) {
            getCategoryData(categoryId);
        }
    }, [categoryId]);

    const getCategoryData = async (id) => {
        try {
            const response = await getCategoryById(id);

            if(response && response.data.EC === 0) {
                const data = response.data.DT;
                // Đổ dữ liệu từ response vào state
                setCategoryData({
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    storageCapacity: data.storageCapacity,
                    ram: data.ram,
                    chipset: data.chipset,
                    display: data.display,
                    price: data.price,
                    discountPrice: data.discountPrice,
                    specialProduct: data.specialProduct,
                    manufacturer: data.manufacturer
                });
                // Hiển thị ảnh xem trước
                setImagePreview(data.image);
            }
            else if (response && response.data.EC === 404) {
                toast.error(response.data.EM);
            }
            else if (response && response.data.EC === -1) {
                toast.error(response.data.EM);
            }
            
        } catch (error) {
            console.error('Error fetching category data:', error);
            toast.error("Error at client!");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCategoryData(prevState => ({
                ...prevState,
                image: reader.result
            }));
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
                // Nếu đang sửa gọi API cập nhật danh mục
                response = await updateCategory(categoryId, categoryData);
            } else {
                // Nếu Thêm mới gọi API thêm mới danh mục
                response = await createANewCategory(categoryData);
            }
    
            if (response && response.data.EC === 0) {
                toast.success(response.data.EM);
                // Xử lý thành công, reset dữ liệu và hình ảnh
                setCategoryData({
                    name: '',
                    image: '',
                    description: '',
                    storageCapacity: '',
                    ram: '',
                    chipset: '',
                    display: '',
                    price: '',
                    discountPrice: '',
                    specialProduct: false,
                    manufacturer: ''
                });
                setImagePreview('');
    
                // về trang quản lý danh mục
                navigate('/admin/category');
            } else if (response && response.data.EC === -1) {
                toast.error(response.data.EM);
            }
    
        } catch (error) {
            console.error('Error handling form submission:', error);
            toast.error("Error at client!");
        }
    };

    const handleManufacturerChange = (e) => {
        const { value } = e.target;
        setCategoryData(prevState => ({
            ...prevState,
            manufacturer: value
        }));
    };

    return (
        <div className="container my-3">
            <h4 className='text-center'>{isEditing ? 'Sửa danh mục' : 'Thêm mới danh mục'}</h4>
    
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên danh mục:</label>
                    <input type="text" className="form-control" id="name" name="name" value={categoryData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="manufacturer" className="form-label">Hãng:</label>
                    <select className="form-select" id="manufacturer" name="manufacturer" value={categoryData.manufacturer} onChange={handleManufacturerChange}>
                        <option value="">Chọn hãng</option>
                        {listManufacturers && listManufacturers.map(manufacturer => (
                            <option key={manufacturer._id} value={manufacturer.name}>{manufacturer.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Ảnh:</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-3" style={{ maxWidth: '150px' }} />}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Mô tả:</label>
                    <textarea className="form-control" id="description" name="description" value={categoryData.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="storageCapacity" className="form-label">Dung lượng:</label>
                    <input type="text" className="form-control" id="storageCapacity" name="storageCapacity" value={categoryData.storageCapacity} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ram" className="form-label">RAM:</label>
                    <input type="text" className="form-control" id="ram" name="ram" value={categoryData.ram} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="chipset" className="form-label">Chipset:</label>
                    <input type="text" className="form-control" id="chipset" name="chipset" value={categoryData.chipset} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="display" className="form-label">Màn hình:</label>
                    <input type="text" className="form-control" id="display" name="display" value={categoryData.display} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá:</label>
                    <input type="text" className="form-control" id="price" name="price" value={categoryData.price} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discountPrice" className="form-label">Giá khuyến mãi:</label>
                    <input type="text" className="form-control" id="discountPrice" name="discountPrice" value={categoryData.discountPrice} onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="specialProduct" name="specialProduct" checked={categoryData.specialProduct} onChange={() => setCategoryData(prevState => ({ ...prevState, specialProduct: !prevState.specialProduct }))} />
                    <label className="form-check-label" htmlFor="specialProduct">Sản phẩm đặc biệt</label>
                </div>
                <button type="submit" className="btn btn-primary">Lưu</button>
            </form>
        </div>
    );
};

export default AddEditCategory;
