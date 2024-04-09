import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import './OrderConfirmPage.scss';
import { orderBillService } from '../../services/billService';

const OrderConfirmPage = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.items);
    const [paymentType, setPaymentType] = useState('Cash on Delivery');
    const [fullname, setFullname] = useState(currentUser.fullname || '');
    const [phone, setPhone] = useState(currentUser.phone || '');
    const [address, setAddress] = useState(currentUser.address || '');
    const [modalOpen, setModalOpen] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra các trường thông tin đã nhập đủ
        if (!fullname || !phone || !address) {
            toast.error('Please fill in all required fields.');
            return;
        }

        // Hiển thị modal xác nhận đặt hàng
        setModalOpen(true);
    };

    const handleConfirmOrder = async () => {
        try {
            // Tạo object bill từ thông tin người dùng và giỏ hàng
            const bill = {
                totalPrice: totalPrice,
                user: {
                    userId: currentUser._id,
                    fullname: fullname,
                    phone: phone,
                    address: address
                },
                paymentType: paymentType,
                status: 'Processing', // Mặc định là đang xử lý
                billDetails: cartItems.map(item => ({
                    category: {
                        categoryId: item._id,
                        name: item.name,
                        image: item.image
                    },
                    price: item.price,
                    quantity: item.quantity
                }))
            };
            

            console.log("check data: ", bill);

            // Gọi API để lưu hóa đơn
            const response = await orderBillService(bill);

            if (response && response.data.EC === 0) {
                toast.success('Order placed successfully!');
            } else if(response && response.data.EC !== 0) {
                toast.error(response.data.EM);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('Error placing order. Please try again later.');
        } finally {
            // Đóng modal xác nhận sau khi xử lý xong
            setModalOpen(false);
        }
    };

    return (
        <div className="container order-confirm-page my-5">
            <h2>Xác nhận đặt hàng</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Thông tin khách hàng</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="paymentType" className="form-label">Payment Type</label>
                            <select className="form-select" id="paymentType" value={paymentType} onChange={handlePaymentTypeChange}>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Sản phẩm</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} alt={item.name} style={{ maxWidth: '50px' }} className="product-image" /></td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total-price">Total Price: ${totalPrice}</div>
                </div>
            </div>
            {/* Modal xác nhận đặt hàng */}
            {modalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Xác nhận đặt hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Bạn có chắc chắn đặt hàng?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Hủy</button>
                                <button type="button" className="btn btn-primary" onClick={handleConfirmOrder}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalOpen && <div className="modal-backdrop fade show"></div>}
        </div>
    );
};

export default OrderConfirmPage;
