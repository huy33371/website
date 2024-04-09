import { Route, Routes } from 'react-router-dom';
import AdminHomePage from '../pages/Admin/AdminHomePage/AdminHomePage';
import AdminLayout from '../layouts/AdminLayout';
import ManageCategory from '../pages/Admin/ManageCategory/ManageCategory';
import ManageProduct from '../pages/Admin/ManageProduct/ManageProduct';
import ManageUser from '../pages/Admin/ManageUser/ManageUser';
import AddEditCategory from '../pages/Admin/ManageCategory/AddEditCategory';
import ManageBill from '../pages/Admin/ManageBill/ManageBill';

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/product" element={<ManageProduct />} />
        <Route path="/user" element={<ManageUser />} />
        <Route path="/bill" element={<ManageBill />} />
        <Route path="/add-category" element={<AddEditCategory />} />
        <Route path="/edit-category/:categoryId" element={<AddEditCategory />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
