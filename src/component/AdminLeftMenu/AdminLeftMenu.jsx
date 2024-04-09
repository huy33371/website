import { NavLink } from 'react-router-dom';
import './AdminLeftMenu.scss';

const AdminLeftMenu = () => {
    return (
        <div className='admin-menu-left-container'>
            <NavLink to="/admin" className='menu-home item-menu' activeClassName='active' end>
                <p>Trang chủ</p>
            </NavLink>
            <NavLink to="/admin/category" className='menu-category item-menu' activeClassName='active'>
                <p>Quản trị Danh mục</p>
            </NavLink>
            <NavLink to="/admin/product" className='menu-product item-menu' activeClassName='active'>
                <p>Quản trị Sản phẩm</p>
            </NavLink>
            <NavLink to="/admin/bill" className='menu-bill item-menu' activeClassName='active'>
                <p>Quản trị Hóa đơn</p>
            </NavLink>
            <NavLink to="/admin/user" className='menu-user item-menu' activeClassName='active'>
                <p>Quản trị Người dùng</p>
            </NavLink>
        </div>
    );
};

export default AdminLeftMenu;
