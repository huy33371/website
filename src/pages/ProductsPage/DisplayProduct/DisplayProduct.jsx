import { useEffect, useState } from 'react';
import ProductCard from '../../../component/ProductCard/ProductCard';
import './DisplayProduct.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesByManufacturerAction } from '../../../redux/actions/CategoryAction/categoryAction';

const DisplayProduct = () => {
    const dispatch = useDispatch();
    const categoris = useSelector(state => state.category.listCategorisByManu);
    const totalPages = useSelector(state => state.category.totalPagesByManu);
    const manufacturerSelected = useSelector(state => state.category.manuSelected);
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setListData(categoris);
    }, [dispatch, categoris, totalPages]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        dispatch(getCategoriesByManufacturerAction(manufacturerSelected, page));
    };

    return (
        <div className='display-container'>
            <h3>{manufacturerSelected}</h3>
            <div className='display-product'>
                {listData && listData.map(product => (
                    <div key={product._id} className="col-md-3 mb-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation" className='d-flex justify-content-center my-2'>
                <ul className="pagination">
                    {[...Array(totalPages).keys()].map((page) => (
                        <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default DisplayProduct;
