import './ManageBill.scss';
import React, { useState, useEffect } from 'react';
import { getListBillsByPaginate } from '../../../services/billService';
import { toast } from 'react-toastify';

const ManageBill = () => {
    const [bills, setBills] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchBills();
    }, [currentPage]);

    const fetchBills = async () => {
        try {
            const response = await getListBillsByPaginate(currentPage);
            if(response && response.data.EC === 0) {
                const { bills, totalPages } = response.data.DT;
                setBills(bills);
                setTotalPages(totalPages);
            }
            else if (response && response.data.EC !== 0) {
                toast.error(response.data.EM);
            }
            
        } catch (error) {
            console.error('Error fetching bills:', error);
            toast.error("Error!");
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='manage-bill-container'>
            <h4>Danh sách đơn hàng</h4>
            <div className='bills-table'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Total Price</th>
                            <th>Sale Date</th>
                            <th>User Fullname</th>
                            <th>User Phone</th>
                            <th>User Address</th>
                            <th>Payment Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map(bill => (
                            <tr key={bill._id}>
                                <td>{bill.totalPrice}</td>
                                <td>{bill.saleDate}</td>
                                <td>{bill.user.fullname}</td>
                                <td>{bill.user.phone}</td>
                                <td>{bill.user.address}</td>
                                <td>{bill.paymentType}</td>
                                <td>{bill.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <nav className='d-flex justify-content-center my-2'>
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ManageBill;